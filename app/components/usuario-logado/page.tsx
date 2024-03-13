"use client";
import { Button } from "@/components/ui/button";
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@radix-ui/react-tooltip";
import { Pencil } from "lucide-react";
import helpers from "@/lib/helpers";
import { useEffect, useState } from "react";
import Link from "next/link";
import clienteFunctions from "@/app/cliente/functions";

const UsuarioLogado = () => {
  const [clientes, setClientes] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resposta = await clienteFunctions.getClientes();
        setClientes(resposta);
        setLoading(false);
      } catch (erro: any) {
        console.error("Erro ao obter clientes:", erro.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {loading ? (
        <div className="loader lg:pl-[268px] max-w-fit flex items-center pt-10 gap-2 overflow-hidden">
          <div className="animate-spin border-t-4 border-blue-500 border-solid rounded-full h-12 w-12"></div>
          Carregando...
        </div>
      ) : (
        <>
          <div className="lg:pl-[268px] max-w-fit pt-10">
            <div className="mb-6">
              <Link href="/cliente/novo">
                <Button className="bg-green-600 hover:bg-green-400">
                  Cadastrar Cliente
                </Button>
              </Link>
            </div>
            <div className="overflow-x-auto mt-4">
              <table className="bg-white border border-gray-300">
                <thead>{/* ... (header code remains unchanged) */}</thead>
                <tbody>
                  {clientes &&
                    (clientes as any[]).map((row: any, index: any) => (
                      <tr
                        key={row.id}
                        className={
                          index % 2 === 0 ? "bg-indigo-50" : "bg-white"
                        }
                      >
                        <td className="py-2 px-4 border-b">{index + 1}</td>
                        <td className="py-2 px-4 border-b">{row.nome}</td>
                        <td className="py-2 px-4 border-b">{row.celular}</td>
                        <td className="py-2 px-4 border-b">{row.email}</td>
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
      )}
    </>
  );
};

export default UsuarioLogado;
