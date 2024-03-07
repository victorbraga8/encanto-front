"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { ChangeEvent, useState } from "react";
import { Label } from "@radix-ui/react-label";
import helpers from "@/lib/helpers";

const ExperienciaNova = () => {
  const [nomeExperiencia, setNomeExperiencia] = useState("");
  const [descricaoExperiencia, setDescricaoExperiencia] = useState("");
  const [file, setFile] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    const novaExperiencia = {
      Name: nomeExperiencia,
      Description: descricaoExperiencia,
      // Logomarca: file,
    };

    try {
      const resultadoCadastro = await helpers.cadastraExperiencia(
        novaExperiencia
      );
      (() => helpers.showToast("Experiência Cadastrada", "bg-green-400"))();
      setLoading(false);
    } catch (error) {
      (() => helpers.showToast("Erro no Cadastro", "bg-red-400"))();
      setLoading(false);
      console.error("Erro ao cadastrar experiencia:", error);
    }
  };

  const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];

    if (selectedFile) {
      const base64String = await convertToBase64(selectedFile);
      setFile(base64String);
      setNomeExperiencia(""); // Limpa o nome da experiencia ao selecionar um arquivo
    }
  };

  const convertToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = (event) => {
        if (event.target && event.target.result) {
          resolve(event.target.result.toString().split(",")[1] || "");
        } else {
          reject(new Error("Failed to read file."));
        }
      };

      reader.onerror = (error) => reject(error);

      reader.readAsDataURL(file);
    });
  };

  return (
    <>
      {loading ? (
        <>
          <div className="loader lg:pl-[268px] max-w-fit flex items-center pt-10 gap-2 overflow-hidden">
            <div className="animate-spin border-t-4 border-blue-500 border-solid rounded-full h-12 w-12"></div>
            Carregando...
          </div>
        </>
      ) : (
        <>
          <div className="lg:pl-[268px] max-w-fit pt-10">
            <form onSubmit={handleSubmit}>
              <div className="flex flex-row space-x-4 justify-start mb-6">
                <div className="w-1/2">
                  <div className="">
                    <label htmlFor="nomeExperiencia">Nome Experiencia:</label>
                    <Input
                      type="text"
                      name="nomeExperiencia"
                      onChange={(e) => setNomeExperiencia(e.target.value)}
                    />
                  </div>
                </div>
                <div className="w-1/2">
                  <div className="">
                    <label htmlFor="descricaoExperiencia">
                      Descrição Experiencia:
                    </label>
                    <Input
                      type="text"
                      name="descricaoExperiencia"
                      onChange={(e) => setDescricaoExperiencia(e.target.value)}
                    />
                  </div>
                </div>
                <div className="w-1/2">
                  <div className="">
                    <label htmlFor="imagemExperiencia">
                      Imagem Experiencia:
                    </label>
                    <Input
                      type="file"
                      name="file"
                      accept="image/*" // Aceitar apenas imagens
                      onChange={handleFileChange}
                    />
                  </div>
                </div>
              </div>

              <Button type="submit">Enviar</Button>
            </form>
          </div>
        </>
      )}
    </>
  );
};

export default ExperienciaNova;
