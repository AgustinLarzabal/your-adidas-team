import { render, screen } from "@testing-library/react";
import { FlagIcon } from "./FlagIcon";

describe("<FlagIcon />", () => {
  it("Should render succesfully", () => {
    // Arange
    render(<FlagIcon country="AR" />);

    // Act
    const result = screen.getByTestId("flagicon");

    // Assert
    expect(result).toBeInTheDocument();
  });
});
