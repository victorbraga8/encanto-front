import React from "react";
import { Badge as BadgeComponent } from "@/components/ui/badge";
import axios, { AxiosResponse } from "axios";

class Helpers {
  handblePathHeader(path: string) {
    const partes = path.split("/").filter(Boolean);
    if (path == "/") {
      return "Home";
    }
    const completePath = partes[0] + " / " + partes[1];
    return completePath;
  }

  handleStatus(status: string) {
    let badgeColor: any = "";
    if (status === "pendente") {
      badgeColor = { backgroundColor: "rgb(231 176 19)", color: "white" };
    } else if (status === "concluido") {
      badgeColor = { backgroundColor: "rgb(42 157 14)", color: "white" };
    } else if (status === "cancelado") {
      badgeColor = { backgroundColor: "rgb(213 5 5)", color: "white" };
    }

    // Adiciona outras classes conforme necessário
    return badgeColor;
  }

  async getProgramas() {
    const url =
      "https://api-management-encanto-experiencia.azure-api.net/api/cadastro/v1/programa-fidelidade/1/10";
    const token =
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IlhSdmtvOFA3QTNVYVdTblU3Yk05blQwTWpoQSIsImtpZCI6IlhSdmtvOFA3QTNVYVdTblU3Yk05blQwTWpoQSJ9.eyJhdWQiOiJhcGk6Ly9jNjljNTg5Mi04NTAxLTQ2MjItOTU1Zi0yY2I2OTZkY2EwMTgiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC83ZWY3MjRjYi0zYzc3LTRiNDQtOTBiZC0xYTQ4ZTI2NWFkODYvIiwiaWF0IjoxNzA5NDc3MDkyLCJuYmYiOjE3MDk0NzcwOTIsImV4cCI6MTcwOTQ4MDk5MiwiYWlvIjoiRTJOZ1lMZ1VXeHRsL3lqNjdlRWUzaDkvUHVYRkFRQT0iLCJhcHBpZCI6ImM2OWM1ODkyLTg1MDEtNDYyMi05NTVmLTJjYjY5NmRjYTAxOCIsImFwcGlkYWNyIjoiMSIsImlkcCI6Imh0dHBzOi8vc3RzLndpbmRvd3MubmV0LzdlZjcyNGNiLTNjNzctNGI0NC05MGJkLTFhNDhlMjY1YWQ4Ni8iLCJvaWQiOiI0NTFhYzkzZi0zMGRjLTRhMTAtYTdmZi0wMTY1NTExNzI3MTQiLCJyaCI6IjAuQWIwQXl5VDNmbmM4UkV1UXZScEk0bVd0aHBKWW5NWUJoU0pHbFY4c3RwYmNvQmpMQUFBLiIsInJvbGVzIjpbIldyaXRlIiwiUmVhZGVyIl0sInNpZCI6IjM4OTc3YzBkLTJiOWQtNDI4NC05ODExLWM5NjBhZjYwNjBlYyIsInN1YiI6IjQ1MWFjOTNmLTMwZGMtNGExMC1hN2ZmLTAxNjU1MTE3MjcxNCIsInRpZCI6IjdlZjcyNGNiLTNjNzctNGI0NC05MGJkLTFhNDhlMjY1YWQ4NiIsInV0aSI6IkppZnFpaGRFbUVLWUlHTkU0cFVIQVEiLCJ2ZXIiOiIxLjAifQ.RpLoKtk_8w1FDoatZYRGcnqs56-Q7uXTB9UphchuBP8Y5MScFqy8-zz1QOp-kimgj4qk2HFyzPIGvT76DiqSLOLjiXbzDsj2VJ04tt5kjF3NehmTKNKigyMAXHCZig1lHMXN6DavbbBqcIq96MqUU5fiaCdOD-Zuwrwn25ow3g51qTfkFp3rHNSCzoYLW-4dtwXGJ_EJlHbaZz3dXBLVUi0G9qoj1BHsCrH05rJgNVTr9WJQXl4UOF1e28j3FSM8BqCdNXq7G_aLHKzvSz7OFt_0zaocz5ZW_c2Vf1QtzMS_KGMpUMoCUpNnq0NYDh3-pMiY-oaMadS-aV19TjLn2A";

    try {
      const resposta = await fetch(url, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
          // Inclua headers adicionais conforme necessário para a sua aplicação
        },
        mode: "cors", // Configuração CORS
      });

      if (!resposta.ok) {
        throw new Error(
          `Erro na requisição: ${resposta.status} - ${resposta.statusText}`
        );
      }

      const dados = await resposta.json();
      // console.log("Dados recebidos:", dados);

      return dados;
    } catch (erro: any) {
      console.error("Erro na requisição:", erro.message);
      throw erro;
    }
  }

  // fazerSolicitacao = async (): Promise<string> => {
  //   interface TokenResponse {
  //     access_token: string;
  //     // Adicione outros campos conforme necessário
  //   }
  //   let tokenNaSessao = null;

  //   // Verifica se há um token na sessão (apenas se estiver no ambiente do navegador)
  //   if (typeof sessionStorage !== "undefined") {
  //     tokenNaSessao = sessionStorage.getItem("token");
  //   }

  //   if (tokenNaSessao) {
  //     console.log("Token encontrado na sessão:", tokenNaSessao);
  //     return tokenNaSessao;
  //   }

  //   // Se não houver token na sessão, faça a solicitação
  //   const url =
  //     "https://login.microsoftonline.com/7ef724cb-3c77-4b44-90bd-1a48e265ad86/oauth2/v2.0/token";

  //   // Parâmetros da solicitação
  //   const data = new URLSearchParams();
  //   data.append("client_id", "c69c5892-8501-4622-955f-2cb696dca018");
  //   data.append("client_secret", "FPV8Q~izBHxLzhGx7iQszV046J1c3Vw~Cwi4nb2i");
  //   data.append("scope", "api://c69c5892-8501-4622-955f-2cb696dca018/.default");
  //   data.append("grant_type", "client_credentials");

  //   try {
  //     // Faça a solicitação POST
  //     const response: AxiosResponse<TokenResponse> = await axios.post(
  //       url,
  //       data,
  //       {
  //         headers: {
  //           "Content-Type": "application/x-www-form-urlencoded",
  //         },
  //       }
  //     );

  //     const tokenObtido = response.data.access_token;

  //     // Armazene o token na sessão (apenas se estiver no ambiente do navegador)
  //     if (typeof sessionStorage !== "undefined") {
  //       sessionStorage.setItem("token", tokenObtido);
  //     }

  //     // Retorna o token
  //     console.log("Token obtido com sucesso:", tokenObtido);
  //     return tokenObtido;
  //   } catch (error) {
  //     // Manipule os erros aqui
  //     console.error("Erro ao obter o token:", error);
  //     throw error; // Você pode querer lançar o erro para que o componente que chamou a função também possa lidar com ele
  //   }
  // };

  getProgramaFidelidade = async (token: any) => {
    // Incluir Etapa de verificador de validade do Token ou criar helper para isso
    const url =
      "https://api-management-encanto-experiencia.azure-api.net/api/cadastro/v1/programa-fidelidade/1/10";
    try {
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      // Lide com a resposta conforme necessário
      console.log("Resposta da API:", response.data);
      return response.data;
    } catch (error) {
      // Lide com os erros aqui
      console.error("Erro na requisição:", error);
      throw error;
    }
  };
}

const helpers = new Helpers();
export default helpers;
