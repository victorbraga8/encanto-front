// Componente ListaItens.js
import { Cog, Users, FileText } from "lucide-react";
import Link from "next/link";

const OpcoesAdm = ({
  collapsed,
  adminCollapsed,
  programasCollapsed,
  clientesCollapsed,
  documentosCollapsed,
  experienciasCollapsed,
  onToggleAdmin,
  onToggleProgramas,
  onToggleClientes,
  onToggleDocumentos,
  onToggleExperiencias,
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
        <>
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
                <Link href="/programa/novo">
                  <li className="pl-16 py-2 px-3 text-center hover:bg-emerald-700 cursor-pointer flex items-center">
                    Cadastrar
                  </li>
                </Link>
                <Link href="/programa/lista">
                  <li className="pl-16 py-2 px-3 text-center hover:bg-emerald-700 cursor-pointer flex items-center">
                    Listar
                  </li>
                </Link>
              </ul>
            )}
          </ul>
          <ul>
            <li
              className={`pl-8 py-2 px-3 text-center ${
                !clientesCollapsed ? "bg-emerald-500" : "hover:bg-gray-700"
              } cursor-pointer flex items-center`}
              onClick={onToggleClientes}
            >
              <Users size={16} className="mr-2" />
              Clientes
            </li>
            {!clientesCollapsed && (
              <ul>
                <Link href="/cliente/novo">
                  <li className="pl-16 py-2 px-3 text-center hover:bg-emerald-700 cursor-pointer flex items-center">
                    Cadastrar
                  </li>
                </Link>
                <Link href="/cliente/lista">
                  <li className="pl-16 py-2 px-3 text-center hover:bg-emerald-700 cursor-pointer flex items-center">
                    Listar
                  </li>
                </Link>
              </ul>
            )}
          </ul>
          <ul>
            <li
              className={`pl-8 py-2 px-3 text-center ${
                !documentosCollapsed ? "bg-emerald-500" : "hover:bg-gray-700"
              } cursor-pointer flex items-center`}
              onClick={onToggleDocumentos}
            >
              <Users size={16} className="mr-2" />
              Documentos
            </li>
            {!documentosCollapsed && (
              <ul>
                <Link href="/documento/novo">
                  <li className="pl-16 py-2 px-3 text-center hover:bg-emerald-700 cursor-pointer flex items-center">
                    Cadastrar
                  </li>
                </Link>
                <Link href="/documento/lista">
                  <li className="pl-16 py-2 px-3 text-center hover:bg-emerald-700 cursor-pointer flex items-center">
                    Listar
                  </li>
                </Link>
              </ul>
            )}
          </ul>
          <ul>
            <li
              className={`pl-8 py-2 px-3 text-center ${
                !experienciasCollapsed ? "bg-emerald-500" : "hover:bg-gray-700"
              } cursor-pointer flex items-center`}
              onClick={onToggleExperiencias}
            >
              <FileText size={16} className="mr-2" />
              Experiências
            </li>
            {!experienciasCollapsed && (
              <ul>
                <Link href="/experiencia/novo">
                  <li className="pl-16 py-2 px-3 text-center hover:bg-emerald-700 cursor-pointer flex items-center">
                    Cadastrar
                  </li>
                </Link>
                <Link href="/experiencia/lista">
                  <li className="pl-16 py-2 px-3 text-center hover:bg-emerald-700 cursor-pointer flex items-center">
                    Listar
                  </li>
                </Link>
              </ul>
            )}
          </ul>
        </>
      )}
    </ul>
  );
};

export default OpcoesAdm;
