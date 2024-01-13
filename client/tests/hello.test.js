import { render, screen, cleanup } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";
import Hello from "@/components/Hello";

test("test1", () => {
  render(<Hello />);
  const element = screen.getByText(/nodejs/i);
  expect(element).toBeInTheDocument();
  const element1 = screen.getByText(/spring/i);
  expect(element1).toBeInTheDocument();
});

test("test", () => {
  expect(true).toBe(true);
});
