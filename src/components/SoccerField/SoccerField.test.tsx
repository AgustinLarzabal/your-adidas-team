import { render, screen } from "@testing-library/react";
import { SoccerField } from "./SoccerField";
import { Tactic } from "components/Tactic";

describe("<SoccerField />", () => {
  const Component = () => {
    return (
      <SoccerField>
        <Tactic>soccer</Tactic>
      </SoccerField>
    );
  };
  it("Should render successfully", () => {
    // Arrange
    render(<Component />);

    // Act
    const result = screen.getByTestId("soccer-field");

    // Assert
    expect(result).toBeInTheDocument();
  });
});
