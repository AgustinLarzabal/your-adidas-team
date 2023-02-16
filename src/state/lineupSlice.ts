import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PlayerStats } from "core/getPlayers";
import { POSITIONS } from "utils/constants";

export type LineupState = {
  lineup: {
    goalkeepers: PlayerStats[];
    defenders: PlayerStats[];
    midfielders: PlayerStats[];
    attackers: PlayerStats[];
  };
  totalPlayers: number;
};

const LineupInitialState: LineupState = {
  lineup: {
    goalkeepers: [],
    defenders: [],
    midfielders: [],
    attackers: [],
  },
  totalPlayers: 0,
};

export const LineupSlice = createSlice({
  name: "lineup",
  initialState: LineupInitialState,
  reducers: {
    addToLineup: (state, action: PayloadAction<PlayerStats>) => {
      state.totalPlayers++;
      switch (action.payload.position) {
        case POSITIONS.Goalkeeper:
          state.lineup = {
            ...state.lineup,
            goalkeepers: [...state.lineup.goalkeepers, action.payload],
          };
          break;

        case POSITIONS.Defender:
          state.lineup = {
            ...state.lineup,
            defenders: [...state.lineup.defenders, action.payload],
          };
          break;

        case POSITIONS.Midfielder:
          state.lineup = {
            ...state.lineup,
            midfielders: [...state.lineup.midfielders, action.payload],
          };
          break;

        case POSITIONS.Attacker:
          state.lineup = {
            ...state.lineup,
            attackers: [...state.lineup.attackers, action.payload],
          };
          break;
      }
    },

    removeFromLineup: (state, action: PayloadAction<PlayerStats>) => {
      state.totalPlayers--;
      switch (action.payload.position) {
        case POSITIONS.Goalkeeper:
          state.lineup.goalkeepers = state.lineup.goalkeepers.filter(
            (player) => player.id !== action.payload.id
          );
          break;

        case POSITIONS.Defender:
          state.lineup.defenders = state.lineup.defenders.filter(
            (player) => player.id !== action.payload.id
          );
          break;

        case POSITIONS.Midfielder:
          state.lineup.midfielders = state.lineup.midfielders.filter(
            (player) => player.id !== action.payload.id
          );
          break;

        case POSITIONS.Attacker:
          state.lineup.attackers = state.lineup.attackers.filter(
            (player) => player.id !== action.payload.id
          );
          break;
      }
    },
  },
});

export const LineupActions = LineupSlice.actions;
export const LineupReducer = LineupSlice.reducer;
