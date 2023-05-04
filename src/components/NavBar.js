import "./NavBar.css";
//Images
import Logo from "../assets/GREENMIND.svg";
import Linha from "../assets/Line 1.svg";

const Navbar = () => {
  return (
    <nav id="menu">
      <img src={Logo} alt="logo" id="img" />
      <div id="menuBox1">
        <a href="1" className="links">
          Home
        </a>
        <a href="1" className="links">
          Products
        </a>
        <a href="1" className="links">
          Contacts
        </a>
      </div>

      <div id="menuBox2">
        <button className="button">
          <span className="material-symbols-outlined">shopping_cart</span>
        </button>
        <button className="button">
          <span className="material-symbols-outlined">person</span>
        </button>
        <img src={Linha} alt="" />
        <button className="button">
          <span className="material-symbols-outlined" id="virar">
            sort
          </span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
