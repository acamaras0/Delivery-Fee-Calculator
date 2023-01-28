import { useState } from "react";
import calculateFee from "../utils/calculateFee";
import Header from "../components/Header/Header";
import InputForm from "../components/InputForm/InputForm";
import DeliveryFee from "../components/DeliveryFee/DeliveryFee";
import Footer from "../components/Footer";
import Logo from "../components/Logo/Logo";

const Home = () => {
  const [cartValue, setCartValue] = useState<number>(0);
  const [deliveryDistance, setDeliveryDistance] = useState<number>(0);
  const [numberOfItems, setNumberOfItems] = useState<number>(0);
  const [deliveryHour, setDeliveryHour] = useState<number>(0);
  const [deliveryMinute, setDeliveryMinute] = useState<number>(0);
  const [deliveryDate, setDeliveryDate] = useState<Date>(new Date());
  const [deliveryFeeIsVisible, setDeliveryFeeIsVisible] =
    useState<boolean>(false);

  const updateCartValue = (value: number) => setCartValue(value);
  const updateDeliveryDistance = (value: number) => setDeliveryDistance(value);
  const updateNumberOfItems = (value: number) => setNumberOfItems(value);
  const updateDeliveryHour = (value: number) => setDeliveryHour(value);
  const updateDeliveryMinute = (value: number) => setDeliveryMinute(value);
  const updateDeliveryDate = (value: Date) => setDeliveryDate(value);
  const updateVisibility = (value: boolean) => setDeliveryFeeIsVisible(value);

  const fee: number = calculateFee({
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
          {deliveryFeeIsVisible === false ? (
            <>
              <Header />
              <InputForm
                setCartValue={updateCartValue}
                setDeliveryDate={updateDeliveryDate}
                setDeliveryDistance={updateDeliveryDistance}
                setDeliveryHour={updateDeliveryHour}
                setDeliveryMinute={updateDeliveryMinute}
                setNumberOfItems={updateNumberOfItems}
                setDeliveryFeeIsVisible={updateVisibility}
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
