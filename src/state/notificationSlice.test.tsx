import { NotificationActions, NotificationReducer } from "./notificationsSlice";

const initialState = {
  open: false,
  type: "info",
  message: "",
  timeout: 5000,
};

describe("notificationSlice", () => {
  it("Should return the initial state", () => {
    // Act
    const result = NotificationReducer(undefined, { type: undefined });

    // Assert
    expect(result).toEqual(initialState);
  });

  it("Should handle a notification being called", () => {
    // Arrange
    const expected = {
      open: true,
      type: "error",
      message: "This is an error",
      timeout: 5000,
    };

    // Act
    const result = NotificationReducer(
      undefined,
      NotificationActions.addNotification({
        type: "error",
        message: "This is an error",
      })
    );

    // Assert
    expect(result).toEqual(expected);
  });
});
