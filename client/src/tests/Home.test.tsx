import { render, fireEvent, getAllByTestId } from "@testing-library/react";
import Home from "../pages/Home";

describe("Home", () => {
  it("should render a button with the test id 'btn-submit'", () => {
    const { getByTestId } = render(<Home />);
    const btn = getByTestId("btn-submit");
    expect(btn).toBeInTheDocument();
  });

  it("should render 4 input fields", () => {
    const { getAllByTestId } = render(<Home />);
    const inputs = getAllByTestId("input");
    expect(inputs.length).toBe(4);
  });

  it("should render a logo with the alt text 'logo'", () => {
    const { getByAltText } = render(<Home />);
    const logo = getByAltText("logo");
    expect(logo).toBeInTheDocument();
  });

  it("should render an svg with the alt text 'bike'", () => {
    const { getByAltText } = render(<Home />);
    const bike = getByAltText("bike");
    expect(bike).toBeInTheDocument();
  });

  it("should render a header with the text 'Delivery Fee Calculator'", () => {
    const { getByText } = render(<Home />);
    const header = getByText("Delivery Fee Calculator");
    expect(header).toBeInTheDocument();
  });

  it("should render a button with the text 'CALCULATE'", () => {
    const { getByText } = render(<Home />);
    const btn = getByText("CALCULATE");
    expect(btn).toBeInTheDocument();
  });

  it("should render 4 input fields with the test id 'input'", () => {
    const { getAllByTestId } = render(<Home />);
    const inputs = getAllByTestId("input");
    expect(inputs.length).toBe(4);
  });

  it("should render a form with the test id 'form'", () => {
    const { getByTestId } = render(<Home />);
    const form = getByTestId("form");
    expect(form).toBeInTheDocument();
  });

  it("should display the delivery fee when the button is clicked", () => {
    const { getByTestId } = render(<Home />);
    const btn = getByTestId("btn-submit");
    fireEvent.click(btn);
    const deliveryFee = getByTestId("delivery-fee");
    expect(deliveryFee).toBeInTheDocument();
  });

  it("should display the return button when the 'CALCULATE' button is clicked", () => {
    const { getByTestId } = render(<Home />);
    const btn = getByTestId("btn-submit");
    fireEvent.click(btn);
    const returnBtn = getByTestId("btn-return");
    expect(returnBtn).toBeInTheDocument();
  });

  // it("should update the values when inputs are changed", async() => {
  //   const { getAllByTestId } = render(<Home />);
  //   const inputs = getAllByTestId("input");
  //   fireEvent.change(inputs[0], { target: { value: "10" } });
  //   fireEvent.change(inputs[1], { target: { value: "5" } });
  //   fireEvent.change(inputs[2], { target: { value: "100" } });
  //   fireEvent.change(inputs[3], { target: { value: "2021-05-01T12:00" } });

  //   expect(inputs[0].value).toBe("10");
  //   expect(inputs[1].value).toBe("5");
  //   expect(inputs[2].value).toBe("100");
  //   expect(inputs[3].value).toBe("2021-05-01T12:00");
  // });
});
