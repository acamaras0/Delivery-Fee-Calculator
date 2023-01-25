import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import Header from "../components/Header/Header";

test("renders Header component", () => {
  render(<Header />);
  const header = screen.getByText("Delivery Fee Calculator");
  expect(header).toBeInTheDocument();
});

test("renders the bike logo", () => {
  render(<Header />);
  const bike = screen.getByAltText("bike");
  expect(bike).toBeInTheDocument();
});
