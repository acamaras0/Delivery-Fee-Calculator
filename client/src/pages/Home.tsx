import { useState } from "react";
import calculateFee from "../functions/calculateFee";
import Header from "../components/Header";
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

  const updateCartValue = (value: number) => setCartValue(value);
  const updateDeliveryDistance = (value: number) => setDeliveryDistance(value);
  const updateNumberOfItems = (value: number) => setNumberOfItems(value);
  const updateDeliveryHour = (value: number) => setDeliveryHour(value);
  const updateDeliveryMinute = (value: number) => setDeliveryMinute(value);
  const updateDeliveryDate = (value: Date) => setDeliveryDate(value);
  const updateShow = (value: boolean) => setShow(value);

  const fee = calculateFee({
    cartValue,
    deliveryDistance,
    numberOfItems,
    deliveryHour,
    deliveryMinute,
    deliveryDate,
  });

  return (
    <>
      <div className="container d-flex justify-content-center">
        <div>
          {show === false ? (
            <>
              <Header />
              <InputForm
                setCartValue={updateCartValue}
                setDeliveryDate={updateDeliveryDate}
                setDeliveryDistance={updateDeliveryDistance}
                setDeliveryHour={updateDeliveryHour}
                setDeliveryMinute={updateDeliveryMinute}
                setNumberOfItems={updateNumberOfItems}
                setShow={updateShow}
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
