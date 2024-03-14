"use client";
import { useState, useEffect } from "react";
import { SquareUserRound } from "lucide-react";
import { Button } from "@/components/ui/button";

import clienteFunctions from "../cliente/functions";
import Busca from "./components/busca/page";
import Loading from "../components/loading/page";
import Link from "next/link";
import BtnAcoes from "../components/btn-acoes/page";

const ClienteLista = () => {
  const [clientes, setClientes] = useState<any[]>([]);
  const [filteredClientes, setFilteredClientes] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resposta = await clienteFunctions.getClientes();
        setClientes(resposta);
        setLoading(false);
      } catch (erro: any) {
        console.error("Erro ao obter clientes:", erro.message);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {loading ? (
        <>
          <Loading />
        </>
      ) : (
        <div className="lg:pl-[268px] pt-10">
          <div className="flex items-center mb-4 gap-5 position-fixed">
            <Busca
              clientes={clientes}
              setFilteredClientes={setFilteredClientes}
            />
            <Link href="cliente/novo">
              <Button className="bg-sky-600 hover:bg-sky-400 transition-colors">
                <SquareUserRound className="mr-1" />
                Cadastrar Cliente
              </Button>
            </Link>
          </div>
          <div className="overflow-x-auto">
            {filteredClientes.length > 0 ? (
              <table className="bg-white border border-gray-300 min-w-[800px]">
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
                        <BtnAcoes />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <div className="min-w-[800px]">
                <p>Sem resultados</p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ClienteLista;
