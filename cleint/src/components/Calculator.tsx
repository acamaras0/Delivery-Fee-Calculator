import React from 'react';

interface Props {
  cartValue: number;
  deliveryDistance: number;
  numberOfItems: number;
  deliveryTime: Date;
}

const Calculator: React.FC<Props> = ({ cartValue, deliveryDistance, numberOfItems, deliveryTime }) => {
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
  const deliveryHour = deliveryTime.getUTCHours();
  if (deliveryHour >= 15 && deliveryHour <= 19) {
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

  return <div>{deliveryFee.toFixed(2)}€</div>;
}

export default Calculator;
