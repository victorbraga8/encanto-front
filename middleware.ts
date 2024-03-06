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

  const horarios = helpers.formataHora();

  const horaAtual = horarios!!!.horaAtualFormatada;
  const horaFutura = horarios!!!.horaFuturaFormatada;

  // console.log(tokenCookie);
  // console.log(Number(validaExpiracaoToken));

  if (!tokenCookie || Number(validaExpiracaoToken) <= 10) {
    console.log("Caiu no IF");
    const token = await helpers.getTokenAndSetCookies();
    const response = NextResponse.next();

    response.cookies.delete({
      name: "tokenAD",
      path: "/",
    });

    response.cookies.delete({
      name: "gerado",
      path: "/",
    });

    response.cookies.delete({
      name: "validade",
      path: "/",
    });

    response.cookies.set({
      name: "tokenAD",
      value: token!!.access_token,
      path: "/",
    });

    response.cookies.set({
      name: "novo",
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
    // console.log("Caiu no else");
    return;
  }
}
