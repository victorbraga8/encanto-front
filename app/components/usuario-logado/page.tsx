"use client";
import Sidebar from "@/app/components/sidebar/page";
import { Button } from "@/components/ui/button";
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@radix-ui/react-tooltip";
import { Badge } from "@/components/ui/badge";
import { Pencil } from "lucide-react";
import { useState, useEffect } from "react";
import helpers from "@/lib/helpers";

interface DataRow {
  id: string;
  dataCadastro: string;
  telefone: string;
  email: string;
  status: string;
  ultimaAtualizacao: string;
  acoes: string;
  amount: number;
}

async function getData(): Promise<DataRow[]> {
  return [
    {
      id: "728ed52f",
      dataCadastro: "01/01/2024",
      telefone: "21982845445",
      email: "m@example.com",
      status: "pendente",
      ultimaAtualizacao: "20/02/2024",
      acoes: "",
      amount: 100,
    },
    {
      id: "2a1b3c4d",
      dataCadastro: "05/02/2024",
      telefone: "2134567890",
      email: "john.doe@example.com",
      status: "concluido",
      ultimaAtualizacao: "22/02/2024",
      acoes: "",
      amount: 150,
    },
    {
      id: "5e6f7a8b",
      dataCadastro: "12/03/2024",
      telefone: "3123456789",
      email: "jane.smith@example.com",
      status: "cancelado",
      ultimaAtualizacao: "25/02/2024",
      acoes: "",
      amount: 75,
    },
    {
      id: "9c8b7a6f",
      dataCadastro: "18/04/2024",
      telefone: "4156789012",
      email: "alex.jones@example.com",
      status: "pendente",
      ultimaAtualizacao: "28/02/2024",
      acoes: "",
      amount: 120,
    },
    {
      id: "d4e5f6a7",
      dataCadastro: "25/05/2024",
      telefone: "5090123456",
      email: "susan.white@example.com",
      status: "concluido",
      ultimaAtualizacao: "02/03/2024",
      acoes: "",
      amount: 200,
    },
    {
      id: "1a2b3c4d",
      dataCadastro: "02/06/2024",
      telefone: "6012345678",
      email: "robert.green@example.com",
      status: "pendente",
      ultimaAtualizacao: "05/03/2024",
      acoes: "",
      amount: 90,
    },
    {
      id: "3e4d5c6b",
      dataCadastro: "10/07/2024",
      telefone: "7012345678",
      email: "emma.black@example.com",
      status: "cancelado",
      ultimaAtualizacao: "08/03/2024",
      acoes: "",
      amount: 110,
    },
    {
      id: "7a8b9c1d",
      dataCadastro: "15/08/2024",
      telefone: "8012345678",
      email: "david.brown@example.com",
      status: "concluido",
      ultimaAtualizacao: "11/03/2024",
      acoes: "",
      amount: 180,
    },
    {
      id: "2f3a4b5c",
      dataCadastro: "22/09/2024",
      telefone: "9012345678",
      email: "olivia.gray@example.com",
      status: "pendente",
      ultimaAtualizacao: "14/03/2024",
      acoes: "",
      amount: 130,
    },
    {
      id: "6d7e8f9a",
      dataCadastro: "30/10/2024",
      telefone: "9912345678",
      email: "william.ward@example.com",
      status: "cancelado",
      ultimaAtualizacao: "17/03/2024",
      acoes: "",
      amount: 95,
    },
  ];
}
const UsuarioLogado = () => {
  const [data, setData] = useState<DataRow[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getData();
      setData(result);
    };

    fetchData();
  }, []);

  const bearerToken =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IlhSdmtvOFA3QTNVYVdTblU3Yk05blQwTWpoQSIsImtpZCI6IlhSdmtvOFA3QTNVYVdTblU3Yk05blQwTWpoQSJ9.eyJhdWQiOiJhcGk6Ly9jNjljNTg5Mi04NTAxLTQ2MjItOTU1Zi0yY2I2OTZkY2EwMTgiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC83ZWY3MjRjYi0zYzc3LTRiNDQtOTBiZC0xYTQ4ZTI2NWFkODYvIiwiaWF0IjoxNzA5NDM4NjU3LCJuYmYiOjE3MDk0Mzg2NTcsImV4cCI6MTcwOTQ0MjU1NywiYWlvIjoiRTJOZ1lDaGMvU1I2a3RHdTBxN0VzTFZUSitvOEFBQT0iLCJhcHBpZCI6ImM2OWM1ODkyLTg1MDEtNDYyMi05NTVmLTJjYjY5NmRjYTAxOCIsImFwcGlkYWNyIjoiMSIsImlkcCI6Imh0dHBzOi8vc3RzLndpbmRvd3MubmV0LzdlZjcyNGNiLTNjNzctNGI0NC05MGJkLTFhNDhlMjY1YWQ4Ni8iLCJvaWQiOiI0NTFhYzkzZi0zMGRjLTRhMTAtYTdmZi0wMTY1NTExNzI3MTQiLCJyaCI6IjAuQWIwQXl5VDNmbmM4UkV1UXZScEk0bVd0aHBKWW5NWUJoU0pHbFY4c3RwYmNvQmpMQUFBLiIsInJvbGVzIjpbIldyaXRlIiwiUmVhZGVyIl0sInNpZCI6ImRhMDkwMTVkLTMzODAtNGNkYi04ZTkwLTg4ZTBiZTVhN2FmMSIsInN1YiI6IjQ1MWFjOTNmLTMwZGMtNGExMC1hN2ZmLTAxNjU1MTE3MjcxNCIsInRpZCI6IjdlZjcyNGNiLTNjNzctNGI0NC05MGJkLTFhNDhlMjY1YWQ4NiIsInV0aSI6IjAxd01Cb2M3UVVLemF0Uk02Z2lqQUEiLCJ2ZXIiOiIxLjAifQ.UBcuReTsCFhcmtonu4FW8rf-YJxAKs3q83zX7-nbuFKqidXFirAsdubYlqGG5w5hiz3fSDpjCOK0kXtB_w5wXqBYKv1-_G7wx7fd4xgVhppMFSm0PuDa7PmjgGLygxSFfZ4aM-hIHnduvdey_jcwM9tnAEEKv7VjPt6zWv6oEeHknP1hNKx7F5seaem1G36afpkkmtHInSYeX3cq4Q5NlaxIJZRyP2qsRbBBtWkbbnIUlJozEN3Ejgoxyq8JzEJKbY5r4xUeHVxfyzYWWPYMfUoKaFEOQHFkcAuhLlOvAWFKFyMxWe7bpCtYXe42b1k5mo4ktPZOv8fncMHxXVxv9w";

  const apiUrl =
    "https://api-management-encanto-experiencia.azure-api.net/api/cadastro/v1/programa-fidelidade/1/10";

  // Configuração do cabeçalho da requisição
  const headers = new Headers({
    Authorization: `Bearer ${bearerToken}`,
  });

  // Configuração do objeto de opções para a requisição
  const requestOptions = {
    method: "GET",
    headers: headers,
    // Pode adicionar outros parâmetros, como body, mode, etc., conforme necessário
  };

  // Faz a requisição usando fetch
  fetch(apiUrl, requestOptions)
    .then((response) => {
      // Verifica se a requisição foi bem-sucedida (código 200)
      if (!response.ok) {
        throw new Error(
          `Erro na requisição. Código de status: ${response.status}`
        );
      }
      return response.json();
    })
    .then((data) => {
      // Trate a resposta da API
      console.log("Resposta da API:", data);
    })
    .catch((error) => {
      // Trata erros
      console.error("Erro na requisição:", error);
    });

  return (
    <>
      <div className="lg:pl-[268px] max-w-fit pt-10">
        <h1>Home Page</h1>
        <div className="overflow-x-auto mt-4">
          <table className=" bg-white border border-gray-300">
            <thead>
              <tr className="text-left">
                <th className="py-2 px-4 border-b">ID</th>
                <th className="py-2 px-4 border-b">Data Cadastro</th>
                <th className="py-2 px-4 border-b">Telefone</th>
                <th className="py-2 px-4 border-b">E-mail</th>
                <th className="py-2 px-4 border-b">Status</th>
                <th className="py-2 px-4 border-b">Última Atualização</th>
                <th className="py-2 px-4 border-b">Ações</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row: any, index: any) => (
                <tr
                  key={row.id}
                  className={index % 2 === 0 ? "bg-indigo-50" : "bg-white"}
                >
                  <td className="py-2 px-4 border-b">{row.id}</td>
                  <td className="py-2 px-4 border-b">{row.dataCadastro}</td>
                  <td className="py-2 px-4 border-b">{row.telefone}</td>
                  <td className="py-2 px-4 border-b">{row.email}</td>
                  <td className="py-2 px-4 border-b">
                    <div
                      style={helpers.handleStatus(row.status)}
                      className="px-5 rounded-xl hover:opacity-70 transition-colors"
                    >
                      <div>{row.status}</div>
                      {/* {helpers.handleStatus(row.status)} */}
                    </div>
                  </td>
                  <td className="py-2 px-4 border-b">
                    {row.ultimaAtualizacao}
                  </td>
                  <td className="py-2 px-4 border-b">
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button
                            variant="default"
                            size="icon"
                            className="mr-2 bg-green-600 hover:bg-green-400"
                          >
                            <Pencil />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent className="bg-cyan-600 text-white py-2 px-3 mb-3 rounded-full">
                          <p>Editar Usuário</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default UsuarioLogado;
