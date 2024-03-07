"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import React, { useEffect } from "react";
const DocumentoNovo = () => {
  return (
    <>
      <div className="lg:pl-[268px] max-w-fit pt-10">
        <form action="">
          <div className="flex flex-row space-x-4 justify-start mb-6">
            <div className="w-1/2">
              <div className="">
                <Label htmlFor="nomDocumento">Nome Documento:</Label>
                <Input
                  type="text"
                  name="nomeDocumento"
                  // onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="w-1/2">
              <div className="">
                <Label htmlFor="descricaoDocumento">Descrição Documento:</Label>
                <Input
                  type="text"
                  name="descricaoDocumento"
                  // onChange={handleInputChange}
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

export default DocumentoNovo;
