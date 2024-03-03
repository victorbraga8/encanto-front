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
import React from "react";

const DemoDialog = () => {
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button
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
              Exclua ou Edite informações do programa abaixo.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="nomePrograma" className="text-right">
                Nome
              </Label>
              <Input
                id="nomePrograma"
                defaultValue="Pedro Duarte"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="descricaoPrograma" className="text-right">
                Descrição
              </Label>
              <Input
                id="username"
                defaultValue="@peduarte"
                className="col-span-3"
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Confirmar</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default DemoDialog;
