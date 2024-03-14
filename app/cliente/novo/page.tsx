"use client";
import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useState } from "react";
import clienteFunctions from "@/app/cliente/functions";
import InputMask from "react-input-mask";

import Select from "react-select";
import helpers from "@/lib/helpers";
import Link from "next/link";
import { DialogTrigger } from "@/components/ui/dialog";
import ModalDocumentos from "../components/modal/page";

const optionsEstados = [
  { value: "AC", label: "Acre" },
  { value: "AL", label: "Alagoas" },
  { value: "AP", label: "Amapá" },
  { value: "AM", label: "Amazonas" },
  { value: "BA", label: "Bahia" },
  { value: "CE", label: "Ceará" },
  { value: "DF", label: "Distrito Federal" },
  { value: "ES", label: "Espírito Santo" },
  { value: "GO", label: "Goiás" },
  { value: "MA", label: "Maranhão" },
  { value: "MT", label: "Mato Grosso" },
  { value: "MS", label: "Mato Grosso do Sul" },
  { value: "MG", label: "Minas Gerais" },
  { value: "PA", label: "Pará" },
  { value: "PB", label: "Paraíba" },
  { value: "PR", label: "Paraná" },
  { value: "PE", label: "Pernambuco" },
  { value: "PI", label: "Piauí" },
  { value: "RJ", label: "Rio de Janeiro" },
  { value: "RN", label: "Rio Grande do Norte" },
  { value: "RS", label: "Rio Grande do Sul" },
  { value: "RO", label: "Rondônia" },
  { value: "RR", label: "Roraima" },
  { value: "SC", label: "Santa Catarina" },
  { value: "SP", label: "São Paulo" },
  { value: "SE", label: "Sergipe" },
  { value: "TO", label: "Tocantins" },
];

const optionsEstadoCivil: { value: string; label: string }[] = [
  { value: "1", label: "Casado(a)" },
  { value: "2", label: "Solteiro(a)" },
  { value: "3", label: "Divorciado(a)" },
  { value: "4", label: "Viuvo(a)" },
];

const optionsGenero: { value: string; label: string }[] = [
  { value: "1", label: "Masculino" },
  { value: "2", label: "Feminino" },
];

interface Documento {
  nome: string;
  numero: string;
  tipoDocumento: string;
  validade: string;
  // Adicione outros campos, se necessário
}

