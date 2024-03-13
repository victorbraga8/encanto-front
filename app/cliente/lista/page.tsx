"use client";
import { Button } from "@/components/ui/button";
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@radix-ui/react-tooltip";
import helpers from "@/lib/helpers";
import clienteFunctions from "../functions";
import { useEffect, useState } from "react";
import { Pencil } from "lucide-react";

const ClienteLista = () => {
  const [clientes, setClientes] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resposta = await clienteFunctions.getClientes();
        setClientes(resposta);
        // setLoading(false);
      } catch (erro: any) {
        console.error("Erro ao obter clientes:", erro.message);
        // setLoading(false);
      }
    };

    fetchData();
  }, []);

  console.log(clientes);
  return (
    <>
      <div className="lg:pl-[268px] max-w-fit pt-10">
        <div className="overflow-x-auto mt-4">
          <table className=" bg-white border border-gray-300">
            <thead>
              <tr className="text-left">
                <th className="py-2 px-4 border-b">ID</th>
                <th className="py-2 px-4 border-b">Nome</th>
                <th className="py-2 px-4 border-b">Telefone</th>
                <th className="py-2 px-4 border-b">E-mail</th>
                <th className="py-2 px-4 border-b">Ações</th>
              </tr>
            </thead>
            <tbody>
              {clientes &&
                (clientes as any[]).map((row: any, index: any) => (
                  <tr
                    key={row.id}
                    className={index % 2 === 0 ? "bg-indigo-50" : "bg-white"}
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
  );
};

export default ClienteLista;
