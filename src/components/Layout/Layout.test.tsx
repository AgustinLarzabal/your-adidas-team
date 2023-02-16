import { render, screen, within } from "@testing-library/react";
import { Layout } from "./Layout";

describe("<Layout />", () => {
  it("Should render successfully", () => {
    // Arrange
    render(
      <Layout>
        <p>This is a paragraph</p>
      </Layout>
    );
    const expected = /this is a paragraph/i;

    // Act
    const element = screen.getByTestId("layout");
    const result = within(element).getByText(/this is a paragraph/i);

    // Assert
    expect(result).toHaveTextContent(expected);
  });
});
