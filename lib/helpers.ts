import React from "react";
import { Badge as BadgeComponent } from "@/components/ui/badge";
import axios, { AxiosResponse } from "axios";

class Helpers {
  handleStatus(status: string) {
    let badgeColor = "";
    if (status == "pendente") {
      badgeColor = "bg-amber-500";
    }
    if (status == "concluido") {
      badgeColor = "bg-green-500";
    }
    if (status == "cancelado") {
      badgeColor = "bg-red-500";
    }
    return badgeColor;
  }

  handlePath(path: string) {}

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

  // getProgramaFidelidade = async (token: any) => {
  //   // Incluir Etapa de verificador de validade do Token ou criar helper para isso
  //   const url =
  //     "https://api-management-encanto-experiencia.azure-api.net/api/cadastro/v1/programa-fidelidade/1/10";
  //   console.log("Token no Programa Fidelidade" + token);
  //   try {
  //     const response = await axios.get(url, {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     });
  //     console.log("Token no Programa Fidelidade" + token);
  //     // Lide com a resposta conforme necessário
  //     console.log("Resposta da API:", response.data);
  //     return response.data;
  //   } catch (error) {
  //     // Lide com os erros aqui
  //     console.error("Erro na requisição:", error);
  //     throw error;
  //   }
  // };
}

const helpers = new Helpers();
export default helpers;
