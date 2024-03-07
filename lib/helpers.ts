import axios, { AxiosResponse } from "axios";
import { toast } from "@/components/ui/use-toast";
import { cn } from "./utils";
import { url } from "inspector";

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

  validaToken() {
    const tokenADCookie = document.cookie
      .split("; ")
      .find((row) => row.startsWith("tokenAD="));

    const token = tokenADCookie?.split("=")[1];

    return token;
  }

  formataHora() {
    const horaAtualString = new Date().toLocaleTimeString();
    const horaAtual = new Date("1970-01-01 " + horaAtualString);
    const opcoesFormatacao = {
      hour: "numeric",
      minute: "numeric",
      hour12: false,
    } as Intl.DateTimeFormatOptions;

    if (horaAtual) {
      const horaAtualFormatada = horaAtual.toLocaleTimeString(
        undefined,
        opcoesFormatacao
      );
      const horaFuturaFormatada = new Date(
        horaAtual.getTime() + 50 * 60 * 1000
      ).toLocaleTimeString(undefined, opcoesFormatacao);

      return { horaAtualFormatada, horaFuturaFormatada };
    }
  }

  validaExpiracaoToken(validadeToken: any) {
    const horaAtualString = new Date().toLocaleTimeString();
    const horaAtual = new Date("1970-01-01 " + horaAtualString);

    horaAtual.setMinutes(horaAtual.getMinutes() + 50);

    const [validadeHoras, validadeMinutos] = validadeToken.split(":");
    const minutosHoraFutura =
      parseInt(validadeHoras) * 60 + parseInt(validadeMinutos);

    // Convertendo a hora atual para minutos
    const [horaAtualHoras, horaAtualMinutos] = horaAtualString.split(":");
    const minutosHoraAtual =
      parseInt(horaAtualHoras) * 60 + parseInt(horaAtualMinutos);

    // Calculando a diferença em minutos
    const diferencaEmMinutos = minutosHoraFutura - minutosHoraAtual;
    return diferencaEmMinutos;
  }

  async getProgramas() {
    const token = this.validaToken();
    const url =
      "https://api-management-encanto-experiencia.azure-api.net/api/cadastro/v1/programa-fidelidade/1/10";
    // const url =
    //   "https://roterizadorviagem-cadastro.azurewebsites.net/api/programa-fidelidade/1/10?code=wp/z7g0VCJtRhQIb/jC9QEPPgSstFdZIkkGM0n5qsUlpbGkSiAIokA==&clientId=apim-api-management-encanto-experiencia";

    try {
      const resposta = await fetch(url, {
        method: "GET",
        headers: new Headers({
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        }),
        mode: "cors",
        cache: "no-cache",
      });
      const dados = await resposta.json();
      console.log("Dados recebidos:", dados);

      return dados;
      // Restante do código...
    } catch (erro: any) {
      console.error("Erro na requisição:", erro.message);
      throw erro;
    }
  }

  async getClientes() {
    const token = this.validaToken();
    // const url =
    //   "https://api-management-encanto-experiencia.azure-api.net/api/cadastro/v1/programa-fidelidade/1/10";
    const url =
      "https://api-management-encanto-experiencia.azure-api.net/api/cliente/v1/list/1/10";

    try {
      const resposta = await fetch(url, {
        method: "GET",
        headers: new Headers({
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        }),
        mode: "cors",
        cache: "no-cache",
      });
      const dados = await resposta.json();
      console.log("Dados recebidos:", dados);

      return dados;
      // Restante do código...
    } catch (erro: any) {
      console.error("Erro na requisição:", erro.message);
      throw erro;
    }
  }

  async getProgramaPorId(id: string) {
    const url = `https://api-management-encanto-experiencia.azure-api.net/api/cadastro/v1/programa-fidelidade/${id}`;
    const token =
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IlhSdmtvOFA3QTNVYVdTblU3Yk05blQwTWpoQSIsImtpZCI6IlhSdmtvOFA3QTNVYVdTblU3Yk05blQwTWpoQSJ9.eyJhdWQiOiJhcGk6Ly9jNjljNTg5Mi04NTAxLTQ2MjItOTU1Zi0yY2I2OTZkY2EwMTgiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC83ZWY3MjRjYi0zYzc3LTRiNDQtOTBiZC0xYTQ4ZTI2NWFkODYvIiwiaWF0IjoxNzA5NTg2OTE5LCJuYmYiOjE3MDk1ODY5MTksImV4cCI6MTcwOTU5MDgxOSwiYWlvIjoiRTJOZ1lLajdtM0p6MStORWpWbU15VUp4ZHZkREFRPT0iLCJhcHBpZCI6ImM2OWM1ODkyLTg1MDEtNDYyMi05NTVmLTJjYjY5NmRjYTAxOCIsImFwcGlkYWNyIjoiMSIsImlkcCI6Imh0dHBzOi8vc3RzLndpbmRvd3MubmV0LzdlZjcyNGNiLTNjNzctNGI0NC05MGJkLTFhNDhlMjY1YWQ4Ni8iLCJvaWQiOiI0NTFhYzkzZi0zMGRjLTRhMTAtYTdmZi0wMTY1NTExNzI3MTQiLCJyaCI6IjAuQWIwQXl5VDNmbmM4UkV1UXZScEk0bVd0aHBKWW5NWUJoU0pHbFY4c3RwYmNvQmpMQUFBLiIsInJvbGVzIjpbIldyaXRlIiwiUmVhZGVyIl0sInNpZCI6ImY1MDAyZGMxLTgzMWMtNDJhZS04ODAzLWIwMWE0YTM5ODAzNyIsInN1YiI6IjQ1MWFjOTNmLTMwZGMtNGExMC1hN2ZmLTAxNjU1MTE3MjcxNCIsInRpZCI6IjdlZjcyNGNiLTNjNzctNGI0NC05MGJkLTFhNDhlMjY1YWQ4NiIsInV0aSI6IkhLWkUxVWRoVWstVlVKajFEQjhnQVEiLCJ2ZXIiOiIxLjAifQ.Nt2q6UpDVE20b61Lu441nQwRK9_B8-Lm4NAvFmUY6iQXtVHAP8uOiXrNuShh3RcrMCxCLlN6js69C2FXQnQwVgC_-JThKdjhPj031TEKBbBqiWb-VtrosKvV1i2skSRy4Xn5r4MRHw9NCdufjkWlUAyfdAWVE16Ou38Xqmu2rc2kaRImeeFwVCndWjLJj6KdOgtlPMzP1oomiV7pTqvxkziS-URh95_xM9b2WL00sNT2KJfaJOFZAKmjZcPwwRhkCOYciNe0UTxKoP27BqISZCj-MKWpnzMueVryXUa5vdkHD8TvZb_UzkW8iWj4cSFYKOb70UIMPLdVL0ese97oeg";

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

  async getTokenAndSetCookies() {
    try {
      const clientId = "c69c5892-8501-4622-955f-2cb696dca018";
      const clientSecret = "FPV8Q~izBHxLzhGx7iQszV046J1c3Vw~Cwi4nb2i";
      const scope = "api://c69c5892-8501-4622-955f-2cb696dca018/.default";
      const grantType = "client_credentials";
      const tokenUrl =
        "https://login.microsoftonline.com/7ef724cb-3c77-4b44-90bd-1a48e265ad86/oauth2/v2.0/token";

      const body = new URLSearchParams();
      body.append("client_id", clientId);
      body.append("client_secret", clientSecret);
      body.append("scope", scope);
      body.append("grant_type", grantType);

      const response = await fetch(tokenUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        mode: "cors",
        body: body.toString(),
      });

      if (!response.ok) {
        throw new Error(`Erro na requisição: ${response.statusText}`);
      }

      const result = await response.json();
      const { expires_in, access_token } = result;
      return { expires_in, access_token };
    } catch (error: any) {
      console.error("Erro ao fazer a requisição:", error.message);
      return null;
    }
  }

  msgToast(msg: any) {
    if (msg == "erro-api") {
      return "Erro no servidor";
    }
    if (msg == "erro-client") {
      return "Erro, tente atualizar novamente.";
    }
    if (msg == "success") {
      return "Registro atualizado com sucesso.";
    } else {
      return "Erro, desconhecido.";
    }
  }

  updateRecord = async (values: any) => {
    console.log(values);
    const token = this.validaToken();
    try {
      const url = `https://api-management-encanto-experiencia.azure-api.net/api/cadastro/v1/programa-fidelidade/${values.id}`;

      const response = await axios.put(
        url,
        {
          Name: values.nomePrograma,
          Description: values.descricaoPrograma,
          Logomarca: values.logomarca,
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      if (response.status === 200) {
        return { msg: "success" };
      } else {
        return { msg: "erro-client" };
      }
    } catch (error) {
      return { msg: "erro-api" };
    }
  };

  showToast(msg: any, style: any) {
    toast({
      className: cn(
        `top-0 right-0 flex fixed md:max-w-[420px] md:top-4 md:right-4 ${style} text-xl`
      ),
      description: msg,
      duration: 3000,
    });
  }

  fazerSolicitacao = async (): Promise<string> => {
    interface TokenResponse {
      access_token: string;
      // Adicione outros campos conforme necessário
    }
    let tokenNaSessao = null;

    // Verifica se há um token na sessão (apenas se estiver no ambiente do navegador)
    if (typeof sessionStorage !== "undefined") {
      tokenNaSessao = sessionStorage.getItem("token");
    }

    if (tokenNaSessao) {
      console.log("Token encontrado na sessão:", tokenNaSessao);
      return tokenNaSessao;
    }

    // Se não houver token na sessão, faça a solicitação
    const url =
      "https://login.microsoftonline.com/7ef724cb-3c77-4b44-90bd-1a48e265ad86/oauth2/v2.0/token";

    // Parâmetros da solicitação
    const data = new URLSearchParams();
    data.append("client_id", "c69c5892-8501-4622-955f-2cb696dca018");
    data.append("client_secret", "FPV8Q~izBHxLzhGx7iQszV046J1c3Vw~Cwi4nb2i");
    data.append("scope", "api://c69c5892-8501-4622-955f-2cb696dca018/.default");
    data.append("grant_type", "client_credentials");

    try {
      // Faça a solicitação POST
      const response: AxiosResponse<TokenResponse> = await axios.post(
        url,
        data,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );

      const tokenObtido = response.data.access_token;

      // Armazene o token na sessão (apenas se estiver no ambiente do navegador)
      if (typeof sessionStorage !== "undefined") {
        sessionStorage.setItem("token", tokenObtido);
      }

      // Retorna o token
      console.log("Token obtido com sucesso:", tokenObtido);
      return tokenObtido;
    } catch (error) {
      // Manipule os erros aqui
      console.error("Erro ao obter o token:", error);
      throw error; // Você pode querer lançar o erro para que o componente que chamou a função também possa lidar com ele
    }
  };

  getProgramaFidelidade = async () => {
    const token = this.validaToken();

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

  deleteProgramaFidelidade = async (id: any) => {
    const token = this.validaToken();

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

  async cadastraCliente(values: any) {
    console.log(values);
    console.log(values.email);
    console.log(values.name);
    console.log(values.cpf);
    console.log(values.rg);
    const token = this.validaToken();
    const url =
      "https://api-management-encanto-experiencia.azure-api.net/api/cliente/v1/InserirCliente";

    const temp = {
      Nome: values.name,
      Sobrenome: "Rodrigues",
      Ocupacao: "Corporate Paradigm Assistant",
      CPF: "14472780702",
      RG: values.rg,
      Celular: values.celuar,
      Email: "values@email.com.bw",
      PossuiWhatsApp: false,
      NumeroCriancasParticipantes: 3,
      AceitaReceberMensagem: true,
      EstadoCivil: 4,
      EndereçoPrincial: {
        CEP: "89858115",
        Logradouro: "Gutmann Junctions",
        Numero: 811,
        Complemento: "do",
        Bairro: "cillum amet",
        Cidade: {
          Id: "3d389a51eee847b5bd85c3d790d21c35",
        },
      },
      TipoServicos: [
        {
          TipoServico: {
            Id: "57b7bd1ff4d940d2b264223af55e825a",
          },
        },
      ],
      ProgramasFidelidade: [
        {
          Numero: "30126DJ0",
          Validade: "2023-08-21",
          ProgramaFidelidade: {
            Id: "420631bee7cd45c1940b72022e59237f",
          },
        },
        {
          Numero: "774985SS",
          Validade: "2023-07-21",
          ProgramaFidelidade: {
            Id: "a84af8d01062422cae97039a021aa045",
          },
        },
        {
          Numero: "47131DGI",
          Validade: "2024-02-13",
          ProgramaFidelidade: {
            Id: "8f2d3dce705f49d2b394108a97c72ea2",
          },
        },
      ],
      Documentos: [
        {
          Numero: "84143P2C",
          PendenteEmissao: true,
          DataEmissao: "1994-10-02",
          DataValidade: "2023-12-25",
          TipoDocumento: {
            Id: "81b44b05-67fc-4a2d-a2bb-c0601d7dbc90",
          },
        },
        {
          Numero: "9123655I",
          PendenteEmissao: false,
          DataEmissao: "2017-02-04",
          DataValidade: "2023-10-03",
          TipoDocumento: {
            Id: "4e01ff66-1568-4fee-bda6-c31567b004a7",
          },
        },
      ],
      Alergia: false,
      AlergiaDetalhe: "",
      RestricaoAlimentar: false,
      RestricaoAlimentarDetalhe:
        "pariatur ut excepteur veniam quis deserunt magna dolore exercitation aliquip duis elit ea amet et dolor in sint",
      Sexo: 4,
      Classificacao: 3,
      Filhos: [
        {
          Nome: "Lara Rodrigues",
          Idade: 20,
          Sexo: 4,
        },
        {
          Nome: "Lara Rodrigues",
          Idade: 20,
          Sexo: 1,
        },
        {
          Nome: "Lara Rodrigues",
          Idade: 49,
          Sexo: 1,
        },
      ],
    };

    console.log(temp);

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      mode: "cors" as RequestMode,
      body: JSON.stringify(temp),
    };

    fetch(url, requestOptions)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Erro HTTP! Status NOVO: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => console.log("Resposta NOVA:", data))
      .catch((error) => console.error("Erro NOVO:", error.message));
  }

  async cadastraPrograma(values: any) {
    console.log(values);
    const token = this.validaToken();
    const url =
      "https://api-management-encanto-experiencia.azure-api.net/api/cadastro/v1/programa-fidelidade";

    try {
      const response = await axios.post(url, values, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      console.log("Resposta da API:", response.data);
      return response.data;
    } catch (error) {
      console.error("Erro na requisição:", error);
      throw error;
    }
  }

  async deleteDocumento(id: any) {}

  async getDocumentos() {}

  async deleteExperiencia(id: any) {}
  async getExperiencias() {}
}

const helpers = new Helpers();
export default helpers;
