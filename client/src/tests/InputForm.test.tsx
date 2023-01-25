import { render, fireEvent, getAllByTestId } from "@testing-library/react";
import InputForm from "../components/InputForm/InputForm";

describe("InputForm", () => {
  const setCartValue = jest.fn();
  const setNumberOfItems = jest.fn();
  const setDeliveryDistance = jest.fn();
  const setDeliveryHour = jest.fn();
  const setDeliveryMinute = jest.fn();
  const setDeliveryDate = jest.fn();
  const setShow = jest.fn();
  it("should render a button with the test id 'btn-submit'", () => {
    const { getByTestId } = render(
      <InputForm
        setCartValue={setCartValue}
        setNumberOfItems={setNumberOfItems}
        setDeliveryDistance={setDeliveryDistance}
        setDeliveryHour={setDeliveryHour}
        setDeliveryMinute={setDeliveryMinute}
        setDeliveryDate={setDeliveryDate}
        setShow={setShow}
      />
    );
    const btn = getByTestId("btn-submit");
    expect(btn).toBeInTheDocument();
  });

  it("should render 4 input fields", () => {
    const { getAllByTestId } = render(
      <InputForm
        setCartValue={setCartValue}
        setNumberOfItems={setNumberOfItems}
        setDeliveryDistance={setDeliveryDistance}
        setDeliveryHour={setDeliveryHour}
        setDeliveryMinute={setDeliveryMinute}
        setDeliveryDate={setDeliveryDate}
        setShow={setShow}
      />
    );
    const inputs = getAllByTestId("input");
    expect(inputs.length).toBe(4);
  });

  it("should update the values when input is changed", () => {
    const { getAllByTestId } = render(
      <InputForm
        setCartValue={setCartValue}
        setNumberOfItems={setNumberOfItems}
        setDeliveryDistance={setDeliveryDistance}
        setDeliveryHour={setDeliveryHour}
        setDeliveryMinute={setDeliveryMinute}
        setDeliveryDate={setDeliveryDate}
        setShow={setShow}
      />
    );
    const inputs = getAllByTestId("input");
    fireEvent.change(inputs[0], { target: { value: "10" } });
    fireEvent.change(inputs[1], { target: { value: "5" } });
    fireEvent.change(inputs[2], { target: { value: "100" } });
    fireEvent.change(inputs[3], { target: { value: "2021-05-01T12:00" } });
    fireEvent.change(inputs[3], { target: { value: "2021-05-01T12:00" } });
    fireEvent.change(inputs[3], { target: { value: "2021-05-01T12:00" } });

    expect(setCartValue).toHaveBeenCalledWith(10);
    expect(setNumberOfItems).toHaveBeenCalledWith(5);
    expect(setDeliveryDistance).toHaveBeenCalledWith(100);
    expect(setDeliveryHour).toHaveBeenCalledWith(12);
    expect(setDeliveryMinute).toHaveBeenCalledWith(0);
    expect(setDeliveryDate).toHaveBeenCalledWith(
      new Date("2021-05-01T00:00:00.000Z")
    );
  });

  it("should call setShow when the form is submitted", () => {
    const { getByTestId } = render(
      <InputForm
        setCartValue={setCartValue}
        setNumberOfItems={setNumberOfItems}
        setDeliveryDistance={setDeliveryDistance}
        setDeliveryHour={setDeliveryHour}
        setDeliveryMinute={setDeliveryMinute}
        setDeliveryDate={setDeliveryDate}
        setShow={setShow}
      />
    );
    const form = getByTestId("form");
    fireEvent.submit(form);
    expect(setShow).toHaveBeenCalled();
  });
});
