import { motion } from "framer-motion";
import bike from "../assets/motorcycle-delivery.svg";
import logo from "../assets/wolt-logo.svg";
import "./style.css";

const Header = () => {
  return (
    <>
      <motion.img
        className="bike-logo"
        animate={{
          x: [-100, 100, 0],
        }}
        transition={{ delay: 0.2 }}
        src={bike}
        alt="bike"
      />
      <div className="form-title mt-3 mb-3">
        <h3>Delivery Fee Calculator</h3>
      </div>
    </>
  );
};

export default Header;
