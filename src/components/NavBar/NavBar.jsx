import CartWidget from "./CartWidget"
import { BsBox } from "react-icons/bs";
import { Link } from "react-router-dom";
import { BsPcDisplayHorizontal } from "react-icons/bs";

import "./navbar.css"

const NavBar = () => {


  return (
    <nav className="navbar">

<Link to="/" className="brand primary-font-color">
      <BsPcDisplayHorizontal className="icon-brand"/>
     
        <p className="title-brand ">Ecommerce-electronic</p>
      </Link>


      <ul className="categories">
        <li className="category">
          <Link to="/category/remeras" className="lista" >Pcs</Link>
        </li>
        <li className="category">
          <Link to="/category/pantalones" className="lista">Laptop</Link>
        </li>
        <li className="category">
          <Link to="/category/zapatillas" className="lista">Artículos</Link>
        </li>
      </ul>

      
      <CartWidget />
    </nav>
  )
}
export default NavBar