export type Countries = {
  get: string;
  parameters: string[];
  errors: string[];
  results: number;
  paging: {
    current: number;
    total: number;
  };
  response: Country[];
};

export type Country = {
  name: string;
  code: string | null;
  flag: string | null;
};
