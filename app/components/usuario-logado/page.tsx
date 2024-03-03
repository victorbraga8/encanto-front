"use client";

import helpers from "@/lib/helpers";
import { useEffect, useState } from "react";

// (async () => {
//   const url =
//     "https://api-management-encanto-experiencia.azure-api.net/api/cadastro/v1/programa-fidelidade";
//   const token =
//     "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IlhSdmtvOFA3QTNVYVdTblU3Yk05blQwTWpoQSIsImtpZCI6IlhSdmtvOFA3QTNVYVdTblU3Yk05blQwTWpoQSJ9.eyJhdWQiOiJhcGk6Ly9jNjljNTg5Mi04NTAxLTQ2MjItOTU1Zi0yY2I2OTZkY2EwMTgiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC83ZWY3MjRjYi0zYzc3LTRiNDQtOTBiZC0xYTQ4ZTI2NWFkODYvIiwiaWF0IjoxNzA5NDczMTM5LCJuYmYiOjE3MDk0NzMxMzksImV4cCI6MTcwOTQ3NzAzOSwiYWlvIjoiRTJOZ1lOamkwYzBhL3Fqay91bU9ZMTQrdG0rekFRPT0iLCJhcHBpZCI6ImM2OWM1ODkyLTg1MDEtNDYyMi05NTVmLTJjYjY5NmRjYTAxOCIsImFwcGlkYWNyIjoiMSIsImlkcCI6Imh0dHBzOi8vc3RzLndpbmRvd3MubmV0LzdlZjcyNGNiLTNjNzctNGI0NC05MGJkLTFhNDhlMjY1YWQ4Ni8iLCJvaWQiOiI0NTFhYzkzZi0zMGRjLTRhMTAtYTdmZi0wMTY1NTExNzI3MTQiLCJyaCI6IjAuQWIwQXl5VDNmbmM4UkV1UXZScEk0bVd0aHBKWW5NWUJoU0pHbFY4c3RwYmNvQmpMQUFBLiIsInJvbGVzIjpbIldyaXRlIiwiUmVhZGVyIl0sInNpZCI6IjQ4MWMyYWUxLWRlODAtNDA4NS1iMGZkLTk5MmQ0ZDJmOGQ0YiIsInN1YiI6IjQ1MWFjOTNmLTMwZGMtNGExMC1hN2ZmLTAxNjU1MTE3MjcxNCIsInRpZCI6IjdlZjcyNGNiLTNjNzctNGI0NC05MGJkLTFhNDhlMjY1YWQ4NiIsInV0aSI6ImxtLWZlLW5lRzBldTNiN20tSVB1QUEiLCJ2ZXIiOiIxLjAifQ.MXaaQL0PKFbO98eW4ov12gggijAlEJHQbBz-_RRcAVPAyMU-3PH9QuY-ykWkz7bC0_iGn0rM6F3xdUxjlcVYD7CRqJRY-Uj1D_P5lpydg_YTMUROH17t7-dMKaCUB4c-qVVSFEpMSnzJXj14KBCLzOGiyKjRaqIpUoW50O5R_8P5GOwLLZRBTUBpQrD8Z-bGBnjbdj7MJbqiLftLOqQFkTZkcvxXFpOdZqWDkBHYixs-aSj2KAXVvoFjMJFcXivVaprVUZuPUNXmNVFAZVesmHXcia9rjpxUxQQjO1y5TeVcJK3jxnvqPwjAxXl47EphqC5SQxTaCFki8BvtStK7XA"; // Lembre-se de substituir pelo seu token real

//   // Objeto a ser enviado no corpo da requisição
//   const requestBody = {
//     Name: "Programa Azul NEXT JS",
//     Description: "Programa de fidelidade da Azul NEXT JS",
//   };

//   try {
//     const resposta = await fetch(url, {
//       method: "POST", // Alterado para POST
//       headers: {
//         Authorization: `Bearer ${token}`,
//         "Content-Type": "application/json",
//         // Inclua headers adicionais conforme necessário para a sua aplicação
//       },
//       mode: "cors", // Configuração CORS
//       body: JSON.stringify(requestBody), // Adiciona o corpo da requisição
//     });

//     if (!resposta.ok) {
//       throw new Error(
//         `Erro na requisição: ${resposta.status} - ${resposta.statusText}`
//       );
//     }

//     const dados = await resposta.json();
//     console.log("Dados recebidos:", dados);

//     return dados;
//   } catch (erro: any) {
//     console.error("Erro na requisição:", erro.message);
//     throw erro;
//   }
// })();

