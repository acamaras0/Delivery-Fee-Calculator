import { render } from "@testing-library/react";
import DeliveryFee from "../components/DeliveryFee/DeliveryFee";

describe("DeliveryFee", () => {
  it("should display the delivery fee", () => {
    const { getByText } = render(<DeliveryFee deliveryFee={5.99} />);
    expect(getByText("5.99 €")).toBeInTheDocument();
  });

  it("should display the delivery fee rounded to 2 decimal places", () => {
    const { getByText } = render(<DeliveryFee deliveryFee={5.9999} />);
    expect(getByText("6.00 €")).toBeInTheDocument();
  });

  it("should render a button with the test id 'btn-return'", () => {
    const { getByTestId } = render(<DeliveryFee deliveryFee={10} />);
    const btn = getByTestId("btn-return");
    expect(btn).toBeInTheDocument();
  });
});
