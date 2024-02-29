"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import { Label } from "@radix-ui/react-label";

const tempUpload = () => {
  const [file, setFile] = useState<File>();
  const [formData, setFormData] = useState({
    nomePrograma: "",
    descricaoPrograma: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!file) return;
    const { nomePrograma, descricaoPrograma } = formData;
    try {
      const data = new FormData();
      data.set("file", file);
      data.set("nomePrograma", nomePrograma);
      data.set("descricaoPrograma", descricaoPrograma);

      const res = await fetch("api/upload", {
        method: "POST",
        body: data,
      });
      if (!res.ok) {
        throw new Error(await res.text());
      }
    } catch (e: any) {
      console.log(e);
    }
  };

  return (
    <>
      <div className="py-10 lg:pl-[226px] max-w-fit">
        <form onSubmit={onSubmit} action="">
          <div className="flex flex-row space-x-4 justify-start mb-6">
            <div className="w-1/2">
              <div className="">
                <Label htmlFor="nomePrograma">Nome Programa:</Label>
                <Input
                  type="text"
                  name="nomePrograma"
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="w-1/2">
              <div className="">
                <Label htmlFor="descricaoPrograma">Descrição Programa:</Label>
                <Input
                  type="text"
                  name="descricaoPrograma"
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="w-1/2">
              <div className="">
                <Label htmlFor="imagemPrograma">Imagem Programa:</Label>
                <Input
                  type="file"
                  name="file"
                  onChange={(e) => setFile(e.target.files?.[0])}
                />
              </div>
            </div>
          </div>

          <Button type="submit">Enviar</Button>
        </form>
      </div>
    </>
  );
};

export default tempUpload;
