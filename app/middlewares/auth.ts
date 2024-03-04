import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("next-auth.session-token");

  if (token) {
    console.log("Cookie next-auth.session-token:", token);
  } else {
    console.log("Cookie next-auth.session-token não encontrado");
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/api/:path*"],
};
