import { useState } from "react";
import { motion } from "framer-motion";
import Calculator from "./Calculator";
import bike from "../assets/motorcycle-delivery.svg";
import "./style.css";

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
    <div className="container d-flex justify-content-center">
      <form className="m-3" onSubmit={handleSubmit}>
        <motion.img
          className="bike"
          animate={{
            x: [-100, 100, 0],
          }}
          transition={{ delay: 0.2 }}
          src={bike}
          alt="bike"
        />
        <div className="form-title mt-3">
          <h3>Delivery Fee Calculator</h3>
        </div>
        <div className="form-group row">
          <label className="col-form-label"> Cart value </label>
          <input
            className="form-control"
            type="number"
            step={0.01}
            placeholder=""
            min={0}
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
            min={0}
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
            min={0}
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
            min={new Date().toISOString().split("T")[0]}
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
          <motion.button
            whileHover={{ scale: 1.05, transition: { duration: 0.5 } }}
            className="btn"
            type="submit"
          >
            Calculate
          </motion.button>
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
