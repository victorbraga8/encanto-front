import { NextResponse } from "next/server";
import helpers from "../../../home/victorbraga/encanto-front/lib/helpers";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const tokenCookie = request.cookies.get("tokenAD");

  if (!tokenCookie) {
    const token = await helpers.getTokenAndSetCookies();
    const response = NextResponse.next();
    response.cookies.set({
      name: "tokenAD",
      value: token!!!.access_token,
      path: "/",
    });
    return response;
  } else {
    return;
  }
}
