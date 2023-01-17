interface CalcProps {
  cartValue: number;
  deliveryDistance: number;
  numberOfItems: number;
  deliveryTime: number;
  deliveryDate: Date;
}

const Calculator = ({
  cartValue,
  deliveryDistance,
  numberOfItems,
  deliveryTime,
  deliveryDate,
}: CalcProps) => {
  let deliveryFee = 0;

  // Small order surcharge
  if (cartValue < 10) {
    deliveryFee += 10 - cartValue;
  }

  // Delivery distance fee
  deliveryFee += 2; // base fee
  if (deliveryDistance > 1000) {
    const additionalDistance = deliveryDistance - 1000;
    const additionalFee = Math.ceil(additionalDistance / 500) * 1;
    deliveryFee += additionalFee;
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

  // Friday rush fee
  const dayOfTheWeek = deliveryDate.getDay();
  if (deliveryTime >= 15 && deliveryTime <= 19 && dayOfTheWeek === 5) {
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
    <div style={{ color: "#24ccff" }}>
      <p>Total: </p>
      <p>{deliveryFee.toFixed(2)}€</p>
    </div>
  );
};

export default Calculator;
