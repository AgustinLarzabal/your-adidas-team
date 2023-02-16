import { fireEvent, render, screen, within } from "@testing-library/react";
import { Autocomplete } from "./Autocomplete";

describe("<Autocomplete />", () => {
  const data = [
    {
      label: "Argentina",
      value: "argentina",
      code: "AR",
    },
    {
      label: "France",
      value: "france",
      code: "FR",
    },
  ];

  const Component = () => {
    return (
      <Autocomplete
        label="Label of Autocomplete"
        options={data}
        onChange={jest.fn()}
      />
    );
  };

  it("Should render <Autocomplete />", () => {
    // Arange
    render(<Component />);

    // Act
    const result = screen.getByRole("combobox");

    // Assert
    expect(result).toBeInTheDocument();
  });

  it("should select the correct country", () => {
    // Arange
    render(<Component />);
    const expected = "Argentina";

    // Act
    const autocomplete = screen.getByTestId("autocomplete");
    const result = within(autocomplete).getByRole("combobox");
    autocomplete.focus();
    fireEvent.change(result, { target: { value: "arg" } });
    fireEvent.keyDown(autocomplete, { key: "ArrowDown" });
    fireEvent.keyDown(autocomplete, { key: "Enter" });

    // Assert
    expect(result).toHaveValue(expected);
  });
});
