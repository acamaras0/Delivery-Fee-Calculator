import { render, fireEvent } from "@testing-library/react";
import InputForm from "../components/InputForm/InputForm";
import { InputProps } from "../types/types";

function renderInputForm(props: Partial<InputProps> = {}) {
  const Props: InputProps = {
    setCartValue() {
      return;
    },
    setNumberOfItems() {
      return;
    },
    setDeliveryDistance() {
      return;
    },
    setDeliveryHour() {
      return;
    },
    setDeliveryMinute() {
      return;
    },
    setDeliveryDate() {
      return;
    },
    setDeliveryFeeIsVisible() {
      return;
    },
  };
  return render(<InputForm {...Props} {...props} />);
}

describe("InputForm", () => {
  it("should render a form with the test id 'form'", () => {
    const { getByTestId } = renderInputForm();
    const form = getByTestId("form");
    expect(form).toBeInTheDocument();
  });

  it("should render 4 input fields", () => {
    const { getAllByTestId } = renderInputForm();
    const inputs = getAllByTestId("input");
    expect(inputs.length).toBe(4);
  });

  it("should render a button with the test id 'btn-submit'", () => {
    const { getByTestId } = renderInputForm();
    const btn = getByTestId("btn-submit");
    expect(btn).toBeInTheDocument();
  });

  it("should render a button with the text 'CALCULATE'", () => {
    const { getByText } = renderInputForm();
    const btn = getByText("CALCULATE");
    expect(btn).toBeInTheDocument();
  });

  it("should display a blank input form with no values except for the date", async () => {
    const { findByTestId } = renderInputForm();
    const form = await findByTestId("form");
    expect(form).toHaveFormValues({
      "Cart value (€)": null,
      Items: null,
      "Delivery distance (m)": null,
    });
  });

  it("should allow entering a cart value", async () => {
    const setCartValue = jest.fn();
    const { findAllByTestId } = renderInputForm({ setCartValue });
    const input = await findAllByTestId("input");
    fireEvent.change(input[0], { target: { value: "10" } });
    expect(setCartValue).toHaveBeenCalledWith(10);
  });

  it("should allow entering a number of items", async () => {
    const setNumberOfItems = jest.fn();
    const { findAllByTestId } = renderInputForm({ setNumberOfItems });
    const input = await findAllByTestId("input");
    fireEvent.change(input[1], { target: { value: "5" } });
    expect(setNumberOfItems).toHaveBeenCalledWith(5);
  });

  it("should allow entering a delivery distance", async () => {
    const setDeliveryDistance = jest.fn();
    const { findAllByTestId } = renderInputForm({ setDeliveryDistance });
    const input = await findAllByTestId("input");
    fireEvent.change(input[2], { target: { value: "100" } });
    expect(setDeliveryDistance).toHaveBeenCalledWith(100);
  });

  it("should allow entering a delivery date", async () => {
    const setDeliveryDate = jest.fn();
    const { findAllByTestId } = renderInputForm({ setDeliveryDate });
    const input = await findAllByTestId("input");
    fireEvent.change(input[3], { target: { value: "2023-05-01T12:00" } });
    expect(setDeliveryDate).toHaveBeenCalledWith(
      new Date("2023-05-01T00:00:00.000Z")
    );
  });

  it("should allow entering a delivery hour", async () => {
    const setDeliveryHour = jest.fn();
    const { findAllByTestId } = renderInputForm({ setDeliveryHour });
    const input = await findAllByTestId("input");
    fireEvent.change(input[3], { target: { value: "2023-05-01T12:00" } });
    expect(setDeliveryHour).toHaveBeenCalledWith(12);
  });

  it("should allow entering a delivery minute", async () => {
    const setDeliveryMinute = jest.fn();
    const { findAllByTestId } = renderInputForm({ setDeliveryMinute });
    const input = await findAllByTestId("input");
    fireEvent.change(input[3], { target: { value: "2023-05-01T12:00" } });
    expect(setDeliveryMinute).toHaveBeenCalledWith(0);
  });

  it("should call the setDeliveryFeeIsVisible with true when the form is submited with cart value, number of items, delivery distance and date", async () => {
    const setDeliveryFeeIsVisible = jest.fn();
    const { findByTestId, findAllByTestId } = renderInputForm({
      setDeliveryFeeIsVisible,
    });
    const input = await findAllByTestId("input");
    const submit = await findByTestId("btn-submit");
    fireEvent.change(input[0], { target: { value: "10" } });
    fireEvent.change(input[1], { target: { value: "5" } });
    fireEvent.change(input[2], { target: { value: "100" } });
    fireEvent.change(input[3], { target: { value: "2023-05-01T12:00" } });
    fireEvent.click(submit);

    expect(setDeliveryFeeIsVisible).toHaveBeenCalledWith(true);
  });
});
