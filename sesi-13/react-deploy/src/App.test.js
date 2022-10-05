import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";

import App from "./App";

test("Render halaman home dengan benar", () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  //mencari text tertentu
  const title = screen.getByText(/why do we need test ?/i);
  expect(title).toBeInTheDocument();

  //mencari button tertentu
  //pastikan button kita memiliki role="button"

  const btn = screen.getByRole("button");
  expect(btn).toBeInTheDocument();
  expect(btn).toHaveTextContent("Users List");

  const btn4 = screen.getByRole("about");
  expect(btn4).toBeInTheDocument();
  expect(btn4).toHaveTextContent("About Me");

  //klik tombol users List
  fireEvent.click(btn);

  // ====> page users <====
  //mencari button tertentu
  //pastikan button kita memiliki role="button"

  const btn2 = screen.getByRole("button");
  expect(btn2).toBeInTheDocument();
  expect(btn2).toHaveTextContent("Back to Home");
});
