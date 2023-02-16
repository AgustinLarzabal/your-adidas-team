import { render, screen } from "@testing-library/react";
import { Player } from "./Player";

describe("<Player />", () => {
  it("Should render successfully", () => {
    // Arrange
    render(<Player position="gk0" photo="" />);

    // Act
    const result = screen.getByTestId("player");

    // Assert
    expect(result).toBeInTheDocument();
  });
});
