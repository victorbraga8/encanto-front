"use client";
import { useSession } from "next-auth/react";
import UsuarioDeslogado from "../components/usuario-deslogado/page";
import UsuarioLogado from "../components/usuario-logado/page";

export default function Home() {
  const { data } = useSession();

  return <>{data?.user ? <UsuarioLogado /> : <UsuarioDeslogado />}</>;
}
