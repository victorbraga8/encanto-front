"use client";
import { signIn, useSession } from "next-auth/react";
import UsuarioDeslogado from "../components/usuario-deslogado/page";
import UsuarioLogado from "../components/usuario-logado/page";
import helpers from "@/lib/helpers";
import { NextApiRequest, NextApiResponse } from "next";

type TokenAndCookiesParams = {
  req: NextApiRequest;
  res: NextApiResponse;
};

export default function Home() {
  const { data } = useSession();

  return <>{data?.user ? <UsuarioLogado /> : <UsuarioDeslogado />}</>;
}
