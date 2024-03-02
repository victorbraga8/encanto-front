"use client";
import { signIn, useSession } from "next-auth/react";
import UsuarioDeslogado from "../components/usuario-deslogado/page";

export default function Home() {
  const { data } = useSession();

  return (
    <>
      {/* INJETAR O SIDEBAR NO COMPONENTE LOGADO */}
      {/* <Sidebar /> */}
      <UsuarioDeslogado />
    </>
  );
}
