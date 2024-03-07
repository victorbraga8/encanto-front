"use client";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import DemoDialog from "@/app/components/modal/page";
import ConfirmationModal from "@/app/components/modal-confirmacao/page";
import Image from "next/image";
import helpers from "@/lib/helpers";
import Link from "next/link";
import { Delete, DeleteIcon, X } from "lucide-react";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";

interface DadosItem {
  id: number;
  nome: string;
  descricao: string;
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

const ListarExperiencia = () => {
  const [experiencias, setExperiencias] = useState<DadosItem[] | null>(null);
  const [isConfirmationOpen, setConfirmationOpen] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [selectedName, setNameSelected] = useState(null);
  const [deleteStatus, setDeleteStatus] = useState<string | null>(null);

  const handleConfirmDelete = async () => {
    try {
      await helpers.deleteExperiencia(selectedItemId);
      if (experiencias) {
        const updatedExperiencias = experiencias.filter(
          (experiencia: DadosItem) => experiencia.id !== selectedItemId
        );
        setExperiencias(updatedExperiencias);
      }
      showToast("Registro excluído com sucesso!");
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
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [deleteStatus]);

  const showToast = (message: any, type = "success") => {
    setDeleteStatus(type);
  };

  const handleCancelDelete = () => {
    setConfirmationOpen(false);
  };

  const handleDeleteClick = (id: any, name: any) => {
    setNameSelected(name);
    setSelectedItemId(id);
    setConfirmationOpen(true);
  };

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resposta = await helpers.getExperiencias();
        // setExperiencias(resposta);
        setLoading(false);
      } catch (erro: any) {
        console.error("Erro ao obter experiencias:", erro.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const { toast } = useToast();

  return (
    <>
      <div className="lg:pl-[268px] max-w-fit pt-10">
        <div className="overflow-x-auto mt-4">
          {loading ? (
            <div className="loader lg:pl-[268px] max-w-fit flex items-center pt-10 gap-2 overflow-hidden">
              <div className="animate-spin border-t-4 border-blue-500 border-solid rounded-full h-12 w-12"></div>
              Carregando...
            </div>
          ) : (
            <table className="bg-white border border-gray-300">
              <thead>
                <tr className="text-left">
                  <th className="py-2 px-4 border-b">ID</th>
                  <th className="py-2 px-4 border-b">Nome</th>
                  <th className="py-2 px-4 border-b">Descrição</th>
                  {/* <th className="py-2 px-4 border-b">Imagem</th> */}
                  <th className="py-2 px-4 border-b">Ações</th>
                </tr>
              </thead>
              <tbody>
                {experiencias &&
                  experiencias.map((row: any, index: any) => (
                    <tr
                      key={row.id}
                      className={index % 2 === 0 ? "bg-indigo-50" : "bg-white"}
                    >
                      <td className="py-2 px-4 border-b">{index + 1}</td>
                      <td className="py-2 px-4 border-b">{row.nome}</td>
                      <td className="py-2 px-4 border-b">{row.descricao}</td>
                      {/* <td className="py-2 px-4 border-b w-[60px] h-[60px]">
                        <Image
                          width={80}
                          height={80}
                          alt="imageexperiencia"
                          src={`data:image/png;base64,${row.img}`}
                          loading="eager"
                          style={{ width: "auto", height: "auto" }}
                        />
                      </td> */}
                      <td className="py-2 px-4 border-b">
                        <DemoDialog
                          nome={row.nome}
                          descricao={row.descricao}
                          img={row.img}
                          id={row.id}
                        />
                        <Button
                          variant="default"
                          size="icon"
                          className="mr-2 bg-red-600 hover:bg-red-400"
                          onClick={() => handleDeleteClick(row.id, row.nome)}
                        >
                          <X />
                        </Button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          )}
        </div>
      </div>

      <ConfirmationModal
        isOpen={isConfirmationOpen}
        onConfirm={handleConfirmDelete}
        onCancel={handleCancelDelete}
        nome={selectedName}
      />
    </>
  );
};

export default ListarExperiencia;
