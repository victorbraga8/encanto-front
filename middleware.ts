import { NextResponse } from "next/server";
import helpers from "@/lib/helpers";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const validadeCookie = request.cookies.get("validade");
  const tokenCookie = request.cookies.get("tokenAD");

  let validaExpiracaoToken;

  if (validadeCookie && tokenCookie) {
    validaExpiracaoToken = helpers.validaExpiracaoToken(validadeCookie.value);
  }
  console.log(validaExpiracaoToken);
  console.log(typeof validaExpiracaoToken);
  const horarios = helpers.formataHora();

  const horaAtual = horarios!!!.horaAtualFormatada;
  const horaFutura = horarios!!!.horaFuturaFormatada;

  // const t = Number(1);
  if (
    !tokenCookie ||
    Number(validaExpiracaoToken) <= 5 ||
    Number(validaExpiracaoToken) > 60
  ) {
    const response = NextResponse.next();
    response.cookies.delete("tokenAD");
    response.cookies.delete("gerado");
    response.cookies.delete("validade");

    const token = await helpers.getTokenAndSetCookies();
    response.cookies.set({
      name: "tokenAD",
      value: token!!.access_token,
      path: "/",
    });

    response.cookies.set({
      name: "gerado",
      value: horaAtual,
      path: "/",
    });

    response.cookies.set({
      name: "validade",
      value: horaFutura,
      path: "/",
    });

    return response;
  } else {
    return;
  }
}
