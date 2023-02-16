export type Players = {
  get: string;
  parameters: {
    season: string;
    team: string;
  };
  errors: string[];
  results: number;
  paging: {
    current: number;
    total: number;
  };
  response: PlayerObj[];
};

export type PlayerObj = {
  player: Player;
  statistics: [];
};

type Player = {
  id: number;
  name: string;
  firstname: string;
  lastname: string;
  age: number;
  birth: {
    date: string;
    place: string;
    country: string;
  };
  nationality: string;
  height: string;
  weight: string;
  injured: boolean;
  photo: string;
};

export type PlayerStats = {
  id: number;
  name: string;
  nationality: string;
  position: string;
  photo: string;
};
