// Componente ListaItens.js
import { Cog, Users } from "lucide-react";

const OpcoesAdm = ({
  collapsed,
  adminCollapsed,
  programasCollapsed,
  onToggleAdmin,
  onToggleProgramas,
}: any) => {
  return (
    <ul>
      <li
        className={`py-5 px-5 text-center ${
          !collapsed && adminCollapsed ? "bg-cyan-700" : "hover:bg-gray-700"
        } cursor-pointer flex items-center flex-col`}
        onClick={onToggleAdmin}
      >
        <span className="mr-2">
          {collapsed ? <Cog size={20} /> : "Administração"}
        </span>
      </li>
      {!collapsed && adminCollapsed && (
        <ul>
          <li
            className={`pl-8 py-2 px-3 text-center ${
              !programasCollapsed ? "bg-emerald-500" : "hover:bg-gray-700"
            } cursor-pointer flex items-center`}
            onClick={onToggleProgramas}
          >
            <Users size={16} className="mr-2" />
            Programas
          </li>
          {!programasCollapsed && (
            <ul>
              <li className="pl-16 py-2 px-3 text-center hover:bg-emerald-700 cursor-pointer flex items-center">
                Cadastrar
              </li>
              <li className="pl-16 py-2 px-3 text-center hover:bg-emerald-700 cursor-pointer flex items-center">
                Listar
              </li>
            </ul>
          )}
        </ul>
      )}
    </ul>
  );
};

export default OpcoesAdm;
