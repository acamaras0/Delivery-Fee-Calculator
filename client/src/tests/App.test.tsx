import { render } from "@testing-library/react";
import App from "../App";

describe("App", () => {
  it("should render correctly", () => {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });

  it("should display the logo", () => {
    const { getByAltText } = render(<App />);
    const logo = getByAltText("logo");
    expect(logo).toBeInTheDocument();
  });
});
