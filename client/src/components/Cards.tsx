import { useState } from "react";
import Input from "./Input";
import DeliveryFee from "./DeliveryFee";
import "./style.css";

const Cards = () => {
  const [cartValue, setCartValue] = useState(0);
  const [deliveryDistance, setDeliveryDistance] = useState(0);
  const [numberOfItems, setNumberOfItems] = useState(0);
  const [deliveryHour, setDeliveryHour] = useState(0);
  const [deliveryMinute, setDeliveryMinute] = useState(0);
  const [deliveryDate, setDeliveryDate] = useState(new Date());
  const [show, setShow] = useState(false);

  return (
    <div className="container d-flex justify-content-center">
      <div>
        {show === false ? (
          <Input
            setCartValue={setCartValue}
            setDeliveryDate={setDeliveryDate}
            setDeliveryDistance={setDeliveryDistance}
            setDeliveryHour={setDeliveryHour}
            setDeliveryMinute={setDeliveryMinute}
            setNumberOfItems={setNumberOfItems}
            setShow={setShow}
          />
        ) : (
          <DeliveryFee
            cartValue={cartValue}
            deliveryDistance={deliveryDistance}
            numberOfItems={numberOfItems}
            deliveryHour={deliveryHour}
            deliveryMinute={deliveryMinute}
            deliveryDate={deliveryDate}
          />
        )}
      </div>
    </div>
  );
};

export default Cards;
