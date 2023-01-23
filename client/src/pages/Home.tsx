import { useState } from "react";
import CalculateFee from "../functions/CalculateFee";
import Header from "../components/Header";
import Logo from "../components/Logo";
import InputForm from "../components/InputForm";
import DeliveryFee from "../components/DeliveryFee";
import Footer from "../components/Footer";

const Home = () => {
	const [cartValue, setCartValue] = useState(0);
	const [deliveryDistance, setDeliveryDistance] = useState(0);
	const [numberOfItems, setNumberOfItems] = useState(0);
	const [deliveryHour, setDeliveryHour] = useState(0);
	const [deliveryMinute, setDeliveryMinute] = useState(0);
	const [deliveryDate, setDeliveryDate] = useState(new Date());
	const [show, setShow] = useState(false);

	const UpdateCartValue = (value: number) => {
		setCartValue(value);
	};
	const UpdateDeliveryDistance = (value: number) => {
		setDeliveryDistance(value);
	};
	const UpdateNumberOfItems = (value: number) => {
		setNumberOfItems(value);
	};
	const UpdateDeliveryHour = (value: number) => {
		setDeliveryHour(value);
	};
	const UpdateDeliveryMinute = (value: number) => {
		setDeliveryMinute(value);
	};
	const UpdateDeliveryDate = (value: Date) => {
		setDeliveryDate(value);
	};
	const UpdateShow = (value: boolean) => {
		setShow(value);
	};

	const fee = CalculateFee({
		cartValue,
		deliveryDistance,
		numberOfItems,
		deliveryHour,
		deliveryMinute,
		deliveryDate,
	});

	return (
		<>
			<Logo />
			<div className="container d-flex justify-content-center">
				<div>
					{show === false ? (
						<>
							<Header />
							<InputForm
								setCartValue={UpdateCartValue}
								setDeliveryDate={UpdateDeliveryDate}
								setDeliveryDistance={UpdateDeliveryDistance}
								setDeliveryHour={UpdateDeliveryHour}
								setDeliveryMinute={UpdateDeliveryMinute}
								setNumberOfItems={UpdateNumberOfItems}
								setShow={UpdateShow}
							/>
						</>
					) : (
						<DeliveryFee deliveryFee={fee} />
					)}
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Home;
