import logo from "../../assets/wolt-logo.svg";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="mb-4">
      <img src={logo} className="wolt-logo" alt="logo" />
    </nav>
  );
};

export default Navbar;
