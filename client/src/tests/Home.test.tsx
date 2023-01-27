import { render, fireEvent} from "@testing-library/react";
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
});
