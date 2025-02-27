import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Inicio</Link>
      <Link to="/category/hombre">Hombre</Link>
      <Link to="/category/mujer">Mujer</Link>
      <Link to="/category/unisex">Unisex</Link>
    </nav>
  );
};

export default Navbar;