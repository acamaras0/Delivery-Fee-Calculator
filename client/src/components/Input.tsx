import { motion } from "framer-motion";
import { InputProps } from "../types/types";
import bike from "../assets/motorcycle-delivery.svg";
import "./style.css";

const Input = ({
  setCartValue,
  setDeliveryDate,
  setDeliveryDistance,
  setDeliveryHour,
  setDeliveryMinute,
  setNumberOfItems,
  setShow,
}: InputProps) => {
  
  const now = new Date()
    .toISOString()
    .slice(0, new Date().toISOString().lastIndexOf(":"));

  return (
    <form className="m-5" onSubmit={() => setShow(true)}>
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
        <label className="col-form-label"> Cart value (€)</label>
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
        <label className="col-form-label"> Delivery distance (m)</label>
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
          min={now}
          value={now}
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
          className="btn-calculate"
          type="submit"
        >
          Calculate
        </motion.button>
      </div>
    </form>
  );
};

export default Input;
