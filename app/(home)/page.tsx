"use client";
import { signIn, useSession } from "next-auth/react";
import UsuarioDeslogado from "../components/usuario-deslogado/page";
import UsuarioLogado from "../components/usuario-logado/page";

export default function Home() {
  const { data } = useSession();

  return (
    <>
      {/* INJETAR O SIDEBAR NO COMPONENTE LOGADO */}
      {/* <Sidebar /> */}
      {data?.user ? <UsuarioLogado /> : <UsuarioDeslogado />}
    </>
  );
}
