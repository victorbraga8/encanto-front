import {
  ChevronDown,
  ChevronLeft,
  Cog,
  ShoppingBag,
  User,
  Users,
} from "lucide-react";
import { useState } from "react";

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
            MyApp
          </span>
        </div>
        <button
          onClick={toggleCollapse}
          className="text-white focus:outline-none"
        >
          {collapsed ? <ChevronLeft size={20} /> : <ChevronDown size={20} />}
        </button>
      </div>
      <nav>
        <ul>
          <li
            className={`p-4 ${
              !collapsed && adminCollapsed ? "bg-cyan-700" : "hover:bg-gray-700"
            } cursor-pointer`}
            onClick={toggleAdminCollapsed}
          >
            <span className="mr-2">
              {collapsed ? <Cog size={20} /> : "Admin"}
            </span>
          </li>
          {!collapsed && adminCollapsed && (
            <ul className="pl-4">
              <li
                className={`py-2 px-3 text-center ${
                  programasCollapsed ? "bg-cyan-700" : "hover:bg-gray-700"
                } cursor-pointer flex items-center`}
                onClick={toggleProgramasCollapsed}
              >
                <Users size={16} className="mr-2" />
                Programas
              </li>
              {!programasCollapsed && (
                <ul className="pl-4">
                  <li className="py-2 px-3 text-center hover:bg-cyan-700 cursor-pointer flex items-center">
                    Cadastrar
                  </li>
                  <li className="py-2 px-3 text-center hover:bg-cyan-700 cursor-pointer flex items-center">
                    Listar
                  </li>
                </ul>
              )}
              <li
                className={`py-2  px-3 text-center ${
                  collapsed ? "bg-cyan-700" : "hover:bg-gray-700"
                } cursor-pointer flex items-center`}
              >
                <ShoppingBag size={16} className="mr-2" />
                Shopping
              </li>
            </ul>
          )}

          <li
            className={`p-4 ${
              collapsed ? "bg-cyan-700" : "hover:bg-gray-700"
            } cursor-pointer`}
          >
            <span className="mr-2">
              {collapsed ? <User size={20} /> : "Users"}
            </span>
          </li>
          <li
            className={`p-4 ${
              collapsed ? "bg-cyan-700" : "hover:bg-gray-700"
            } cursor-pointer`}
          >
            <span className="mr-2">
              {collapsed ? <Cog size={20} /> : "Config"}
            </span>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
