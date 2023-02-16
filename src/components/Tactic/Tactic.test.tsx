import { render, screen } from "@testing-library/react";
import { Tactic } from "components/Tactic";

describe("<SoccerField />", () => {
  const Component = () => {
    return <Tactic>soccer</Tactic>;
  };
  it("Should render successfully", () => {
    // Arrange
    render(<Component />);

    // Act
    const result = screen.getByTestId("tactic");

    // Assert
    expect(result).toBeInTheDocument();
  });
});
