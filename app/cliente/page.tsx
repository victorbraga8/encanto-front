"use client";
import { useState, useEffect } from "react";
import { Pencil } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@radix-ui/react-tooltip";
import clienteFunctions from "../cliente/functions";
import Busca from "./components/busca/page";

const ClienteLista = () => {
  const [clientes, setClientes] = useState<any[]>([]);
  const [filteredClientes, setFilteredClientes] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resposta = await clienteFunctions.getClientes();
        setClientes(resposta);
      } catch (erro: any) {
        console.error("Erro ao obter clientes:", erro.message);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="lg:pl-[268px] max-w-fit pt-10">
        <div className="flex items-center mb-4">
          {/* Passando a propriedade 'clientes' para o componente Busca */}
          <Busca
            clientes={clientes}
            setFilteredClientes={setFilteredClientes}
          />
        </div>
        <div className="overflow-x-auto">
          {filteredClientes.length > 0 ? (
            <table className="bg-white border border-gray-300">
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
                {filteredClientes.map((row, index) => (
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
          ) : (
            <p>Sem resultados</p>
          )}
        </div>
      </div>
    </>
  );
};

export default ClienteLista;
