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
import React, { useEffect, useState } from "react";
import helpers from "@/lib/helpers";

type ProgramaProps = {
  name: string;
  description: string;
  logomarca: string;
  id: string;
};

const DemoDialog = ({ name, description, logomarca, id }: ProgramaProps) => {
  const [formValues, setFormValues] = useState({
    nomePrograma: name,
    descricaoPrograma: description,
    logomarca: logomarca,
    id: id,
  });
  const [open, setOpen] = useState(Boolean);
  const [openToast, setOpenToast] = useState("");

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
        setOpenToast("");
      } else {
        const msgToast = helpers.msgToast(openToast);
        helpers.showToast(msgToast, "bg-red-400");
        setOpenToast("");
      }
    }
  }, [openToast]);

  const handleConfirm = async (e: any) => {
    e.preventDefault();
    const updateRecord = await helpers.updateRecord(formValues, "..");
    setOpenToast(updateRecord.msg);
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
                <Input
                  type="hidden"
                  name="logomarca"
                  defaultValue={logomarca}
                />
                <Input type="hidden" name="id" defaultValue={id} />
              </div>
            </div>
            <div>
              <DialogFooter id="dialogFooter" className="flex justify-between">
                <Button type="submit" onClick={handleConfirm}>
                  Confirmar
                </Button>
                <Button onClick={handleClose}>X</Button>
              </DialogFooter>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default DemoDialog;
