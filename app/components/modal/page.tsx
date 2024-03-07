"use client";
import { Button } from "@/components/ui/button";
import { Label } from "@radix-ui/react-label";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Pencil } from "lucide-react";
import React, { ChangeEvent, useEffect, useState } from "react";
import helpers from "@/lib/helpers";

const DemoDialog = ({
  name,
  description,
  logomarca,
  id,
  onEnviarInformacao,
}: any) => {
  const [open, setOpen] = useState(Boolean);
  const [openToast, setOpenToast] = useState("");
  const [file, setFile] = useState<string | null>(null);
  const informacaoParaEnviar = "Atualizado";

  const [formValues, setFormValues] = useState({
    nomePrograma: name,
    descricaoPrograma: description,
    logomarca: file || logomarca,
    id: id,
  });

  useEffect(() => {
    if (openToast.length > 0) {
      if (openToast === "erro-api") {
        const msgToast = helpers.msgToast(openToast);
        helpers.showToast(msgToast, "bg-red-400");
        setOpenToast("");
      }
      if (openToast === "erro-client") {
        const msgToast = helpers.msgToast(openToast);
        helpers.showToast(msgToast, "bg-red-400");
        setOpenToast("");
      }
      if (openToast === "success") {
        const msgToast = helpers.msgToast(openToast);
        helpers.showToast(msgToast, "bg-green-400");
        (() => {
          onEnviarInformacao(informacaoParaEnviar);
        })();
        setOpenToast("");
      } else {
        const msgToast = helpers.msgToast(openToast);
        helpers.showToast(msgToast, "bg-red-400");
        setOpenToast("");
      }
    }
  }, [onEnviarInformacao, openToast]);

  const handleConfirm = async (e: any) => {
    e.preventDefault();
    const updateRecord = await helpers.updateRecord(formValues);
    setOpenToast(updateRecord.msg);
    setTimeout(() => {
      setOpen(false);
    }, 3000);
  };

  const handleInputChange = (e: any) => {
    if (e.target) {
      const { name, value } = e.target;
      setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
    }
  };

  function handleClose(e: any) {
    e.preventDefault();
    setOpen(false);
    setOpenToast("");
    handleInputChange("");
  }

  const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];

    if (selectedFile) {
      const base64String = await convertToBase64(selectedFile);
      setFile(base64String);

      setFormValues((prevValues) => ({
        ...prevValues,
        logomarca: base64String,
      }));
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
      <Dialog open={open}>
        <DialogTrigger asChild>
          <Button
            onClick={() => setOpen(true)}
            variant="default"
            size="icon"
            className="mr-2 bg-green-600 hover:bg-green-400"
          >
            <Pencil />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px] fixed z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6">
          <DialogHeader>
            <DialogTitle>Editar Programa de Fidelidade</DialogTitle>
            <DialogDescription>
              Exclua ou edite informações do programa abaixo.
            </DialogDescription>
          </DialogHeader>
          <form action="">
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="nomePrograma" className="text-right">
                  Nome
                </Label>
                <Input
                  id="nomePrograma"
                  name="nomePrograma"
                  value={formValues.nomePrograma}
                  onChange={handleInputChange}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="descricaoPrograma" className="text-right">
                  Descrição
                </Label>
                <Input
                  id="descricaoPrograma"
                  name="descricaoPrograma"
                  value={formValues.descricaoPrograma}
                  onChange={handleInputChange}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="nomePrograma" className="text-right">
                  Arquivo
                </Label>
                <Input
                  className="col-span-3"
                  type="file"
                  name="file"
                  accept="image/*"
                  onChange={handleFileChange}
                />
              </div>
            </div>

            <Input
              type="hidden"
              name="logomarca"
              defaultValue={file ? "" : logomarca}
            />
            <Input type="hidden" name="id" defaultValue={id} />
            <div>
              <DialogFooter id="dialogFooter" className="flex justify-between">
                <Button
                  className="bg-green-700 hover:bg-green-400"
                  type="submit"
                  onClick={handleConfirm}
                >
                  Confirmar
                </Button>
                <Button
                  className="bg-red-700 hover:bg-red-400"
                  onClick={handleClose}
                >
                  X
                </Button>
              </DialogFooter>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default DemoDialog;
