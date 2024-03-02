"use client";
import { useSession } from "next-auth/react";
import TabelaInicial from "../tabela/page";
import helpers from "@/lib/helpers";
import SideBar from "../sidebar/page";
import CadastrarPrograma from "../programa/novo/page";
import { BarChart3 } from "lucide-react";
import Sidebar from "../sidebar/page";

const HomeScreen = async () => {
  // const token = await helpers.fazerSolicitacao();
  // const programas = await helpers.getProgramaFidelidade(token);
  // const { data } = useSession();
  return (
    <>
      {/* <CadastrarPrograma /> */}
      <TabelaInicial />
    </>
  );
  //   return <>{data?.user?.name ? <UsuarioLogado /> : <UsuarioDeslogado />}</>;
};

export default HomeScreen;
