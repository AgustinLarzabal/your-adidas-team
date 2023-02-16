import { BASE_URL, fetch } from "core/api";
import { METHOD } from "utils/constants";
import { Teams } from "./model";

export function getTeams(country: string): Promise<Teams> {
  const url = `${BASE_URL}/teams?country=${country}`;

  return fetch({
    method: METHOD.get,
    url,
  });
}
