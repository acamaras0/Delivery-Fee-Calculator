import logo from "../assets/wolt-logo.svg";
import "./style.css";

const Logo = () => {
  return (
    <div>
      <img src={logo} alt="logo" className="wolt-logo" />
    </div>
  );
};

export default Logo;
