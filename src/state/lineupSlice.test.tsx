import { LineupActions, LineupReducer } from "./lineupSlice";
const player = {
  id: 0,
  name: "Lautaro Javier Martínez",
  nationality: "Argentina",
  position: "Attacker",
  photo: "https://media.api-sports.io/football/players/217.png",
};

const emptyState = {
  lineup: {
    goalkeepers: [],
    defenders: [],
    midfielders: [],
    attackers: [],
  },
  totalPlayers: 0,
};

const fillState = {
  lineup: {
    goalkeepers: [],
    defenders: [],
    midfielders: [],
    attackers: [player],
  },
  totalPlayers: 1,
};

describe("lineupSlice", () => {
  it("Should return the initial state", () => {
    // Arrange
    const initialState = undefined;
    const expected = emptyState;

    // Act
    const result = LineupReducer(initialState, { type: undefined });

    // Assert
    expect(result).toEqual(expected);
  });

  it("Should handle a player being added to the lineup", () => {
    // Arrage
    const initialState = emptyState;
    const expected = fillState;

    // Act
    const result = LineupReducer(
      initialState,
      LineupActions.addToLineup(player)
    );

    expect(result).toEqual(expected);
  });

  it("Should handle a player being removed from the lineup", () => {
    // Arrange
    const initialState = fillState;
    const expected = emptyState;

    // Act
    const result = LineupReducer(
      initialState,
      LineupActions.removeFromLineup(player)
    );

    // Assert
    expect(result).toEqual(expected);
  });
});
