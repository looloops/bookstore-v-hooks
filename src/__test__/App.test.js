import { render, screen } from "@testing-library/react";
import Welcome from "../components/Welcome";

// 1. Verifica che il componente Welcome venga montato correttamente.

it("makes sure Welcome mounts correctly", () => {
  render(<Welcome />);
  const welcomeMessage = screen.getByText(/Hey, nice to see you/i);
  expect(welcomeMessage).toBeInTheDocument();
});
