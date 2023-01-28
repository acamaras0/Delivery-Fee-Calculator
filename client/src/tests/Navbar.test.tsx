import { render } from "@testing-library/react";
import Navbar from "../components/Navbar/Navbar";

describe("Navbar", () => {
  it("should render a logo", () => {
    const { getByTestId } = render(<Navbar />);
    const logo = getByTestId("logo");
    expect(logo).toBeInTheDocument();
  });
});
