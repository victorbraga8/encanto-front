import { NextResponse } from "next/server";
import helpers from "../../../home/victorbraga/encanto-front/lib/helpers";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const validadeCookie = request.cookies.get("validade");
  const tokenCookie = request.cookies.get("tokenAD");

  const validaExpiracaoToken = helpers.validaExpiracaoToken(
    validadeCookie!!!.value
  );
  const horarios = helpers.formataHora();

  const horaAtual = horarios!!!.horaAtualFormatada;
  const horaFutura = horarios!!!.horaFuturaFormatada;

  if (!tokenCookie || Number(validaExpiracaoToken) < 10) {
    const token = await helpers.getTokenAndSetCookies();
    const response = NextResponse.next();

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
