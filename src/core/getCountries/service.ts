import { BASE_URL, fetch } from "core/api";
import { METHOD } from "utils/constants";
import { Countries } from "./model";

export function getCountries(): Promise<Countries> {
  const url = `${BASE_URL}/countries`;

  return fetch({
    method: METHOD.get,
    url,
  });
}
