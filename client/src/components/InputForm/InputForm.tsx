import { useState, useEffect, useRef } from "react";
import { InputProps } from "../../types/types";
import { handleChange, handleDateChange } from "../../functions/utils";
import { motion } from "framer-motion";
import "./InputForm.css";

const InputForm = ({
  setCartValue,
  setDeliveryDate,
  setDeliveryDistance,
  setDeliveryHour,
  setDeliveryMinute,
  setNumberOfItems,
  setShow,
}: InputProps) => {
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (formRef.current) {
      formRef.current.addEventListener("submit", (event) => {
        event.preventDefault();
        setShow(true);
      });
    }
  }, [setShow]);

  const now: string = new Date()
    .toISOString()
    .slice(0, new Date().toISOString().lastIndexOf(":"));

  const [defaultDate, setDefaultDate] = useState<string>(now);

  const inputs: Array<{
    label: string;
    type: string;
    step?: number;
    min: number | string;
    value?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  }> = [
    {
      label: "Cart value (€)",
      type: "number",
      step: 0.01,
      min: 0,
      onChange: handleChange(setCartValue),
    },
    {
      label: "Items",
      type: "number",
      min: 0,
      onChange: handleChange(setNumberOfItems),
    },
    {
      label: "Delivery distance (m)",
      type: "number",
      min: 0,
      onChange: handleChange(setDeliveryDistance),
    },
    {
      label: "Delivery date and time (UTC)",
      type: "datetime-local",
      min: now,
      value: defaultDate,
      onChange: handleDateChange(
        setDeliveryHour,
        setDeliveryMinute,
        setDeliveryDate,
        setDefaultDate
      ),
    },
  ];

  return (
    <>
      <form ref={formRef} className="m-5">
        {inputs?.map((item, index) => {
          return (
            <div className="form-group row" key={index}>
              <label htmlFor={item.label} className="col-form-label">
                {item.label}
              </label>
              <input
                id="input"
                role={item.label}
                className="form-control font-weight-bold"
                type={item.type}
                step={item.step}
                placeholder=""
                min={item.min}
                value={item.value}
                onChange={item.onChange}
                required
              />
            </div>
          );
        })}
        <motion.button
          whileHover={{ scale: 1.05, transition: { duration: 0.5 } }}
          className="btn-calculate"
          type="submit"
          data-testid="btn-submit"
        >
          CALCULATE
        </motion.button>
      </form>
    </>
  );
};

export default InputForm;
