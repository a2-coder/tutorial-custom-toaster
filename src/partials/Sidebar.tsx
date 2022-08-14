import { cloneElement, useCallback } from "react";
import { NavLink } from "react-router-dom";
import { RiHome3Line, RiProfileLine } from "react-icons/ri";

const Sidebar = () => {
  return (
    <div className="flex-none w-64 bg-slate-100 border-r border-slate-300 p-4 space-y-4">
      <SidebarItem icon={<RiHome3Line />} title="Home" path="/" />
      <SidebarItem icon={<RiProfileLine />} title="Articles" path="/articles" />
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*                                SIDEBAR ITEM                                */
/* -------------------------------------------------------------------------- */
interface ISidebarItemProps {
  title: string;
  path: string;
  icon: React.ReactElement;
  isActive?: boolean;
}

const SidebarItem = ({ title, path, icon, isActive = false }: ISidebarItemProps) => {

  const getClasses = useCallback((isActive: boolean) => {
    const common = "block w-full p-3 rounded flex items-center space-x-3";
    const active = "bg-blue-500 bg-opacity-25";
    const inactive = "bg-transparent hover:bg-slate-200";
    return [common, isActive ? active : inactive].join(" ");
  }, []);

  return (
    <NavLink className={({ isActive }) => getClasses(isActive)} to={path} end>
      {
        ({ isActive }) => (
          <>
            <div className={isActive ? 'text-blue-500' : 'text-slate-400'}>
              {cloneElement(icon, { className: 'w-6 h-6' })}
            </div>
            <div className="font-semibold text-lg text-slate-700">
              {title}
            </div>
          </>
        )
      }
    </NavLink>
  )
}

export default Sidebar