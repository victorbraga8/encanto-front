import { ChevronDown, ChevronLeft, Cog, LogOutIcon, Users } from "lucide-react";
import { useState } from "react";
import OpcoesAdm from "./menu-itens/adm/page";
import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";

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
    <aside
      className={`bg-gray-800 text-white h-screen ${
        collapsed ? "w-16" : "w-56"
      } transition-width duration-300 ease-in-out`}
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
      <nav>
        <OpcoesAdm
          collapsed={collapsed}
          adminCollapsed={adminCollapsed}
          programasCollapsed={programasCollapsed}
          onToggleAdmin={toggleAdminCollapsed}
          onToggleProgramas={toggleProgramasCollapsed}
        />
        <ul
          className={`text-center flex items-center flex-col bg-gray-800 text-white ${
            collapsed ? "w-16" : "w-56"
          } transition-width duration-300 ease-in-out`}
        >
          <li
            className="py-5 px-3.5 text-center cursor-pointer flex items-center hover:text-red-600"
            onClick={() => signOut()}
          >
            <LogOutIcon size={20} className="mr-2" />
            {collapsed ? "" : "Logout"}
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
