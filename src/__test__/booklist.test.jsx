import { render, screen } from "@testing-library/react";
import App from "../App";
import fantasy from "../data/fantasy.json";

it("checks if the books rendered are equal in number to the json file", () => {
  //2. Verifica che vengano effettivamente renderizzate tante bootstrap cards quanti sono i libri nel file json utilizzato.
  render(<App />);
  const books = screen.getAllByTestId("bookcard");
  expect(books).toHaveLength(fantasy.length);
});
