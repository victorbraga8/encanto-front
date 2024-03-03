"use client";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import DemoDialog from "@/app/components/modal/page";
import ConfirmationModal from "@/app/components/modal-confirmacao/page";
import Image from "next/image";
import helpers from "@/lib/helpers";
import Link from "next/link";
import { Delete, DeleteIcon, X } from "lucide-react";

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
  const [programas, setProgramas] = useState<DadosItem[] | null>(null);
  const [isConfirmationOpen, setConfirmationOpen] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [selectedName, setNameSelected] = useState(null);
  const [deleteStatus, setDeleteStatus] = useState<string | null>(null);

  const handleConfirmDelete = async () => {
    try {
      // Lógica para excluir o registro na API usando selectedItemId
      await helpers.deleteProgramaFidelidade(selectedItemId, "");

      // Atualizar a lista após a exclusão
      if (programas) {
        const updatedProgramas = programas.filter(
          (programa: DadosItem) => programa.id !== selectedItemId
        );
        setProgramas(updatedProgramas);
      }

      // Exibir toast de sucesso após a exclusão
      showToast("Registro excluído com sucesso!");

      // Fechar o modal de confirmação
      setConfirmationOpen(false);
    } catch (error: any) {
      console.error("Erro ao excluir o registro:", error.message);
      showToast("Erro ao excluir o registro. Tente novamente mais tarde.");
      setConfirmationOpen(false);
    }
  };

  useEffect(() => {
    if (deleteStatus) {
      const timer = setTimeout(() => {
        setDeleteStatus(null);
      }, 5000); // 5000 milissegundos (5 segundos)

      return () => clearTimeout(timer);
    }
  }, [deleteStatus]);

  const showToast = (message: any, type = "success") => {
    // Lógica para exibir o toast usando o ToastProvider
    // Implemente isso conforme a biblioteca que você está usando para toasts
    // Exemplo de uso com shadcn-ui:
    // toast.show(message, { type });
    setDeleteStatus(type);
  };

  const handleCancelDelete = () => {
    // Cancelar a exclusão, se necessário
    setConfirmationOpen(false);
  };

  const handleDeleteClick = (id: any, name: any) => {
    setNameSelected(name);
    setSelectedItemId(id);
    setConfirmationOpen(true);
  };

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
                      <DemoDialog
                        name={row.name}
                        description={row.description}
                        id={row.id}
                      />
                      <Button
                        variant="default"
                        size="icon"
                        className="mr-2 bg-red-600 hover:bg-red-400"
                        onClick={() => handleDeleteClick(row.id, row.name)}
                      >
                        <X />
                      </Button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
      <ConfirmationModal
        isOpen={isConfirmationOpen}
        onConfirm={handleConfirmDelete}
        onCancel={handleCancelDelete}
        name={selectedName}
      />
      {deleteStatus && (
        <div className={`toast ${deleteStatus}`}>
          {deleteStatus === "success"
            ? "Operação concluída com sucesso!"
            : "Erro na operação. Tente novamente."}
        </div>
      )}
    </>
  );
};

export default ListarPrograma;
