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
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IlhSdmtvOFA3QTNVYVdTblU3Yk05blQwTWpoQSIsImtpZCI6IlhSdmtvOFA3QTNVYVdTblU3Yk05blQwTWpoQSJ9.eyJhdWQiOiJhcGk6Ly9jNjljNTg5Mi04NTAxLTQ2MjItOTU1Zi0yY2I2OTZkY2EwMTgiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC83ZWY3MjRjYi0zYzc3LTRiNDQtOTBiZC0xYTQ4ZTI2NWFkODYvIiwiaWF0IjoxNzA5NTA1MDQzLCJuYmYiOjE3MDk1MDUwNDMsImV4cCI6MTcwOTUwODk0MywiYWlvIjoiRTJOZ1lGaW45K0VkMjlUK0F0dXJtVEdYNDJwMEFRPT0iLCJhcHBpZCI6ImM2OWM1ODkyLTg1MDEtNDYyMi05NTVmLTJjYjY5NmRjYTAxOCIsImFwcGlkYWNyIjoiMSIsImlkcCI6Imh0dHBzOi8vc3RzLndpbmRvd3MubmV0LzdlZjcyNGNiLTNjNzctNGI0NC05MGJkLTFhNDhlMjY1YWQ4Ni8iLCJvaWQiOiI0NTFhYzkzZi0zMGRjLTRhMTAtYTdmZi0wMTY1NTExNzI3MTQiLCJyaCI6IjAuQWIwQXl5VDNmbmM4UkV1UXZScEk0bVd0aHBKWW5NWUJoU0pHbFY4c3RwYmNvQmpMQUFBLiIsInJvbGVzIjpbIldyaXRlIiwiUmVhZGVyIl0sInNpZCI6IjllZTU1ZGY2LTY5MWItNDhlMi05Y2M0LWE4MmI5MWViNGYyNSIsInN1YiI6IjQ1MWFjOTNmLTMwZGMtNGExMC1hN2ZmLTAxNjU1MTE3MjcxNCIsInRpZCI6IjdlZjcyNGNiLTNjNzctNGI0NC05MGJkLTFhNDhlMjY1YWQ4NiIsInV0aSI6IjA5UWJvVXFPc2tPVXlaNjdoVkhwQUEiLCJ2ZXIiOiIxLjAifQ.Pyd-1ZNHJBUBiQxvGIKOFkyTj05vC0Kej-Mrf6UERn67TYV0dqedzWuMrVz7jTm-kmRTzSenzgAnBkD0buTjtuAT4K35RNDKk6IJjj2Cx6gaY1FTjtwxfYzDUOSqELa6CSFP1rYcReHL8ctlGql1n7aO7Eb1a7EL9fVMBZDEkRK1ge9N1UjT4nMJ3TLE900zhpeD3pSICwuaabXRb3cbzre74wrNMmqOJADQA2PCTEa1DijCu-g4zfnJyHN6w3jsI5FhfajYOpZu7jP3xNkXd9turcZ4-MFUruBtzUt1QGLTsTf5kf1u1Q_gGPnosL9-lnb1Hqhfd4oad0wCitI1Ug";

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

  async getProgramaPorId(id: string) {
    const url = `https://api-management-encanto-experiencia.azure-api.net/api/cadastro/v1/programa-fidelidade/${id}`;
    const token =
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IlhSdmtvOFA3QTNVYVdTblU3Yk05blQwTWpoQSIsImtpZCI6IlhSdmtvOFA3QTNVYVdTblU3Yk05blQwTWpoQSJ9.eyJhdWQiOiJhcGk6Ly9jNjljNTg5Mi04NTAxLTQ2MjItOTU1Zi0yY2I2OTZkY2EwMTgiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC83ZWY3MjRjYi0zYzc3LTRiNDQtOTBiZC0xYTQ4ZTI2NWFkODYvIiwiaWF0IjoxNzA5NTA1MDQzLCJuYmYiOjE3MDk1MDUwNDMsImV4cCI6MTcwOTUwODk0MywiYWlvIjoiRTJOZ1lGaW45K0VkMjlUK0F0dXJtVEdYNDJwMEFRPT0iLCJhcHBpZCI6ImM2OWM1ODkyLTg1MDEtNDYyMi05NTVmLTJjYjY5NmRjYTAxOCIsImFwcGlkYWNyIjoiMSIsImlkcCI6Imh0dHBzOi8vc3RzLndpbmRvd3MubmV0LzdlZjcyNGNiLTNjNzctNGI0NC05MGJkLTFhNDhlMjY1YWQ4Ni8iLCJvaWQiOiI0NTFhYzkzZi0zMGRjLTRhMTAtYTdmZi0wMTY1NTExNzI3MTQiLCJyaCI6IjAuQWIwQXl5VDNmbmM4UkV1UXZScEk0bVd0aHBKWW5NWUJoU0pHbFY4c3RwYmNvQmpMQUFBLiIsInJvbGVzIjpbIldyaXRlIiwiUmVhZGVyIl0sInNpZCI6IjllZTU1ZGY2LTY5MWItNDhlMi05Y2M0LWE4MmI5MWViNGYyNSIsInN1YiI6IjQ1MWFjOTNmLTMwZGMtNGExMC1hN2ZmLTAxNjU1MTE3MjcxNCIsInRpZCI6IjdlZjcyNGNiLTNjNzctNGI0NC05MGJkLTFhNDhlMjY1YWQ4NiIsInV0aSI6IjA5UWJvVXFPc2tPVXlaNjdoVkhwQUEiLCJ2ZXIiOiIxLjAifQ.Pyd-1ZNHJBUBiQxvGIKOFkyTj05vC0Kej-Mrf6UERn67TYV0dqedzWuMrVz7jTm-kmRTzSenzgAnBkD0buTjtuAT4K35RNDKk6IJjj2Cx6gaY1FTjtwxfYzDUOSqELa6CSFP1rYcReHL8ctlGql1n7aO7Eb1a7EL9fVMBZDEkRK1ge9N1UjT4nMJ3TLE900zhpeD3pSICwuaabXRb3cbzre74wrNMmqOJADQA2PCTEa1DijCu-g4zfnJyHN6w3jsI5FhfajYOpZu7jP3xNkXd9turcZ4-MFUruBtzUt1QGLTsTf5kf1u1Q_gGPnosL9-lnb1Hqhfd4oad0wCitI1Ug";

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

  deleteProgramaFidelidade = async (id: any, token2: any) => {
    const token =
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IlhSdmtvOFA3QTNVYVdTblU3Yk05blQwTWpoQSIsImtpZCI6IlhSdmtvOFA3QTNVYVdTblU3Yk05blQwTWpoQSJ9.eyJhdWQiOiJhcGk6Ly9jNjljNTg5Mi04NTAxLTQ2MjItOTU1Zi0yY2I2OTZkY2EwMTgiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC83ZWY3MjRjYi0zYzc3LTRiNDQtOTBiZC0xYTQ4ZTI2NWFkODYvIiwiaWF0IjoxNzA5NTA1MDQzLCJuYmYiOjE3MDk1MDUwNDMsImV4cCI6MTcwOTUwODk0MywiYWlvIjoiRTJOZ1lGaW45K0VkMjlUK0F0dXJtVEdYNDJwMEFRPT0iLCJhcHBpZCI6ImM2OWM1ODkyLTg1MDEtNDYyMi05NTVmLTJjYjY5NmRjYTAxOCIsImFwcGlkYWNyIjoiMSIsImlkcCI6Imh0dHBzOi8vc3RzLndpbmRvd3MubmV0LzdlZjcyNGNiLTNjNzctNGI0NC05MGJkLTFhNDhlMjY1YWQ4Ni8iLCJvaWQiOiI0NTFhYzkzZi0zMGRjLTRhMTAtYTdmZi0wMTY1NTExNzI3MTQiLCJyaCI6IjAuQWIwQXl5VDNmbmM4UkV1UXZScEk0bVd0aHBKWW5NWUJoU0pHbFY4c3RwYmNvQmpMQUFBLiIsInJvbGVzIjpbIldyaXRlIiwiUmVhZGVyIl0sInNpZCI6IjllZTU1ZGY2LTY5MWItNDhlMi05Y2M0LWE4MmI5MWViNGYyNSIsInN1YiI6IjQ1MWFjOTNmLTMwZGMtNGExMC1hN2ZmLTAxNjU1MTE3MjcxNCIsInRpZCI6IjdlZjcyNGNiLTNjNzctNGI0NC05MGJkLTFhNDhlMjY1YWQ4NiIsInV0aSI6IjA5UWJvVXFPc2tPVXlaNjdoVkhwQUEiLCJ2ZXIiOiIxLjAifQ.Pyd-1ZNHJBUBiQxvGIKOFkyTj05vC0Kej-Mrf6UERn67TYV0dqedzWuMrVz7jTm-kmRTzSenzgAnBkD0buTjtuAT4K35RNDKk6IJjj2Cx6gaY1FTjtwxfYzDUOSqELa6CSFP1rYcReHL8ctlGql1n7aO7Eb1a7EL9fVMBZDEkRK1ge9N1UjT4nMJ3TLE900zhpeD3pSICwuaabXRb3cbzre74wrNMmqOJADQA2PCTEa1DijCu-g4zfnJyHN6w3jsI5FhfajYOpZu7jP3xNkXd9turcZ4-MFUruBtzUt1QGLTsTf5kf1u1Q_gGPnosL9-lnb1Hqhfd4oad0wCitI1Ug";

    const url = `https://api-management-encanto-experiencia.azure-api.net/api/cadastro/v1/programa-fidelidade/${id}`;

    try {
      const response = await axios.delete(url, {
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
