import helpers from "@/lib/helpers";
import axios from "axios";

class ClienteFunctions {
  async getClientes() {
    const token = helpers.validaToken();
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

      return dados;
    } catch (erro: any) {
      console.error("Erro na requisição:", erro.message);
      throw erro;
    }
  }

  async cadastraCliente(values: any) {
    const token = helpers.validaToken();
    console.log(values);
    const url =
      "https://api-management-encanto-experiencia.azure-api.net/api/cliente/v1/InserirCliente";

    const temp = {
      Nome: values.nome,
      Sobrenome: "Ex",
      Ocupacao: values.profissao,
      CPF: values.cpf,
      DataNascimento: values.dataNascimento,
      RG: values.rg,
      Celular: values.celular,
      Email: values.email,
      PossuiWhatsApp: true,
      NumeroCriancasParticipantes: 3,
      AceitaReceberMensagem: true,
      EstadoCivil: 4,
      EndereçoPrincial: {
        CEP: values.cep,
        Logradouro: values.endereco,
        Numero: values.numero,
        Complemento: values.complemento,
        Bairro: " ",
        Cidade: {
          Id: "3d389a51eee847b5bd85c3d790d21c35",
        },
      },
      TipoServicos: [
        {
          TipoServico: {
            Id: values.experiencia,
          },
        },
      ],
      ProgramasFidelidade: [
        {
          Numero: values.numeroPrograma,
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

    // const jsonString = JSON.stringify(temp, null, 2);
    // const blob = new Blob([jsonString], { type: "text/plain" });
    // const blobUrl = URL.createObjectURL(blob);
    // const a = document.createElement("a");
    // a.href = blobUrl;
    // a.download = "output.txt";
    // a.textContent = "Download do arquivo";
    // document.body.appendChild(a);
    // a.click();
    // document.body.removeChild(a);

    try {
      const response = await axios.post(url, temp, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      helpers.showToast("Cliente cadastrado com sucesso", "bg-green-400");
      return response.data;
    } catch (error) {
      helpers.showToast(
        "Erro no envio, verifique os dados inseridos.",
        "bg-red-400"
      );
      console.error("Erro na requisição:", error);
      throw error;
    }
  }
}

const clienteFunctions = new ClienteFunctions();

export default clienteFunctions;
