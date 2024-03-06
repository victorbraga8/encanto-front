"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import { Label } from "@radix-ui/react-label";

const tempUpload = () => {
  return (
    <>
      <div className="lg:pl-[268px] max-w-fit pt-10">
        <h1>Cadastrar Programa</h1>
        <form action="">
          <div className="flex flex-row space-x-4 justify-start mb-6">
            <div className="w-1/2">
              <div className="">
                <Label htmlFor="nomePrograma">Nome Programa:</Label>
                <Input
                  type="text"
                  name="nomePrograma"
                  // onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="w-1/2">
              <div className="">
                <Label htmlFor="descricaoPrograma">Descrição Programa:</Label>
                <Input
                  type="text"
                  name="descricaoPrograma"
                  // onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="w-1/2">
              <div className="">
                <Label htmlFor="imagemPrograma">Imagem Programa:</Label>
                <Input
                  type="file"
                  name="file"
                  // onChange={(e) => setFile(e.target.files?.[0])}
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
