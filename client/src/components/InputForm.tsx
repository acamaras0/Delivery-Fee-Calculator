import { motion } from "framer-motion";
import { useState } from "react";
import { InputProps } from "../types/types";
import "./style.css";

const InputForm = ({
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

	const [defaultDate, setDefaultDate] = useState(now);

	const input = [
		{
			label: "Cart value (€)",
			type: "number",
			step: 0.01,
			min: 0,
			onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
				setCartValue(e.target.valueAsNumber);
			},
		},
		{
			label: "Items",
			type: "number",
			min: 0,
			onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
				setNumberOfItems(e.target.valueAsNumber);
			},
		},
		{
			label: "Delivery distance (m)",
			type: "number",
			min: 0,
			onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
				setDeliveryDistance(e.target.valueAsNumber);
			},
		},
		{
			label: "Delivery date and time (UTC)",
			type: "datetime-local",
			min: now,
			value: defaultDate,
			onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
				setDefaultDate(e.target.value);
				const datetime = e.target.value.split("T");
				const datestamp = new Date(datetime[0]);
				const hour = datetime[1].split(":")[0];
				const minute = datetime[1].split(":")[1];
				setDeliveryHour(Number(hour));
				setDeliveryMinute(Number(minute));
				setDeliveryDate(datestamp);
			},
		},
	];

	return (
		<>
			<form className="m-5" onSubmit={() => setShow(true)}>
				{input?.map((item, index) => {
					return (
						<div className="form-group row" key={index}>
							<label className="col-form-label">
								{item.label}
							</label>
							<input
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
				>
					Calculate
				</motion.button>
			</form>
		</>
	);
};

export default InputForm;
