export type CalcProps = {
  cartValue: number;
  deliveryDistance: number;
  numberOfItems: number;
  deliveryHour: number;
  deliveryMinute: number;
  deliveryDate: Date;
};

export type InputProps = {
  setCartValue: (value: number) => void;
  setDeliveryDate: (value: Date) => void;
  setDeliveryDistance: (value: number) => void;
  setDeliveryHour: (value: number) => void;
  setDeliveryMinute: (value: number) => void;
  setNumberOfItems: (value: number) => void;
  setDeliveryFeeIsVisible: (value: boolean) => void;
};

export type ResultProps = {
  deliveryFee: number;
};
