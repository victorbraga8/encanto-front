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

      const res = await fetch("api/upload", {
        method: "POST",
        body: data,
      });

      const requestBody = JSON.stringify({
        Name: nomePrograma,
        Description: descricaoPrograma,
      });

      const token =
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IlhSdmtvOFA3QTNVYVdTblU3Yk05blQwTWpoQSIsImtpZCI6IlhSdmtvOFA3QTNVYVdTblU3Yk05blQwTWpoQSJ9.eyJhdWQiOiJhcGk6Ly9jNjljNTg5Mi04NTAxLTQ2MjItOTU1Zi0yY2I2OTZkY2EwMTgiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC83ZWY3MjRjYi0zYzc3LTRiNDQtOTBiZC0xYTQ4ZTI2NWFkODYvIiwiaWF0IjoxNzA5MjM1MDk5LCJuYmYiOjE3MDkyMzUwOTksImV4cCI6MTcwOTIzODk5OSwiYWlvIjoiRTJOZ1lIaTZ3TC9oUk5pa3pNaGVMVGVudlZLdkFBPT0iLCJhcHBpZCI6ImM2OWM1ODkyLTg1MDEtNDYyMi05NTVmLTJjYjY5NmRjYTAxOCIsImFwcGlkYWNyIjoiMSIsImlkcCI6Imh0dHBzOi8vc3RzLndpbmRvd3MubmV0LzdlZjcyNGNiLTNjNzctNGI0NC05MGJkLTFhNDhlMjY1YWQ4Ni8iLCJvaWQiOiI0NTFhYzkzZi0zMGRjLTRhMTAtYTdmZi0wMTY1NTExNzI3MTQiLCJyaCI6IjAuQWIwQXl5VDNmbmM4UkV1UXZScEk0bVd0aHBKWW5NWUJoU0pHbFY4c3RwYmNvQmpMQUFBLiIsInJvbGVzIjpbIldyaXRlIiwiUmVhZGVyIl0sInNpZCI6IjE3MDhmMWU3LTUwNjYtNGU1Yy1hZmUzLWNmYmE1Njk0MmQwOSIsInN1YiI6IjQ1MWFjOTNmLTMwZGMtNGExMC1hN2ZmLTAxNjU1MTE3MjcxNCIsInRpZCI6IjdlZjcyNGNiLTNjNzctNGI0NC05MGJkLTFhNDhlMjY1YWQ4NiIsInV0aSI6InplQWVvTDVGSFU2WDA3M1pKSHh1QUEiLCJ2ZXIiOiIxLjAifQ.L2tgYvoru_hFSfKZDr85QQuo0vBUZ0I4AWKCJUaM1-c6UhOJKn8ZSiCm2wDszCgtdpK48lyjM3cWezzAjOI9fpMYNBpQtM74i0jkK-jOxg_iecp8YzloGNRpgxynpe15vFLcnvxdJ9RAGtGMd_BTqRb8wHfV3T_6xygbjKJfKsLhKm9f6Jn2TfcHpH6BkFxUoqNS_alN6eGnLqTgQRTUyUI9Uz7nrVAK5FeizqPPHKUIxe5B0aZ9twOTymMUWqcMb-z1SlmmSoHf1RKBJmJhTWNu7b5FXSXYbBvFF-NOkOiXMKg_X3f-pIeriINPczyPtRTsdakEeSGpJ6gCMEKNZQ";

      const res2 = await fetch(
        "https://api-management-encanto-experiencia.azure-api.net/api/cadastro/v1/programa-fidelidade",
        {
          method: "POST",
          body: requestBody,
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!res.ok) {
        throw new Error(await res.text());
      }
      if (!res2.ok) {
        throw new Error(await res2.text());
      }
    } catch (e: any) {
      console.log(e);
    }
  };

  return (
    <>
      <div className="lg:pl-[268px] max-w-fit pt-10">
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
