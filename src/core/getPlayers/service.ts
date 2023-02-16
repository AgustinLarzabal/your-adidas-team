import { BASE_URL, fetch } from "core/api";
import { METHOD } from "utils/constants";
import { Players } from "./model";

export function getPlayers(teamID: number): Promise<Players> {
  const url = `${BASE_URL}/players?season=2022&team=${teamID}`;

  return fetch({
    method: METHOD.get,
    url,
  });
}
