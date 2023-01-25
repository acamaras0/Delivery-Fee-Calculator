import { render } from "@testing-library/react";
import Logo from "../components/Logo/Logo";

describe("Logo", () => {
  it("should render a logo", () => {
    const { getByAltText } = render(<Logo />);
    const logo = getByAltText("logo");
    expect(logo).toBeInTheDocument();
  });
});
