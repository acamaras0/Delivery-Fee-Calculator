import { render } from "@testing-library/react";
import Footer from "../components/Footer";

describe("Footer", () => {
  it("should render a footer", () => {
    const { getByTestId } = render(<Footer />);
    const footer = getByTestId("footer");
    expect(footer).toBeInTheDocument();
  });
});
