import { ResultProps } from "../../types/types";
import { motion } from "framer-motion";
import { BsStars } from "react-icons/bs";
import returnIcon from "../../assets/return.svg";
import "./DeliveryFee.css";

const DeliveryFee = ({ deliveryFee }: ResultProps) => {
  return (
    <div className="m-5">
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{ delay: 0.2 }}
        className="calculator"
      >
        <p>
          Delivery fee <BsStars color="#FAD02C" />
        </p>
        <p className="sum">{deliveryFee.toFixed(2)} €</p>
      </motion.div>
      <a href="/">
        <motion.button
          whileHover={{ scale: 1.05, transition: { duration: 0.5 } }}
          className="btn-return"
          type="reset"
          data-testid="btn-return"
        >
          <img className="return" src={returnIcon} alt="return" />
        </motion.button>
      </a>
    </div>
  );
};

export default DeliveryFee;
