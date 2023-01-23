import { CalcProps } from "../types/types";
import {
  MIN_CART_VALUE,
  MAX_DELIVERY_FEE,
  FRIDAY_RUSH_START_HOUR,
  FRIDAY_RUSH_END_HOUR,
  FRIDAY_RUSH_END_MINUTE,
  FREE_DELIVERY,
  MIN_NUMBER_OF_ITEMS,
  MAX_NUMBER_OF_ITEMS,
  MAX_DISTANCE,
} from "../constants/constants";

function calculateFee({
  cartValue,
  deliveryDistance,
  numberOfItems,
  deliveryHour,
  deliveryMinute,
  deliveryDate,
}: CalcProps): number {
  let deliveryFee: number = 2;

  if (cartValue < MIN_CART_VALUE) {
    deliveryFee += 10 - cartValue;
  }

  if (numberOfItems > MIN_NUMBER_OF_ITEMS) {
    const additionalItems: number = numberOfItems - 5;
    let additionalFee: number = additionalItems * 0.5;
    if (numberOfItems > MAX_NUMBER_OF_ITEMS) {
      additionalFee += 1.2;
    }
    deliveryFee += additionalFee;
  }

  if (deliveryDistance > MAX_DISTANCE) {
    const additionalDistance: number = deliveryDistance - 1000;
    const additionalFee: number = Math.ceil(additionalDistance / 500);
    deliveryFee += additionalFee;
  }

  const fridayRush: boolean = deliveryDate.getDay() === 5;
  if (
    fridayRush &&
    ((deliveryHour >= FRIDAY_RUSH_START_HOUR &&
      deliveryHour <= FRIDAY_RUSH_END_HOUR) ||
      (deliveryHour === FRIDAY_RUSH_END_HOUR + 1 &&
        deliveryMinute === FRIDAY_RUSH_END_MINUTE))
  ) {
    deliveryFee *= 1.2;
  }

  if (deliveryFee > MAX_DELIVERY_FEE) {
    deliveryFee = 15;
  }

  if (cartValue >= FREE_DELIVERY) {
    deliveryFee = 0;
  }
  return deliveryFee;
}

export default calculateFee;
