import React, { useState } from "react";
import Calculator from "./Calculator";

const InputForm = () => {
  const [cartValue, setCartValue] = useState(0);
  const [deliveryDistance, setDeliveryDistance] = useState(0);
  const [numberOfItems, setNumberOfItems] = useState(0);
  const [deliveryTime, setDeliveryTime] = useState(new Date());

  return (
    <div className="input-form">
      <div className="input-form__title">
        <h2>Delivery Fee Calculator</h2>
      </div>
      <div className="input-form__input">
        <label>Cart value</label>
        <input
          type="number"
          onChange={(e) => {
            setCartValue(e.target.valueAsNumber);
          }}
        />
      </div>
      <div className="input-form__input">
        <label>Delivery distance</label>
        <input
          type="number"
          onChange={(e) => {
            setDeliveryDistance(e.target.valueAsNumber);
          }}
        />
      </div>
      <div className="input-form__input">
        <label>Items</label>
        <input
          type="number"
          onChange={(e) => {
            setNumberOfItems(e.target.valueAsNumber);
          }}
        />
      </div>
      <div className="input-form__input">
        <label>Delivery time</label>
        <input
          type="date"
          onChange={(e: any) => {
            setDeliveryTime(e.target.valueAsDate);
          }}
        />
      </div>
      <div className="input-form__input">
        <button>Calculate</button>
      </div>
      <div>
        <p>Delivery Fee:</p>
        <Calculator
          cartValue={cartValue}
          deliveryDistance={deliveryDistance}
          numberOfItems={numberOfItems}
          deliveryTime={deliveryTime}
        />
      </div>
    </div>
  );
};

export default InputForm;
