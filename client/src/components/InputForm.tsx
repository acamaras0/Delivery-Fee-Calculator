import { useState } from "react";
import Calculator from "./Calculator";
import bike from "../assets/motorcycle-delivery.svg";

const InputForm = () => {
  const [cartValue, setCartValue] = useState(0);
  const [deliveryDistance, setDeliveryDistance] = useState(0);
  const [numberOfItems, setNumberOfItems] = useState(0);
  const [deliveryHour, setDeliveryHour] = useState(0);
  const [deliveryMinute, setDeliveryMinute] = useState(0);
  const [deliveryDate, setDeliveryDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setShow(true);
  };

  return (
    <div
      className="container d-flex justify-content-center"
      style={{
        maxWidth: "30rem",
        backgroundColor: "white",
        borderRadius: "8px",
        boxShadow: "10px 10px 30px 0px rgba(0,0,0,0.75)",
      }}
    >
      <form onSubmit={handleSubmit} className="m-3">
        <img
          src={bike}
          alt="bike"
          style={{
            width: "80px",
            marginTop: "-10px",
            filter:
              "invert(59%) sepia(6%) saturate(4291%) hue-rotate(143deg) brightness(99%) contrast(89%)",
          }}
        />
        <div className="form-title mt-3">
          <h2>Delivery Fee Calculator</h2>
        </div>
        <div className="form-group row">
          <label className="col-form-label"> Cart value </label>
          <input
            className="form-control"
            type="number"
            step={0.01}
            placeholder=""
            onChange={(e) => {
              setCartValue(e.target.valueAsNumber);
            }}
            required
          />
        </div>
        <div className="form-group row">
          <label className="col-form-label"> Items </label>
          <input
            className="form-control"
            type="number"
            placeholder=""
            onChange={(e) => {
              setNumberOfItems(e.target.valueAsNumber);
            }}
            required
          />
        </div>
        <div className="form-group row">
          <label className="col-form-label"> Delivery distance </label>
          <input
            className="form-control"
            type="number"
            placeholder=""
            onChange={(e) => {
              setDeliveryDistance(e.target.valueAsNumber);
            }}
            required
          />
        </div>
        <div className="form-group row">
          <label className="col-form-label"> Delivery time </label>
          <input
            className="form-control"
            type="datetime-local"
            onChange={(e: any) => {
              const date = new Date(e.target.value).toISOString();
              const datetime = date.split("T");
              const datestamp = new Date(datetime[0]);
              const hour = datetime[1].split(":")[0];
              const minute = datetime[1].split(":")[1];
              setDeliveryHour(Number(hour));
              setDeliveryMinute(Number(minute));
              setDeliveryDate(datestamp);
            }}
            required
          />
        </div>
        <div className="form-group row">
          <button className="btn btn-info" type="submit">
            Calculate
          </button>
        </div>
        <div>
          {show === true ? (
            <Calculator
              cartValue={cartValue}
              deliveryDistance={deliveryDistance}
              numberOfItems={numberOfItems}
              deliveryHour={deliveryHour}
              deliveryMinute={deliveryMinute}
              deliveryDate={deliveryDate}
            />
          ) : null}
        </div>
      </form>
    </div>
  );
};

export default InputForm;
