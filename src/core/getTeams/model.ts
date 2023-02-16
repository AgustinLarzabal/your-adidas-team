export type Teams = {
  get: string;
  parameters: {
    country: string;
  };
  errors: string[];
  results: number;
  paging: {
    current: number;
    total: number;
  };
  response: TeamObj[];
};

export type TeamObj = {
  team: Team;
  venue: Venue;
};

type Team = {
  id: number;
  name: string;
  code: string;
  country: string;
  founded: number;
  national: boolean;
  logo: string;
};

type Venue = {
  id: number;
  name: string;
  address: string;
  city: string;
  capacity: number;
  surface: string;
  image: string;
};
