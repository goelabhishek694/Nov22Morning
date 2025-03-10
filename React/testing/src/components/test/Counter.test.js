import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "../Counter";

describe("counter test cases", () => {
    beforeAll

  test("initial state check", () => {
    //rendering it in isolation
    render(<Counter />);

    //selection
    const counterText = screen.getByText("Count is 0");
    const plusText = screen.getByText("+");
    const minusText = screen.getByText("-");

    //verify
    expect(counterText).toBeInTheDocument();
    expect(plusText).toBeInTheDocument();
    expect(minusText).toBeInTheDocument();
  });

  test("inc by 1", () => {
    //rendering in isolation
    render(<Counter />);

    //selection and fire event
    const plusText = screen.getByText("+");
    fireEvent.click(plusText);

    //verify
    const isOnePresent = screen.getByText("Count is 1");
    expect(isOnePresent).toBeInTheDocument();
  });

  test("dec by 2", () => {
    //rendering in isolation
    render(<Counter />);

    //selection and fire event
    const minuText = screen.getByText("-");
    fireEvent.click(minuText);
    fireEvent.click(minuText);

    //verify
    const isTwoPresent = screen.getByText("Count is -2");
    expect(isTwoPresent).toBeInTheDocument();
  });
});
