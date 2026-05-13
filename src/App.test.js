import { render, screen } from "@testing-library/react";
import App from "./App"; // Fixed the lowercase 'a'

test("renders hello world text", () => {
  render(<App />);
  const linkElement = screen.getByText(/hello world/i); // Updated to match your new text
  expect(linkElement).toBeInTheDocument();
});
