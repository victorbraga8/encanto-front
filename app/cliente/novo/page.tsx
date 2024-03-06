"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useState } from "react";

import Select from "react-select";

const options = [
  { value: "1", label: "Opção 1" },
  { value: "2", label: "Opção 2" },
  { value: "3", label: "Opção 3" },
  { value: "4", label: "Opção 4" },
];

const optionsEstadoCivil = [
  { value: "1", label: "Opção 1" },
  { value: "2", label: "Opção 2" },
  { value: "3", label: "Opção 3" },
  { value: "4", label: "Opção 4" },
];

const optionsGenero = [
  { value: "1", label: "Opção 1" },
  { value: "2", label: "Opção 2" },
];

const ClienteNovo = () => {
  const handleChange = (selectedOptions: any) => {
    // Faça algo com as opções selecionadas
    console.log(selectedOptions);
  };

  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <>
      <div className="flex justify-between lg:pl-[268px] max-w-fit pt-10">
        {/* Container 1 */}
        <div className="container flex flex-col border-r-2 border-solid border-cyan-500">
          <div className="flex flex-row space-x-4 justify-start mb-6">
            <div className="w-full">
              <div className="flex-grow">
                <Label htmlFor="email">Nome</Label>
                <Input type="nome" placeholder="Nome" />
              </div>
            </div>
          </div>
          <div className="flex flex-row space-x-4 justify-start mb-6">
            <div className="w-1/2">
              <div className="">
                <Label htmlFor="email">Data de Nascimento:</Label>
                <Input type="date" />
              </div>
            </div>
            <div className="w-1/2">
              <div className="">
                <Label htmlFor="email">Sexo</Label>
                <Select
                  defaultValue={selectedOption}
                  onChange={() => setSelectedOption}
                  options={optionsGenero}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-row space-x-4 justify-start mb-6">
            <div className="w-1/2">
              <div className="">
                <Label htmlFor="rg">RG:</Label>
                <Input type="text" />
              </div>
            </div>
            <div className="w-1/2">
              <div className="">
                <Label htmlFor="cpf">CPF:</Label>
                <Input type="text" />
              </div>
            </div>
          </div>
          <div className="flex flex-row space-x-4 justify-start mb-6">
            <div className="w-1/2">
              <div className="">
                <Label htmlFor="celular">Celular:</Label>
                <Input type="text" />
              </div>
            </div>
            <div className="w-1/2">
              <div className="">
                <Label htmlFor="email">Estado Civil:</Label>
                <Select
                  defaultValue={selectedOption}
                  onChange={() => setSelectedOption}
                  options={optionsEstadoCivil}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-row space-x-4 justify-start mb-6">
            <div className="w-full">
              <div className="flex-grow">
                <Label htmlFor="email">Email:</Label>
                <Input type="email" placeholder="E-mail" />
              </div>
            </div>
          </div>
          <div className="flex flex-row space-x-4 justify-start mb-6">
            <div className="w-1/2">
              <div className="">
                <Label htmlFor="passaportes">Passaporte:</Label>
                <Input type="text" />
              </div>
            </div>
            <div className="w-1/2">
              <div className="">
                <Label htmlFor="dataValidadePassaporte">
                  Validade Passaporte:
                </Label>
                <Input type="date" />
              </div>
            </div>
          </div>
          <div className="flex flex-row space-x-4 justify-start mb-6">
            <div className="w-1/2">
              <div className="">
                <Label htmlFor="celular">Outros Passaportes:</Label>
                <RadioGroup defaultValue="comfortable">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="default" id="r1" />
                    <Label htmlFor="sim">Sim</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="comfortable" id="r2" />
                    <Label htmlFor="nao">Não</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
            <div className="w-1/2">
              <div className="">
                <Label htmlFor="email">Nacionalidade Passaporte:</Label>
                <Select
                  isMulti
                  defaultValue={selectedOption}
                  onChange={() => setSelectedOption}
                  options={options}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-row space-x-4 justify-start mb-6">
            <div className="w-1/2">
              <div className="">
                <Label htmlFor="celular">Visto Americano:</Label>
                <RadioGroup defaultValue="comfortable">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="default" id="r1" />
                    <Label htmlFor="sim">Sim</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="comfortable" id="r2" />
                    <Label htmlFor="nao">Não</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
            <div className="w-1/2">
              <div className="">
                <Label htmlFor="email">Validade Visto:</Label>
                <Input type="date" />
              </div>
            </div>
          </div>
        </div>
        <div className="container flex flex-col border-r-2 border-solid border-cyan-500">
          <div className="flex flex-row space-x-4 justify-start mb-6">
            <div className="w-1/2">
              <div className="">
                <Label htmlFor="email">CEP:</Label>
                <Input type="text" />
              </div>
            </div>
            <div className="w-1/2">
              <div className="">
                <Label htmlFor="email">Estado</Label>
                <Select
                  defaultValue={selectedOption}
                  onChange={() => setSelectedOption}
                  options={optionsGenero}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-row space-x-4 justify-start mb-6">
            <div className="w-full">
              <div className="flex-grow">
                <Label htmlFor="email">Endereço:</Label>
                <Input type="text" placeholder="Endereço:" />
              </div>
            </div>
          </div>
          <div className="flex flex-row space-x-4 justify-start mb-6">
            <div className="w-1/2">
              <div className="">
                <Label htmlFor="rg">Nº:</Label>
                <Input type="text" />
              </div>
            </div>
            <div className="w-1/2">
              <div className="">
                <Label htmlFor="cpf">Complemento:</Label>
                <Input type="text" />
              </div>
            </div>
          </div>
          <div className="flex flex-row space-x-4 justify-start mb-6">
            <div className="w-1/2">
              <div className="">
                <Label htmlFor="celular">Filhos:</Label>
                <RadioGroup defaultValue="comfortable">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="default" id="r1" />
                    <Label htmlFor="sim">Sim</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="comfortable" id="r2" />
                    <Label htmlFor="nao">Não</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
            <div className="w-1/2">
              <div className="">
                <Label htmlFor="celular">Restrição Alimentar:</Label>
                <RadioGroup defaultValue="comfortable">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="default" id="r1" />
                    <Label htmlFor="sim">Sim</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="comfortable" id="r2" />
                    <Label htmlFor="nao">Não</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
          </div>
          <div className="flex flex-row space-x-4 justify-start mb-6">
            <div className="w-full">
              <div className="flex-grow">
                <Label htmlFor="email">Restrição Alimentar:</Label>
                <Input
                  type="text"
                  placeholder="Descreva a Restrição Alimentar"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-row space-x-4 justify-start mb-6">
            <div className="w-1/2">
              <div className="">
                <Label htmlFor="celular">Vacina Febre Amarela:</Label>
                <RadioGroup defaultValue="comfortable">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="default" id="r1" />
                    <Label htmlFor="sim">Sim</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="comfortable" id="r2" />
                    <Label htmlFor="nao">Não</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
            <div className="w-1/2">
              <div className="">
                <Label htmlFor="dataValidadePassaporte">Alergias:</Label>
                <Input type="text" />
              </div>
            </div>
          </div>
          <div className="flex flex-row space-x-4 justify-start mb-6">
            <div className="w-1/2">
              <div className="">
                <Label htmlFor="celular">PCD, PNE, PPD:</Label>
                <RadioGroup defaultValue="comfortable">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="default" id="r1" />
                    <Label htmlFor="sim">Sim</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="comfortable" id="r2" />
                    <Label htmlFor="nao">Não</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
            <div className="w-1/2">
              <div className="">
                <Label htmlFor="dataValidadePassaporte">
                  Informe a Condição:
                </Label>
                <Input type="text" />
              </div>
            </div>
          </div>
          <div className="flex flex-row space-x-4 justify-start mb-6">
            <div className="w-1/2">
              <div className="">
                <Label htmlFor="celular">Programa de Fidelidade:</Label>
                <RadioGroup defaultValue="comfortable">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="default" id="r1" />
                    <Label htmlFor="sim">Sim</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="comfortable" id="r2" />
                    <Label htmlFor="nao">Não</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
            <div className="w-1/2">
              <div className="">
                <Label htmlFor="email">Tipo de Programa</Label>
                <Select
                  defaultValue={selectedOption}
                  onChange={() => setSelectedOption}
                  options={optionsGenero}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="container flex flex-col">
          <div className="flex flex-row space-x-4 justify-start mb-6">
            <div className="w-full">
              <div className="flex-grow">
                <Label htmlFor="email">Arquivos:</Label>
                <Input type="file" />
              </div>
            </div>
          </div>
          <div className="flex flex-row space-x-4 justify-start mb-6 mt-auto">
            <div className="w-1/2">
              <div className="">
                <Button className="bg-green-700 hover:bg-green-500">
                  Confirmar
                </Button>
              </div>
            </div>
            <div className="w-1/2 mt-auto text-end">
              <div className="mt-auto">
                <Button className="bg-red-700 hover:bg-red-500">
                  Cancelar
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClienteNovo;
