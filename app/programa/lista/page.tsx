"use client";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@radix-ui/react-tooltip";

import { Pencil } from "lucide-react";
import Image from "next/image";

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
  const [data, setData] = useState<DataRow[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getData();
      setData(result);
    };

    fetchData();
  }, []);

  // const fazerRequisicao = async () => {
  //   const url = "https://swapi.dev/api/people/";

  //   try {
  //     const resposta = await axios.get(url);

  //     console.log("Resposta da API:", resposta.data);
  //   } catch (erro: any) {
  //     console.error("Erro na requisição:", erro.message);
  //   }
  // };

  // fazerRequisicao();
  return (
    <>
      <div className="lg:pl-[268px] max-w-fit pt-10">
        <h1>Listagem de Programas</h1>
        <div className="overflow-x-auto mt-4">
          <table className=" bg-white border border-gray-300">
            <thead>
              <tr className="text-left">
                <th className="py-2 px-4 border-b">ID</th>
                <th className="py-2 px-4 border-b">Nome Programa</th>
                <th className="py-2 px-4 border-b">Descritivo Programa</th>
                <th className="py-2 px-4 border-b">Imagem</th>
                <th className="py-2 px-4 border-b">Data Cadastro</th>
                <th className="py-2 px-4 border-b">Ações</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row: any, index: any) => (
                <tr
                  key={row.id}
                  className={index % 2 === 0 ? "bg-indigo-50" : "bg-white"}
                >
                  <td className="py-2 px-4 border-b">{row.id}</td>
                  <td className="py-2 px-4 border-b">{row.dataCadastro}</td>
                  <td className="py-2 px-4 border-b">{row.telefone}</td>
                  <td className="py-2 px-4 border-b">
                    <Image alt="" width={70} height={70} src={row.img} />
                  </td>
                  <td className="py-2 px-4 border-b">
                    {row.ultimaAtualizacao}
                  </td>
                  <td className="py-2 px-4 border-b">
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button
                            variant="default"
                            size="icon"
                            className="mr-2 bg-green-600 hover:bg-green-400"
                          >
                            <Pencil />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent className="bg-cyan-600 text-white py-2 px-3 mb-3 rounded-full">
                          <p>Editar Programa</p>
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
