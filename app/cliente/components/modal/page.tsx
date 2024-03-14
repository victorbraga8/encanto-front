"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import helpers from "@/lib/helpers";
import { LucideMessageSquarePlus, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";

import Select from "react-select";

const optionsTipoDocumento: { value: string; label: string }[] = [
  { value: "cpf", label: "CPF" },
  { value: "rg", label: "RG" },
  { value: "br", label: "Passaporte (BR)" }, // Passaporte Brasileiro
  { value: "us", label: "Passaporte (US)" }, // Passaporte Americano
  { value: "uk", label: "Passaporte (UK)" }, // Passaporte Britânico
  { value: "fr", label: "Passaporte (FR)" }, // Passaporte Francês
  { value: "de", label: "Passaporte (DE)" }, // Passaporte Alemão
  { value: "it", label: "Passaporte (IT)" }, // Passaporte Italiano
  { value: "cnh", label: "CNH" },
  { value: "ssn", label: "Seguro Social" },
];

interface ModalDocumentosProps {
  documento: any[]; // ou o tipo apropriado para seus documentos
  adicionarDocumento: (documento: any) => void; // ou o tipo apropriado para a função
  removerDocumento: (indexToRemove: number) => void; // ou o tipo apropriado para a função
  documentoCapturado: any[]; // Adicione esta propriedade
}

const ModalDocumentos: React.FC<ModalDocumentosProps> = ({
  documentoCapturado,
}) => {
  const [programas, setProgramas] = useState<
    { value: string; label: string }[]
  >([]);

  const [documentosCapturados, setDocumentosCapturados] = useState([]);

  const [documentos, setDocumentos] = useState([
    {
      nome: "",
      numero: "",
      tipoDocumento: "",
      validade: "",
      isNew: false, // Para distinguir entre linhas existentes e novas
    },
  ]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const programasFidelidade = await helpers.getProgramaFidelidade();
        const listaProgramas = programasFidelidade.map((item: any) => ({
          value: item.id,
          label: item.name,
        }));
        setProgramas(listaProgramas);
      } catch (error) {
        console.error("Erro ao obter os programas de fidelidade:", error);
      }
    };

    fetchData();
  }, []);

  const handleAddDocumento = () => {
    setDocumentos((prevDocumentos) => [
      ...prevDocumentos,
      {
        nome: "",
        numero: "",
        tipoDocumento: "",
        validade: "",
        isNew: true, // Marca como nova linha
      },
    ]);
  };

  const handleRemoveDocumento = (indexToRemove: any) => {
    setDocumentos((prevDocumentos) =>
      prevDocumentos.filter((_, index) => index !== indexToRemove)
    );
  };

  const adicionarDocumentoCliente = (documentos: any) => {
    setDocumentosCapturados(documentos);
  };

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="default">Inclusão de Documentos</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[825px] min-w-[1200px] max-h-[800px] overflow-auto">
          <DialogHeader>
            <DialogTitle>Listagem de Documentos</DialogTitle>
            <DialogDescription>
              Informe os Documentos vinculados ao cliente, ou adicione novos
              clicando no ícone <b>verde</b>.
            </DialogDescription>
            <div className="w-1/2">
              <div className="flex items-center">
                <Button
                  className="mr-2 bg-green-600 hover:bg-green-400"
                  onClick={handleAddDocumento}
                >
                  <LucideMessageSquarePlus />
                </Button>
              </div>
            </div>
          </DialogHeader>
          <hr />
          {documentos.map((documento, index) => (
            <div
              key={index}
              className="flex flex-row space-x-4 justify-start mb-6 linhaDocumentos"
            >
              <div className="w-1/2">
                <div className="">
                  <Label htmlFor={`numero-${index}`}>Nome Documento:</Label>
                  <Input
                    type="text"
                    name={`numero-${index}`}
                    value={documento.nome}
                    onChange={(e) => {
                      const newDocumentos = [...documentos];
                      newDocumentos[index].nome = e.target.value;
                      setDocumentos(newDocumentos);
                    }}
                  />
                </div>
              </div>
              <div className="w-1/2">
                <div className="">
                  <Label htmlFor={`complemento-${index}`}>
                    Número Documento:
                  </Label>
                  <Input
                    type="text"
                    name={`complemento-${index}`}
                    value={documento.numero}
                    onChange={(e) => {
                      const newDocumentos = [...documentos];
                      newDocumentos[index].numero = e.target.value;
                      setDocumentos(newDocumentos);
                    }}
                  />
                </div>
              </div>
              <div className="w-1/2">
                <div className="">
                  <Label htmlFor={`tipoDocumento-${index}`}>
                    Tipo documento:
                  </Label>
                  <Select
                    placeholder="Selecione"
                    name={`tipoDocumento-${index}`}
                    options={optionsTipoDocumento as any}
                    value={optionsTipoDocumento.find(
                      (option) => option.value === documento.tipoDocumento
                    )}
                    onChange={(selectedOption) => {
                      const newDocumentos = [...documentos];
                      newDocumentos[index].tipoDocumento =
                        selectedOption?.value || "";
                      setDocumentos(newDocumentos);
                    }}
                  />
                </div>
              </div>
              <div className="w-1/2">
                <div className="">
                  <Label htmlFor={`validade-${index}`}>Validade:</Label>
                  <Input
                    type="date"
                    name={`validade-${index}`}
                    value={documento.validade}
                    onChange={(e) => {
                      const newDocumentos = [...documentos];
                      newDocumentos[index].validade = e.target.value;
                      setDocumentos(newDocumentos);
                    }}
                  />
                </div>
              </div>
              {documentos.length > 1 && (
                <div className="">
                  <Button
                    className="mt-6 bg-red-600 hover:bg-red-400"
                    onClick={() => handleRemoveDocumento(index)}
                  >
                    <Trash2 />
                  </Button>
                </div>
              )}
            </div>
          ))}
          <DialogFooter>
            <Button
              className="bg-sky-600 hover:bg-sky-400"
              type="submit"
              onClick={() => {
                const documentosCapturados = documentos.map((documento) => ({
                  nome: documento.nome,
                  numero: documento.numero,
                  tipoDocumento: documento.tipoDocumento,
                  validade: documento.validade,
                }));
                adicionarDocumentoCliente(documentosCapturados);
                console.log("Documentos capturados:", documentosCapturados);
              }}
            >
              Confirmar
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ModalDocumentos;
