"use client";
import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useState } from "react";

import Select from "react-select";
import helpers from "@/lib/helpers";
import Link from "next/link";

const options: { value: string; label: string }[] = [
  { value: "us", label: "Americano" },
  { value: "it", label: "Italiano" },
  { value: "cn", label: "Canadense" },
  { value: "al", label: "Alemão" },
];

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

const ClienteNovo = () => {
  const handleChange = (selectedOptions: any) => {
    console.log(selectedOptions);
  };
  const [programas, setProgramas] = useState<
    { value: string; label: string }[]
  >([]);
  const [experiencias, setExperiencias] = useState<
    { value: string; label: string }[]
  >([]);
  const [estado, setEstados] = useState([]);
  const [outrosPassaportes, setOutrosPassaportes] = useState(true);
  const [selectedOption, setSelectedOption] = useState<{
    value: string;
    label: string;
  } | null>(null);

  const [validadeVistoAmericano, setValidadeVistoAmericano] = useState(true);

  const handleRadioChange = (value: any) => {
    if (value === "sim") {
      setOutrosPassaportes(false);
      setSelectedOption(value === "sim" ? { value: "1", label: "Sim" } : null);
    } else {
      setOutrosPassaportes(true);
      setSelectedOption(value === "não" ? { value: "2", label: "Não" } : null);
    }
  };

  const handleRadioChangeVisto = (value: any) => {
    if (value === "sim") {
      setValidadeVistoAmericano(true);
    } else {
      setValidadeVistoAmericano(false);
    }
  };

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const experiencias = await helpers.getExperiencias();
        const listaExperiencias = experiencias.map((item: any) => ({
          value: item.id,
          label: item.name,
        }));

        setExperiencias(listaExperiencias);
      } catch (error) {
        console.error("Erro ao obter experiencias:", error);
      }
    };

    fetchData();
  }, []);

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

  const handleNacionalidadePassaporteChange = (selectedOption: any) => {
    handleChangeField("nacionalidadePassaporte", selectedOption);
  };

  const handleProgramaFidelidadeChange = (selectedOption: any) => {
    handleChangeField("programaFidelidade", selectedOption);
  };

  const handleSubmit = (e: React.FormEvent) => {
    const cadastraCliente = helpers.cadastraCliente(formData);
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
                <Input
                  type="text"
                  name="rg"
                  onChange={(e) => handleChangeField("rg", e.target.value)}
                />
              </div>
            </div>
            <div className="w-1/2">
              <div className="">
                <Label htmlFor="cpf">CPF:</Label>
                <Input
                  type="text"
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
                <Input
                  type="text"
                  name="celular"
                  onChange={(e) => handleChangeField("celular", e.target.value)}
                />
              </div>
            </div>
            <div className="w-1/2">
              <div className="">
                <Label htmlFor="estadoCivil">Estado Civil:</Label>
                <Select
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
          <div className="flex flex-row space-x-4 justify-start mb-6">
            <div className="w-1/2">
              <div className="">
                <Label htmlFor="passaporte">Passaporte:</Label>
                <Input
                  type="text"
                  name="passaporte"
                  onChange={(e) =>
                    handleChangeField("passaporte", e.target.value)
                  }
                />
              </div>
            </div>
            <div className="w-1/2">
              <div className="">
                <Label htmlFor="dataValidadePassaporte">
                  Validade Passaporte:
                </Label>
                <Input
                  type="date"
                  name="dataValidadePassaporte"
                  onChange={(e) =>
                    handleChangeField("dataValidadePassaporte", e.target.value)
                  }
                />
              </div>
            </div>
          </div>
          {/* <div className="flex flex-row space-x-4 justify-start mb-6">
            <div className="w-1/2">
              <div className="">
                <Label htmlFor="outrosPassaportes">Outros Passaportes:</Label>
                <RadioGroup defaultValue="nao">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem
                      value="sim"
                      id="r1"
                      onClick={() => handleRadioChange("sim")}
                    />
                    <Label htmlFor="sim">Sim</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem
                      value="nao"
                      id="r2"
                      onClick={() => handleRadioChange("não")}
                    />
                    <Label htmlFor="nao">Não</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
            <div className="w-1/2">
              <div className="">
                <Label htmlFor="nacionalidadePassaporte">
                  Nacionalidade Passaporte:
                </Label>
                <Select
                  name="nacionalidadePassaporte"
                  isMulti
                  defaultValue={formData.nacionalidadePassaporte}
                  onChange={handleNacionalidadePassaporteChange}
                  isDisabled={outrosPassaportes}
                  options={options as any}
                />
              </div>
            </div>
          </div> */}
          <div className="flex flex-row space-x-4 justify-start mb-6">
            <div className="w-1/2">
              <div className="">
                <Label htmlFor="vistoAmericano">Visto Americano:</Label>
                <RadioGroup defaultValue="nao" name="vistoAmericano">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem
                      value="sim"
                      id="r1"
                      onClick={() => handleRadioChangeVisto("nao")}
                    />
                    <Label htmlFor="sim">Sim</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem
                      value="nao"
                      id="r2"
                      onClick={() => handleRadioChangeVisto("sim")}
                    />
                    <Label htmlFor="nao">Não</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
            <div className="w-1/2">
              <div className="">
                <Label htmlFor="validadeVistoAmericano">Validade Visto:</Label>
                <Input
                  disabled={validadeVistoAmericano}
                  type="date"
                  name="validadeVistoAmericano"
                  onChange={(e) =>
                    handleChangeField("validadeVistoAmericano", e.target.value)
                  }
                />
              </div>
            </div>
          </div>
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
            <div className="w-1/2">
              <div className="">
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
            <div className="w-1/2">
              <div className="">
                <Label htmlFor="experiencia">Experiência</Label>
                <Select
                  defaultValue={selectedOption}
                  onChange={() => setSelectedOption}
                  options={experiencias}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-row space-x-4 justify-start mb-6">
            <div className="w-1/2">
              <div className="">
                <Label htmlFor="programaFidelidade">
                  Programa de Fidelidade:
                </Label>
                <RadioGroup defaultValue="nao">
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
                <Label htmlFor="tipoPrograma">Tipo de Programa</Label>
                <Select
                  defaultValue={selectedOption}
                  onChange={() => setSelectedOption}
                  options={programas}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-row space-x-4 justify-start mb-6">
            <div className="w-full">
              <Label htmlFor="numeroPrograma">Número do Programa:</Label>
              <Input
                type="text"
                name="numeroPrograma"
                onChange={(e) =>
                  handleChangeField("numeroPrograma", e.target.value)
                }
              />
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
                <Label htmlFor="condicao">Informe a Condição:</Label>
                <Input
                  type="text"
                  name="condicao"
                  onChange={(e) =>
                    handleChangeField("condicao", e.target.value)
                  }
                />
              </div>
            </div>
          </div>
        </div>
        <div className="container flex flex-col border-r-2 border-solid border-cyan-500">
          <div className="flex flex-row space-x-4 justify-start mb-6">
            <div className="w-1/2">
              <div className="">
                <Label htmlFor="restricaoAlimentar">Restrição Alimentar:</Label>
                <RadioGroup defaultValue="nao">
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
                <Label htmlFor="descritivoRestricao">
                  Descritivo da Restrição:
                </Label>
                <Input
                  type="text"
                  name="descritivoRestricao"
                  onChange={(e) =>
                    handleChangeField("descritivoRestricao", e.target.value)
                  }
                />
              </div>
            </div>
          </div>
          <div className="flex flex-row space-x-4 justify-start mb-6">
            <div className="w-full">
              <Label htmlFor="observacoes">Observações:</Label>
              <Input
                type="text"
                name="observacoes"
                onChange={(e) =>
                  handleChangeField("observacoes", e.target.value)
                }
              />
            </div>
          </div>
          <div className="flex flex-row space-x-4 justify-start mb-6">
            <div className="w-full">
              <Label htmlFor="arquivos">Arquivos:</Label>
              <Input type="file" name="arquivos" />
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
                <Link href="/">
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
