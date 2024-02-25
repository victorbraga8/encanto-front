"use client";
import { useSession } from "next-auth/react";
import TabelaInicial from "../tabela/page";
// import { SessionProps } from "./types/sessionType";
// import UsuarioDeslogado from "@/app/usuario-deslogado/page";
// import useSWR from "swr";
// import UsuarioLogado from "../usuario-logado/page";
// import helpers from "@/lib/helpers";

const HomeScreen = () => {
  // const { data } = useSession();
  return (
    <>
      <TabelaInicial />
    </>
  );
  //   return <>{data?.user?.name ? <UsuarioLogado /> : <UsuarioDeslogado />}</>;
};

export default HomeScreen;
