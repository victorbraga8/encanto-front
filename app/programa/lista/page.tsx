"use client";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@radix-ui/react-tooltip";
import DemoDialog from "@/app/components/modal/page";

import Image from "next/image";
import helpers from "@/lib/helpers";
import Link from "next/link";

interface DadosItem {
  id: number;
  nome: string;
  descricao: string;
  // Adicione outros campos conforme necessário
}

interface DataRow {
  id: string;
  dataCadastro: string;
  telefone: string;
  img: string;
  status: string;
  ultimaAtualizacao: string;
  acoes: string;
  amount: number;
}

async function getData(): Promise<DataRow[]> {
  return [
    {
      id: "728ed52f",
      dataCadastro: "GOL",
      telefone: "Programa aviação GOL",
      img: "/assets/gol.jpg",
      status: "pendente",
      ultimaAtualizacao: "20/02/2024",
      acoes: "",
      amount: 100,
    },
    {
      id: "2a1b3c4d",
      dataCadastro: "LATAM",
      telefone: "Programa fidelidade LATAM",
      img: "/assets/latam.jpg",
      status: "concluido",
      ultimaAtualizacao: "22/02/2024",
      acoes: "",
      amount: 150,
    },
    {
      id: "5e6f7a8b",
      dataCadastro: "American Airline",
      telefone: "Programa Internacional American Airline",
      img: "/assets/american.jpg",
      status: "cancelado",
      ultimaAtualizacao: "25/02/2024",
      acoes: "",
      amount: 75,
    },
    {
      id: "9c8b7a6f",
      dataCadastro: "AZUL",
      telefone: "Programa da Azul",
      img: "/assets/azul.jpg",
      status: "pendente",
      ultimaAtualizacao: "28/02/2024",
      acoes: "",
      amount: 120,
    },
  ];
}

const ListarPrograma = () => {
  const [programas, setProgramas] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resposta = await helpers.getProgramas();
        setProgramas(resposta);

        // Mova o console.log para dentro do bloco try para garantir que seja chamado apenas uma vez
        console.log(resposta);
      } catch (erro: any) {
        console.error("Erro ao obter programas:", erro.message);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <div className="lg:pl-[268px] max-w-fit pt-10">
        <div className="overflow-x-auto mt-4">
          <table className=" bg-white border border-gray-300">
            <thead>
              <tr className="text-left">
                <th className="py-2 px-4 border-b">ID</th>
                <th className="py-2 px-4 border-b">Nome</th>
                <th className="py-2 px-4 border-b">Descrição</th>
                <th className="py-2 px-4 border-b">Imagem</th>
                <th className="py-2 px-4 border-b">Ações</th>
              </tr>
            </thead>
            <tbody>
              {programas &&
                (programas as any[]).map((row: any, index: any) => (
                  <tr
                    key={row.id}
                    className={index % 2 === 0 ? "bg-indigo-50" : "bg-white"}
                  >
                    <td className="py-2 px-4 border-b">{index + 1}</td>
                    <td className="py-2 px-4 border-b">{row.name}</td>
                    <td className="py-2 px-4 border-b">{row.description}</td>
                    <td className="py-2 px-4 border-b">
                      <Image
                        width={60}
                        height={60}
                        alt="imageprograma"
                        src="/assets/gol.jpg"
                        loading="eager"
                        style={{ width: "auto", height: "auto" }}
                      />
                    </td>
                    <td className="py-2 px-4 border-b">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <Link href={row.id}></Link>
                            <DemoDialog />
                          </TooltipTrigger>
                          <TooltipContent className="bg-cyan-600 text-white py-2 px-3 mb-3 rounded-full">
                            <p>Editar Usuário</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ListarPrograma;