const ClienteNovo = () => {
  const [selectedOption, setSelectedOption] = useState<{
    value: string;
    label: string;
  } | null>(null);

  const [documentosCliente, setDocumentosCliente] = useState<Documento[]>([]);

  const adicionarDocumentoCliente = (documento: Documento) => {
    setDocumentosCliente([...documentosCliente, documento]);
  };

  const removerDocumentoCliente = (indexToRemove: number) => {
    setDocumentosCliente(
      documentosCliente.filter((_, index) => index !== indexToRemove)
    );
  };

  const [formData, setFormData] = useState({
    name: "",
    dataNascimento: "",
    genero: null,
    rg: "",
    cpf: "",
    celular: "",
    email: "",
    passaporte: "",
    dataValidadePassaporte: "",
    outrosPassaportes: "nao",
    nacionalidadePassaporte: [],
    vistoAmericano: "",
    validadeVistoAmericano: "",
    estadoCivil: "",
    cep: "",
    estado: null,
    endereco: "",
    numero: "",
    complemento: "",
    profissao: "",
    experiencia: null,
    programaFidelidade: null,
    numeroPrograma: "",
    vacinaFebreAmarela: "",
    alergias: "",
    pcd: "",
    condicao: "",
    restricaoAlimentar: "",
    descritivoRestricao: "",
    observacoes: "",
    arquivos: "",
  });

  const handleChangeField = (fieldName: any, value: any) => {
    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: value,
    }));
  };

  const handleGeneroChange = (selectedOption: any) => {
    handleChangeField("genero", selectedOption);
  };

  const handleEstadoCivilChange = (selectedOption: any) => {
    handleChangeField("estadoCivil", selectedOption);
  };

  const [disabledCondicao, setdisableCondicao] = useState(true);
  const [disabledRestricaoAlimentar, setdisableRestricaoAlimentar] =
    useState(true);

  const handleDisabled = (e: any) => {
    if (e.target.value == "sim") {
      if (e.target.id == "condicaoSim") {
        setdisableCondicao(false);
      }
      if (e.target.id == "restricaoSim") {
        setdisableRestricaoAlimentar(false);
      }
    } else {
      if (e.target.id == "condicaoNao") {
        setdisableCondicao(true);
      }
      if (e.target.id == "restricaoNao") {
        setdisableRestricaoAlimentar(true);
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    const cadastraCliente = clienteFunctions.cadastraCliente(formData);
    e.preventDefault();
  };

  return (
    <>
      <div className="flex flex-row justify-between lg:pl-[268px] max-w-fit pt-10">
        <div className="container flex flex-col border-r-2 border-solid border-cyan-500">
          {/* <Button type="submit" onClick={handleSubmit}>
            Confirmar
          </Button> */}
          <div className="flex flex-row space-x-4 justify-start mb-6">
            <div className="w-full">
              <div className="flex-grow">
                <Label htmlFor="name">Nome</Label>
                <Input
                  type="text"
                  placeholder="Nome"
                  name="name"
                  onChange={(e) => handleChangeField("nome", e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-row space-x-4 justify-start mb-6">
            <div className="w-1/2">
              <div className="">
                <Label htmlFor="dataNascimento">Data de Nascimento:</Label>
                <Input
                  type="date"
                  name="dataNascimento"
                  onChange={(e) =>
                    handleChangeField("dataNascimento", e.target.value)
                  }
                />
              </div>
            </div>
            <div className="w-1/2">
              <div className="">
                <Label htmlFor="genero">Sexo</Label>
                <Select
                  placeholder="Selecione"
                  name="genero"
                  defaultValue={formData.genero}
                  onChange={handleGeneroChange}
                  options={optionsGenero as any}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-row space-x-4 justify-start mb-6">
            <div className="w-1/2">
              <div className="">
                <Label htmlFor="rg">RG:</Label>
                <InputMask
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  mask="99.999.999-9"
                  maskPlaceholder=""
                  id="rg"
                  name="rg"
                  onChange={(e) => handleChangeField("rg", e.target.value)}
                />
              </div>
            </div>
            <div className="w-1/2">
              <div className="">
                <Label htmlFor="cpf">CPF:</Label>
                <InputMask
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  mask="999.999.999-99"
                  maskPlaceholder=""
                  id="cpf"
                  name="cpf"
                  onChange={(e) => handleChangeField("cpf", e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-row space-x-4 justify-start mb-6">
            <div className="w-1/2">
              <div className="">
                <Label htmlFor="celular">Celular:</Label>
                <InputMask
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  mask="(99) 99999-9999"
                  maskPlaceholder=""
                  id="celular"
                  name="celular"
                  onChange={(e) => handleChangeField("celular", e.target.value)}
                />
              </div>
            </div>
            <div className="w-1/2">
              <div className="">
                <Label htmlFor="estadoCivil">Estado Civil:</Label>
                <Select
                  placeholder="Selecione"
                  name="estadoCivil"
                  defaultValue={formData.estadoCivil}
                  onChange={handleEstadoCivilChange}
                  options={optionsEstadoCivil as any}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-row space-x-4 justify-start mb-6">
            <div className="w-full">
              <div className="flex-grow">
                <Label htmlFor="email">Email:</Label>
                <Input
                  type="email"
                  placeholder="E-mail"
                  name="email"
                  onChange={(e) => handleChangeField("email", e.target.value)}
                />
              </div>
            </div>
          </div>
          <hr />
          <ModalDocumentos documento={documentosCliente} />
        </div>
        <div className="container flex flex-col border-r-2 border-solid border-cyan-500">
          <div className="flex flex-row space-x-4 justify-start mb-6">
            <div className="w-1/2">
              <div className="">
                <Label htmlFor="cep">CEP:</Label>
                <Input
                  type="text"
                  name="cep"
                  onChange={(e) => handleChangeField("cep", e.target.value)}
                />
              </div>
            </div>
            <div className="w-1/2">
              <div className="">
                <Label htmlFor="estado">Estado</Label>
                <Select
                  placeholder="Selecione"
                  defaultValue={selectedOption}
                  onChange={() => setSelectedOption}
                  options={optionsEstados}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-row space-x-4 justify-start mb-6">
            <div className="w-full">
              <div className="flex-grow">
                <Label htmlFor="endereco">Endereço:</Label>
                <Input
                  type="text"
                  placeholder="Endereço:"
                  name="endereco"
                  onChange={(e) =>
                    handleChangeField("endereco", e.target.value)
                  }
                />
              </div>
            </div>
          </div>
          <div className="flex flex-row space-x-4 justify-start mb-6">
            <div className="w-1/2">
              <div className="">
                <Label htmlFor="numero">Nº:</Label>
                <Input
                  type="text"
                  name="numero"
                  onChange={(e) => handleChangeField("numero", e.target.value)}
                />
              </div>
            </div>
            <div className="w-1/2">
              <div className="">
                <Label htmlFor="complemento">Complemento:</Label>
                <Input
                  type="text"
                  name="complemento"
                  onChange={(e) =>
                    handleChangeField("complemento", e.target.value)
                  }
                />
              </div>
            </div>
          </div>
          <div className="flex flex-row space-x-4 justify-start mb-6">
            <div className="w-full">
              <div className="flex-grow">
                <Label htmlFor="profissao">Profissão:</Label>
                <Input
                  type="text"
                  name="profissao"
                  onChange={(e) =>
                    handleChangeField("profissao", e.target.value)
                  }
                />
              </div>
            </div>
          </div>
          <div className="flex flex-row space-x-4 justify-start mb-6">
            <div className="w-1/2">
              <div className="">
                <Label htmlFor="vacinaFebreAmarela">
                  Vacina Febre Amarela:
                </Label>
                <RadioGroup defaultValue="sim">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="sim" id="r1" />
                    <Label htmlFor="sim">Sim</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="nao" id="r2" />
                    <Label htmlFor="nao">Não</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
            <div className="w-1/2">
              <div className="">
                <Label htmlFor="alergias">Alergias:</Label>
                <Input
                  type="text"
                  name="alergias"
                  onChange={(e) =>
                    handleChangeField("alergias", e.target.value)
                  }
                />
              </div>
            </div>
          </div>
          <div className="flex flex-row space-x-4 justify-start mb-6">
            <div className="w-1/2">
              <div className="">
                <Label htmlFor="pcd">PCD, PNE, PPD:</Label>
                <RadioGroup defaultValue="nao">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem
                      value="sim"
                      id="condicaoSim"
                      onClick={(e) => handleDisabled(e)}
                    />
                    <Label htmlFor="sim">Sim</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem
                      value="nao"
                      id="condicaoNao"
                      onClick={(e) => handleDisabled(e)}
                    />
                    <Label htmlFor="nao">Não</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
            <div className="w-1/2">
              <div className="">
                <Label htmlFor="condicao">Informe a Condição:</Label>
                <Input
                  disabled={disabledCondicao}
                  type="text"
                  name="condicao"
                  onChange={(e) =>
                    handleChangeField("condicao", e.target.value)
                  }
                />
              </div>
            </div>
          </div>
          <div className="flex flex-row space-x-4 justify-start mb-6">
            <div className="w-1/2">
              <div className="">
                <Label htmlFor="restricaoAlimentar">Restrição Alimentar:</Label>
                <RadioGroup defaultValue="nao">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem
                      value="sim"
                      id="restricaoSim"
                      onClick={(e) => handleDisabled(e)}
                    />
                    <Label htmlFor="sim">Sim</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem
                      value="nao"
                      id="restricaoNao"
                      onClick={(e) => handleDisabled(e)}
                    />
                    <Label htmlFor="nao">Não</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
            <div className="w-1/2">
              <div className="">
                <Label htmlFor="descritivoRestricao">
                  Descritivo da Restrição:
                </Label>
                <Input
                  disabled={disabledRestricaoAlimentar}
                  type="text"
                  name="descritivoRestricao"
                  onChange={(e) =>
                    handleChangeField("descritivoRestricao", e.target.value)
                  }
                />
              </div>
            </div>
          </div>
        </div>
        <div className="container flex flex-col border-r-2 border-solid border-cyan-500">
          <div className="flex flex-row space-x-4 justify-start mb-6">
            <div className="w-full">
              <label
                htmlFor="observacoes"
                className="block text-sm font-medium text-gray-700"
              >
                Observações:
              </label>
              <textarea
                id="observacoes"
                name="observacoes"
                onChange={(e) =>
                  handleChangeField("observacoes", e.target.value)
                }
                className="block w-full min-h-[200px] p-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
          </div>
          <div className="flex flex-row space-x-4 justify-start mb-6">
            <div className="w-full">
              <Label htmlFor="arquivos">Arquivos:</Label>
              <Input type="file" name="arquivos" multiple />
            </div>
          </div>
          <div className="flex flex-row space-x-4 justify-start mb-6 mt-auto">
            <div className="w-1/2">
              <div className="">
                <Button
                  onClick={handleSubmit}
                  className="bg-green-700 hover:bg-green-500"
                >
                  Confirmar
                </Button>
              </div>
            </div>
            <div className="w-1/2 mt-auto text-end">
              <div className="mt-auto">
                <Link href="/cliente">
                  <Button className="bg-red-700 hover:bg-red-500">
                    Cancelar
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClienteNovo;
