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
import { toast } from "@/components/ui/use-toast";
import axios from "axios";
import { cn } from "@/lib/utils";
import helpers from "@/lib/helpers";

export type ProgramaProps = {
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
  }, [openToast]);

  // if (openToast === "erro-api") {
  //   useEffect(() => {
  //     toast({
  //       className: cn(
  //         "top-0 right-0 flex fixed md:max-w-[420px] md:top-4 md:right-4 bg-red-400 text-xl"
  //       ),
  //       description: "Erro, tente atualizar novamente.",
  //       duration: 3000,
  //     });
  //   }, []); // O segundo argumento vazio [] garante que useEffect só seja chamado uma vez após a montagem do componente
  // }

  // const updateRegistro = helpers.updateRecord(formValues, "..");
  // const updateRecord = async (values: any, token: any) => {
  //   console.log(values);

  //   try {
  //     const url = `https://api-management-encanto-experiencia.azure-api.net/api/cadastro/v1/programa-fidelidade/${values.id}`;

  //     const token =
  //       "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IlhSdmtvOFA3QTNVYVdTblU3Yk05blQwTWpoQSIsImtpZCI6IlhSdmtvOFA3QTNVYVdTblU3Yk05blQwTWpoQSJ9.eyJhdWQiOiJhcGk6Ly9jNjljNTg5Mi04NTAxLTQ2MjItOTU1Zi0yY2I2OTZkY2EwMTgiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC83ZWY3MjRjYi0zYzc3LTRiNDQtOTBiZC0xYTQ4ZTI2NWFkODYvIiwiaWF0IjoxNzA5Njc3MzQyLCJuYmYiOjE3MDk2NzczNDIsImV4cCI6MTcwOTY4MTI0MiwiYWlvIjoiRTJOZ1lFaStmcGhYVFBPNjBCYlpkTUZkeFR3ekFBPT0iLCJhcHBpZCI6ImM2OWM1ODkyLTg1MDEtNDYyMi05NTVmLTJjYjY5NmRjYTAxOCIsImFwcGlkYWNyIjoiMSIsImlkcCI6Imh0dHBzOi8vc3RzLndpbmRvd3MubmV0LzdlZjcyNGNiLTNjNzctNGI0NC05MGJkLTFhNDhlMjY1YWQ4Ni8iLCJvaWQiOiI0NTFhYzkzZi0zMGRjLTRhMTAtYTdmZi0wMTY1NTExNzI3MTQiLCJyaCI6IjAuQWIwQXl5VDNmbmM4UkV1UXZScEk0bVd0aHBKWW5NWUJoU0pHbFY4c3RwYmNvQmpMQUFBLiIsInJvbGVzIjpbIldyaXRlIiwiUmVhZGVyIl0sInNpZCI6IjAzNmYzMzg0LTc3NGItNGFjOS1hMGI4LTA0MWM0OTNjZjJjMyIsInN1YiI6IjQ1MWFjOTNmLTMwZGMtNGExMC1hN2ZmLTAxNjU1MTE3MjcxNCIsInRpZCI6IjdlZjcyNGNiLTNjNzctNGI0NC05MGJkLTFhNDhlMjY1YWQ4NiIsInV0aSI6Im0wLVJla3VrRjA2aFhtVkYyYjZtQVEiLCJ2ZXIiOiIxLjAifQ.H2Cz5aEm9HhsYl04PxRKe31rN7qyCuImjlM7o1AN7T_IYq0Mpn-ubRwfbGZkxkBJYL1Ce8d3QDSEtCPGoEblhncemYPgu75IRiVoQvqNRVlur26MCDkk1LRhwxiVNSR6u2OUIeu_A5JwRZMI7-7OVrDb1kZ9uAJogIKcFhgcs8P7_gQmRxWVd3FQeahKQ43sPRI1y5jAEIEwZOGFGxJuxFHJkyg9hni2h7BlifbQ9gERw1ENeI9NPg8Vq-KnGi4lwxOqGE7OVJBQ8EcFcdd6FWnQAT4sNpV2Xw6gqgEFM1xlYU5lX00yXtFpnw7P3I_UqELRuOIiIfbUaXRsjztBHA";

  //     const response = await axios.put(
  //       url,
  //       {
  //         Name: values.nomePrograma,
  //         Description: values.descricaoPrograma,
  //         Logomarca: values.logomarca,
  //       },
  //       { headers: { Authorization: `Bearer ${token}` } }
  //     );

  //     if (response.status === 200) {
  //       (() => {
  //         toast({
  //           className: cn(
  //             "top-0 right-0 flex fixed md:max-w-[420px] md:top-4 md:right-4 bg-green-400 text-xl"
  //           ),
  //           description: (
  //             <span className="text-xl">Registro atualizado com sucesso.</span>
  //           ),
  //           duration: 3000,
  //         });
  //       })();
  //       setTimeout(() => {
  //         setOpen(false);
  //       }, 3000);
  //     } else {
  //       (() => {
  //         toast({
  //           className: cn(
  //             "top-0 right-0 flex fixed md:max-w-[420px] md:top-4 md:right-4 bg-red-400 text-xl"
  //           ),
  //           description: (
  //             <span className="text-xl">Erro, tente atualizar novamente.</span>
  //           ),
  //           duration: 3000,
  //         });
  //       })();
  //     }
  //   } catch (error) {
  //     (() => {
  //       toast({
  //         className: cn(
  //           "top-0 right-0 flex fixed md:max-w-[420px] md:top-4 md:right-4 bg-red-400 text-xl"
  //         ),
  //         description: <span className="text-xl">Erro de Servidor.</span>,
  //         duration: 3000,
  //       });
  //     })();
  //   }
  // };

  const handleConfirm = async (e: any) => {
    e.preventDefault();
    const updateRecord = await helpers.updateRecord(formValues, "..");
    setOpenToast(updateRecord.msg);
  };

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
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
                <Input
                  type="hidden"
                  name="logomarca"
                  defaultValue={logomarca}
                />
                <Input type="hidden" name="id" defaultValue={id} />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit" onClick={handleConfirm}>
                Confirmar
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default DemoDialog;
