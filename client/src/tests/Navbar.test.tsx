import { render } from "@testing-library/react";
import Navbar from "../components/Navbar/Navbar";

describe("Navbar", () => {
  it("should render a logo", () => {
    const { getByAltText } = render(<Navbar />);
    const logo = getByAltText("logo");
    expect(logo).toBeInTheDocument();
  });
});
