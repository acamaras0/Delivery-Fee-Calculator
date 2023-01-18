import { motion } from "framer-motion";
import "./style.css";

interface CalcProps {
  cartValue: number;
  deliveryDistance: number;
  numberOfItems: number;
  deliveryHour: number;
  deliveryMinute: number;
  deliveryDate: Date;
}

const Calculator = ({
  cartValue,
  deliveryDistance,
  numberOfItems,
  deliveryHour,
  deliveryMinute,
  deliveryDate,
}: CalcProps) => {
  let deliveryFee = 0;

  // Small order surcharge
  if (cartValue < 10) {
    deliveryFee += 10 - cartValue;
  }

  // Number of items fee
  if (numberOfItems > 5) {
    const additionalItems = numberOfItems - 5;
    let additionalFee = additionalItems * 0.5;
    if (numberOfItems > 12) {
      additionalFee += 1.2;
    }
    deliveryFee += additionalFee;
  }

  // Delivery distance fee
  deliveryFee += 2; // base fee
  if (deliveryDistance > 1000) {
    const additionalDistance = deliveryDistance - 1000;
    const additionalFee = Math.ceil(additionalDistance / 500) * 1;
    deliveryFee += additionalFee;
  }

  // Friday rush fee
  const dayOfTheWeek = deliveryDate.getDay();
  if (
    dayOfTheWeek === 5 &&
    ((deliveryHour >= 15 && deliveryHour <= 18) ||
      (deliveryHour === 19 && deliveryMinute === 0))
  ) {
    deliveryFee *= 1.2;
  }

  // Maximum fee
  if (deliveryFee > 15) {
    deliveryFee = 15;
  }

  // Free delivery
  if (cartValue >= 100) {
    deliveryFee = 0;
  }

  return (
    <motion.div
      animate={{
        scale: [1, 1.2, 1],
      }}
      transition={{ delay: 0.2 }}
      className="calculator"
    >
      <p>Delivery fee✨</p>
      <p className="sum">{deliveryFee.toFixed(2)} €</p>
    </motion.div>
  );
};

export default Calculator;