// (async () => {
//   const url =
//     "https://api-management-encanto-experiencia.azure-api.net/api/cadastro/v1/programa-fidelidade/1/10";
//   const token =
//     "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IlhSdmtvOFA3QTNVYVdTblU3Yk05blQwTWpoQSIsImtpZCI6IlhSdmtvOFA3QTNVYVdTblU3Yk05blQwTWpoQSJ9.eyJhdWQiOiJhcGk6Ly9jNjljNTg5Mi04NTAxLTQ2MjItOTU1Zi0yY2I2OTZkY2EwMTgiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC83ZWY3MjRjYi0zYzc3LTRiNDQtOTBiZC0xYTQ4ZTI2NWFkODYvIiwiaWF0IjoxNzA5NDczMTM5LCJuYmYiOjE3MDk0NzMxMzksImV4cCI6MTcwOTQ3NzAzOSwiYWlvIjoiRTJOZ1lOamkwYzBhL3Fqay91bU9ZMTQrdG0rekFRPT0iLCJhcHBpZCI6ImM2OWM1ODkyLTg1MDEtNDYyMi05NTVmLTJjYjY5NmRjYTAxOCIsImFwcGlkYWNyIjoiMSIsImlkcCI6Imh0dHBzOi8vc3RzLndpbmRvd3MubmV0LzdlZjcyNGNiLTNjNzctNGI0NC05MGJkLTFhNDhlMjY1YWQ4Ni8iLCJvaWQiOiI0NTFhYzkzZi0zMGRjLTRhMTAtYTdmZi0wMTY1NTExNzI3MTQiLCJyaCI6IjAuQWIwQXl5VDNmbmM4UkV1UXZScEk0bVd0aHBKWW5NWUJoU0pHbFY4c3RwYmNvQmpMQUFBLiIsInJvbGVzIjpbIldyaXRlIiwiUmVhZGVyIl0sInNpZCI6IjQ4MWMyYWUxLWRlODAtNDA4NS1iMGZkLTk5MmQ0ZDJmOGQ0YiIsInN1YiI6IjQ1MWFjOTNmLTMwZGMtNGExMC1hN2ZmLTAxNjU1MTE3MjcxNCIsInRpZCI6IjdlZjcyNGNiLTNjNzctNGI0NC05MGJkLTFhNDhlMjY1YWQ4NiIsInV0aSI6ImxtLWZlLW5lRzBldTNiN20tSVB1QUEiLCJ2ZXIiOiIxLjAifQ.MXaaQL0PKFbO98eW4ov12gggijAlEJHQbBz-_RRcAVPAyMU-3PH9QuY-ykWkz7bC0_iGn0rM6F3xdUxjlcVYD7CRqJRY-Uj1D_P5lpydg_YTMUROH17t7-dMKaCUB4c-qVVSFEpMSnzJXj14KBCLzOGiyKjRaqIpUoW50O5R_8P5GOwLLZRBTUBpQrD8Z-bGBnjbdj7MJbqiLftLOqQFkTZkcvxXFpOdZqWDkBHYixs-aSj2KAXVvoFjMJFcXivVaprVUZuPUNXmNVFAZVesmHXcia9rjpxUxQQjO1y5TeVcJK3jxnvqPwjAxXl47EphqC5SQxTaCFki8BvtStK7XA";

//   try {
//     const resposta = await fetch(url, {
//       method: "GET",
//       headers: {
//         Authorization: `Bearer ${token}`,
//         "Content-Type": "application/json",
//         // Inclua headers adicionais conforme necessário para a sua aplicação
//       },
//       mode: "cors", // Configuração CORS
//     });

//     if (!resposta.ok) {
//       throw new Error(
//         `Erro na requisição: ${resposta.status} - ${resposta.statusText}`
//       );
//     }

//     const dados = await resposta.json();
//     console.log("Dados recebidos:", dados);

//     return dados;
//   } catch (erro: any) {
//     console.error("Erro na requisição:", erro.message);
//     throw erro;
//   }
// })();

// const programas = await helpers.getProgramas();
// console.log(programas);

const UsuarioLogado = () => {
  const [programas, setProgramas] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resposta = await helpers.getProgramas();
        setProgramas(resposta);

        // Mova o console.log para dentro do bloco try para garantir que seja chamado apenas uma vez
        console.log(resposta);
      } catch (erro: any) {
        console.error("Erro ao obter programas:", erro.message);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="lg:pl-[268px] max-w-fit pt-10">
        <h1>TESTE</h1>
      </div>
    </>
  );
};

export default UsuarioLogado;
