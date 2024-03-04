"use client";
import { ChevronDown, ChevronLeft, Cog, LogOutIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import OpcoesAdm from "./menu-itens/adm/page";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";

const Sidebar = () => {
  const [sidebarWidth, setSidebarWidth] = useState("w-56");
  const [collapsed, setCollapsed] = useState(false);
  const [adminCollapsed, setAdminCollapsed] = useState(false);
  const [programasCollapsed, setProgramasCollapsed] = useState(true);

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
    setAdminCollapsed(false);
    setSidebarWidth(collapsed ? "w-56" : "w-16");
  };

  const toggleAdminCollapsed = () => {
    setAdminCollapsed((prevAdminCollapsed) => !prevAdminCollapsed);
  };

  const toggleProgramasCollapsed = () => {
    setProgramasCollapsed((prevProgramasCollapsed) => !prevProgramasCollapsed);
  };

  const toggleAll = () => {
    setAdminCollapsed(false);
    setProgramasCollapsed(true);
  };
  const { data } = useSession();
  return (
    <>
      {data?.user ? (
        <aside
          className={`bg-gray-800 text-white ${sidebarWidth} transition-width duration-300 ease-in-out flex flex-col absolute h-screen inset-y-0 top-0 z-40`}
        >
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center space-x-2">
              <Image
                src="/assets/profile-pic-new.jpg"
                alt="Logo"
                width={20}
                height={20}
                loading="eager"
                className={`w-8 h-8 ${collapsed ? "hidden" : "block"}`}
              />
              <span
                className={`font-semibold ${collapsed ? "hidden" : "block"}`}
              >
                Sistema Encanto
              </span>
            </div>
            <button
              onClick={toggleCollapse}
              className="text-white focus:outline-none ml-6"
            >
              {collapsed ? (
                <ChevronLeft size={20} />
              ) : (
                <ChevronDown size={20} />
              )}
            </button>
          </div>
          <nav className="flex-1 overflow-y-auto">
            <ul>
              <Link href="/" onClick={toggleAll}>
                <li
                  className="py-5 px-5 text-center 
                     hover:bg-gray-700 cursor-pointer flex items-center flex-col"
                >
                  <span className="mr-2">
                    {collapsed ? <Cog size={20} /> : "Home"}
                  </span>
                </li>
              </Link>
            </ul>
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
              <li
                onClick={() => signOut()}
                className="py-5 px-3.5 text-center cursor-pointer flex items-center hover:text-red-600"
              >
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
                priority={true}
                loading="eager"
                src="/assets/encanto-footer.png"
              />
            )}
          </div>
        </aside>
      ) : null}
    </>
  );
};

export default Sidebar;
