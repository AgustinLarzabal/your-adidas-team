export type Error = {
  code: KeyErrors;
  message: string;
};

export const ERRORS = {
  default: {
    code: "default",
    message: "Default error message",
  },
  getCountriesError: {
    code: "getCountriesError",
    message: "There was an error getting the countries",
  },
  getPlayersError: {
    code: "getPlayersError",
    message: "There was an error getting the players",
  },
};

type KeyErrors = keyof typeof ERRORS;
