import { NavLink } from "react-router-dom"

function MenuInferior() {
  const claseEnlace = ({ isActive }) =>
    isActive
      ? "menu-enlace activo"
      : "menu-enlace"

  return (
    <nav
      className="menu-inferior"
      aria-label="Navegación principal"
    >
      <NavLink
        to="/"
        end
        className={claseEnlace}
      >
        Inicio
      </NavLink>

      <NavLink
        to="/tiendas"
        className={claseEnlace}
      >
        Nuestras tiendas
      </NavLink>

      <NavLink
        to="/contacto"
        className={claseEnlace}
      >
        Contáctanos
      </NavLink>
    </nav>
  )
}

export default MenuInferior