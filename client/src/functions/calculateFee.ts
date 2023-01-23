import { CalcProps } from "../types/types";

function calculateFee({
  cartValue,
  deliveryDistance,
  numberOfItems,
  deliveryHour,
  deliveryMinute,
  deliveryDate,
}: CalcProps) {
  let deliveryFee = 2;

  if (cartValue < 10) {
    deliveryFee += 10 - cartValue;
  }

  if (numberOfItems > 5) {
    const additionalItems = numberOfItems - 5;
    let additionalFee = additionalItems * 0.5;
    if (numberOfItems > 12) {
      additionalFee += 1.2;
    }
    deliveryFee += additionalFee;
  }

  if (deliveryDistance > 1000) {
    const additionalDistance = deliveryDistance - 1000;
    const additionalFee = Math.ceil(additionalDistance / 500) * 1;
    deliveryFee += additionalFee;
  }

  const dayOfTheWeek = deliveryDate.getDay();
  if (
    dayOfTheWeek === 5 &&
    ((deliveryHour >= 15 && deliveryHour <= 18) ||
      (deliveryHour === 19 && deliveryMinute === 0))
  ) {
    deliveryFee *= 1.2;
  }

  if (deliveryFee > 15) {
    deliveryFee = 15;
  }

  if (cartValue >= 100) {
    deliveryFee = 0;
  }
  return deliveryFee;
}

export default calculateFee;
