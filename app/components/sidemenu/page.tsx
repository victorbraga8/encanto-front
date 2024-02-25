"use client";
import { signOut } from "next-auth/react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";

const SideMenu = () => {
  const router = useRouter();
  const handleBookingClick = () => {
    router.push("/usuario-logado/adm/clientes/novo/");
  };

  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isDropdownOpen2, setDropdownOpen2] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  const toggleDropdown2 = () => {
    setDropdownOpen2(!isDropdownOpen2);
  };
  return (
    <div className="sidebar mt-4 text-center w-full">
      <div className="dropdown">
        <Button className=" py-2 px-7 rounded" variant="link">
          <Link href="/" className=" text-indigo-600 py-2 px-4 rounded">
            Home
          </Link>
        </Button>
      </div>
      <div className="dropdown">
        <Button
          className="text-indigo-600 py-2 px-7 rounded"
          variant="link"
          onClick={toggleDropdown}
        >
          Clientes
        </Button>
        {isDropdownOpen && (
          <div className="dropdown-content bg-slate-400 p-4 mt-2 rounded shadow-xl">
            <Link
              href="/usuario-logado/adm/clientes/novo"
              className="text-white block mb-2 hover:bg-slate-200 hover:text-slate-400"
              onClick={toggleDropdown}
            >
              Cadastrar
            </Link>
            {/* <Link
              href="/usuario/opcao2"
              className="text-white block mb-2 hover:bg-slate-200 hover:text-slate-400"
            >
              Opção 2
            </Link>
            <Link
              href="/usuario/opcao4"
              className="text-white block mb-2 hover:bg-slate-200 hover:text-slate-400"
            >
              Opção 4
            </Link> */}
          </div>
        )}
      </div>

      <div className="dropdown">
        <Button
          onClick={toggleDropdown2}
          className="text-indigo-600 py-2 px-7 rounded"
          variant="link"
        >
          Programas
        </Button>
        {isDropdownOpen2 && (
          <div className="dropdown-content bg-slate-400 p-4 mt-2 rounded shadow-xl">
            <Link
              href="/programas/cadastrar"
              className="text-white block mb-2 hover:bg-slate-200 hover:text-slate-400"
              onClick={toggleDropdown2}
            >
              Cadastrar
            </Link>
            <Link
              href="/programas/listar"
              className="text-white block mb-2 hover:bg-slate-200 hover:text-slate-400"
              onClick={toggleDropdown2}
            >
              Listar
            </Link>
          </div>
        )}
      </div>
      <div className="dropdown">
        <Button
          className=" text-indigo-600 py-2 px-7 rounded"
          variant="link"
          onClick={() => signOut()}
        >
          Logout
        </Button>
      </div>
    </div>
  );
};

export default SideMenu;
