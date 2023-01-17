import { useState } from "react";
import Calculator from "./Calculator";

const InputForm = () => {
  const [cartValue, setCartValue] = useState(0);
  const [deliveryDistance, setDeliveryDistance] = useState(0);
  const [numberOfItems, setNumberOfItems] = useState(0);
  const [deliveryTime, setDeliveryTime] = useState(0);
  const [deliveryDate, setDeliveryDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setShow(true);
  };

  return (
    <form className="input-form" onSubmit={handleSubmit}>
      <div className="input-form__title">
        <h2>Delivery Fee Calculator</h2>
      </div>
      <div className="input-form__input">
        <label>Cart value</label>
        <input
          type="number"
          placeholder=""
          onChange={(e) => {
            setCartValue(e.target.valueAsNumber);
          }}
          required
        />
      </div>
      <div className="input-form__input">
        <label>Delivery distance</label>
        <input
          type="number"
          placeholder=""
          onChange={(e) => {
            setDeliveryDistance(e.target.valueAsNumber);
          }}
          required
        />
      </div>
      <div className="input-form__input">
        <label>Items</label>
        <input
          type="number"
          placeholder=""
          onChange={(e) => {
            setNumberOfItems(e.target.valueAsNumber);
          }}
          required
        />
      </div>
      <div className="input-form__input">
        <label>Delivery time</label>
        <input
          type="datetime-local"
          onChange={(e: any) => {
            const datetime = e.target.value.split("T");
            const datestamp = new Date(datetime[0]);
            const timestamp = datetime[1].split(":")[0];
            setDeliveryTime(Number(timestamp));
            setDeliveryDate(datestamp);
          }}
          required
        />
      </div>
      <div className="input-form__input">
        <button>Calculate</button>
      </div>
      <div>
        <p>Delivery Fee</p>
        {show === true ? (
          <Calculator
            cartValue={cartValue}
            deliveryDistance={deliveryDistance}
            numberOfItems={numberOfItems}
            deliveryTime={deliveryTime}
            deliveryDate={deliveryDate}
          />
        ) : null}
      </div>
    </form>
  );
};

export default InputForm;
