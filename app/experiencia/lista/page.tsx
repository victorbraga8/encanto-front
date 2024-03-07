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
  const [loading, setLoading] = useState(true);

  const [informacaoRecebida, setInformacaoRecebida] = useState(null);

  const handleReceberInformacao = (informacao: any) => {
    setInformacaoRecebida(informacao);
  };

  const handleConfirmDelete = async () => {
    try {
      await helpers.deleteExperiencia(selectedItemId);
      if (experiencias) {
        const updatedExperiencias = experiencias.filter(
          (experiencia: DadosItem) => experiencia.id !== selectedItemId
        );
        setExperiencias(updatedExperiencias);
      }
      (() => {
        toast({
          className: cn(
            "top-0 right-0 flex fixed md:max-w-[420px] md:top-4 md:right-4"
          ),
          description: "Registro excluído com sucesso!",
          duration: 3000,
        });
      })();

      showToast("Registro excluído com sucesso!");
      setConfirmationOpen(false);
    } catch (error: any) {
      console.error("Erro ao excluir o registro:", error.message);
      (() => {
        toast({
          className: cn(
            "top-0 right-0 flex fixed md:max-w-[420px] md:top-4 md:right-4"
          ),
          description:
            "Erro ao excluir o registro. Tente novamente mais tarde.",
          duration: 3000,
        });
      })();

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

  useEffect(() => {
    console.log("use effect que renderiza inicial");
    const fetchData = async () => {
      try {
        const resposta = await helpers.getExperiencias();
        setExperiencias(resposta);
        setLoading(false);
      } catch (erro: any) {
        console.error("Erro ao obter experiencias:", erro.message);
        setLoading(false);
      }
    };

    fetchData();
    setInformacaoRecebida(null);
  }, [informacaoRecebida]);

  const { toast } = useToast();
  return (
    <>
      <div className="lg:pl-[268px] max-w-fit pt-10">
        <div className="overflow-x-auto mt-4">
          {loading ? (
            <>
              <div className="loader lg:pl-[268px] max-w-fit flex items-center pt-10 gap-2 overflow-hidden">
                <div className="animate-spin border-t-4 border-blue-500 border-solid rounded-full h-12 w-12"></div>
                Carregando...
              </div>
            </>
          ) : (
            <>
              <table className=" bg-white border border-gray-300">
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
                    (experiencias as any[]).map((row: any, index: any) => (
                      <tr
                        key={row.id}
                        className={
                          index % 2 === 0 ? "bg-indigo-50" : "bg-white"
                        }
                      >
                        <td className="py-2 px-4 border-b">{index + 1}</td>
                        <td className="py-2 px-4 border-b">{row.name}</td>
                        <td className="py-2 px-4 border-b">
                          {row.description}
                        </td>
                        {/* <td className="py-2 px-4 border-b w-[60px] h-[60px]">
                          <Image
                            width={80}
                            height={80}
                            alt="imageexperiencia"
                            src={`data:image/png;base64,${row.logomarca}`}
                            loading="eager"
                            style={{ width: "auto", height: "auto" }}
                          />
                        </td> */}
                        <td className="py-2 px-4 border-b">
                          <DemoDialog
                            name={row.name}
                            description={row.description}
                            tipo={"experiencia"}
                            // logomarca={row.logomarca}
                            id={row.id}
                            onEnviarInformacao={handleReceberInformacao}
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
            </>
          )}
        </div>
      </div>

      <ConfirmationModal
        isOpen={isConfirmationOpen}
        onConfirm={handleConfirmDelete}
        onCancel={handleCancelDelete}
        name={selectedName}
      />
    </>
  );
};

export default ListarExperiencia;
