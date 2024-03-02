"use client";
import { useSession } from "next-auth/react";
import TabelaInicial from "../tabela/page";
import helpers from "@/lib/helpers";
import SideBar from "../sidebar/page";
import CadastrarPrograma from "../programa/novo/page";
import { BarChart3 } from "lucide-react";
import Sidebar from "../sidebar/page";
// import { SessionProps } from "./types/sessionType";
// import UsuarioDeslogado from "@/app/usuario-deslogado/page";
// import useSWR from "swr";
// import UsuarioLogado from "../usuario-logado/page";
// import helpers from "@/lib/helpers";

const HomeScreen = async () => {
  // const token = await helpers.fazerSolicitacao();
  // const programas = await helpers.getProgramaFidelidade(token);
  // const { data } = useSession();
  return (
    <>
      <div className="">
        <CadastrarPrograma />
      </div>
      {/* <TabelaInicial /> */}
    </>
  );
  //   return <>{data?.user?.name ? <UsuarioLogado /> : <UsuarioDeslogado />}</>;
};

export default HomeScreen;
