import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Eraser } from "lucide-react";

interface Cliente {
  nome: string;
  celular: string;
  email: string;
}

interface Props {
  clientes: Cliente[];
  setFilteredClientes: React.Dispatch<React.SetStateAction<Cliente[]>>;
}

const Busca: React.FC<Props> = ({ clientes, setFilteredClientes }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const clearSearch = () => {
    setSearchTerm("");
  };

  useEffect(() => {
    if (clientes.length > 0) {
      const filtered = clientes.filter((cliente: Cliente) => {
        const nome = cliente.nome.toLowerCase();
        const celular = cliente.celular.toLowerCase();
        const email = cliente.email.toLowerCase();
        const lowerSearchTerm = searchTerm.toLowerCase();
        return (
          nome.includes(lowerSearchTerm) ||
          celular.includes(lowerSearchTerm) ||
          email.includes(lowerSearchTerm)
        );
      });
      setFilteredClientes(filtered);
    }
  }, [searchTerm, clientes, setFilteredClientes]);

  return (
    <>
      <Input
        type="text"
        placeholder="Buscar..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border border-gray-300 px-4 py-2 "
      />
      {searchTerm && (
        <Button
          onClick={clearSearch}
          variant="default"
          size="default"
          className="bg-amber-600 hover:bg-amber-400 px-4 py-2"
        >
          <Eraser className="mr-1" />
          Limpar
        </Button>
      )}
    </>
  );
};

export default Busca;
