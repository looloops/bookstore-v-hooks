import { render, screen } from "@testing-library/react";
import App from "../App";

it("Renders comments correctly", () => {
  render(<App />);
  const commentArea = screen.getByText(/Invia/i);
  expect(commentArea).toBeInTheDocument();
});
