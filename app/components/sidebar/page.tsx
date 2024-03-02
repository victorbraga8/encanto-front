"use client";
import { ChevronDown, ChevronLeft, Cog, LogOutIcon, Users } from "lucide-react";
import { useState } from "react";
import OpcoesAdm from "./menu-itens/adm/page";
import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";
import Image from "next/image";

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [adminCollapsed, setAdminCollapsed] = useState(false);
  const [programasCollapsed, setProgramasCollapsed] = useState(true);

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
    setAdminCollapsed(false);
  };

  const toggleAdminCollapsed = () => {
    setAdminCollapsed((prevAdminCollapsed) => !prevAdminCollapsed);
  };

  const toggleProgramasCollapsed = () => {
    setProgramasCollapsed((prevProgramasCollapsed) => !prevProgramasCollapsed);
  };

  return (
    <>
      <aside
        className={`bg-gray-800 text-white ${
          collapsed ? "w-16" : "w-56"
        } transition-width duration-300 ease-in-out flex flex-col absolute inset-y-0 top-0`}
      >
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center space-x-2">
            <img
              src="assets/profile-pic-new.jpg"
              alt="Logo"
              className={`w-8 h-8 ${collapsed ? "hidden" : "block"}`}
            />
            <span className={`font-semibold ${collapsed ? "hidden" : "block"}`}>
              Sistema Encanto
            </span>
          </div>
          <button
            onClick={toggleCollapse}
            className="text-white focus:outline-none ml-6"
          >
            {collapsed ? <ChevronLeft size={20} /> : <ChevronDown size={20} />}
          </button>
        </div>
        <nav className="flex-1 overflow-y-auto">
          <OpcoesAdm
            collapsed={collapsed}
            adminCollapsed={adminCollapsed}
            programasCollapsed={programasCollapsed}
            onToggleAdmin={toggleAdminCollapsed}
            onToggleProgramas={toggleProgramasCollapsed}
          />
        </nav>
        <div className="mt-auto">
          <ul
            className={`text-center flex items-center flex-col bg-gray-800 text-white ${
              collapsed ? "w-16" : "w-56"
            } transition-width duration-300 ease-in-out`}
          >
            <li className="py-5 px-3.5 text-center cursor-pointer flex items-center hover:text-red-600">
              <LogOutIcon size={20} className="mr-2" />
              {collapsed ? "" : "Logout"}
            </li>
          </ul>
          {!collapsed && (
            <Image
              className="mt-auto px-3 py-3"
              alt="encantologo"
              width={150}
              height={150}
              src="/assets/encanto-footer.png"
            />
          )}
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
