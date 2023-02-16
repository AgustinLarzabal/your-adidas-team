import axios, { AxiosRequestConfig } from "axios";
import { ERRORS } from "utils/errors";

export const BASE_URL = `${process.env.REACT_APP_API_HOST}`;

axios.defaults.headers.common[
  "X-RapidAPI-Key"
] = `${process.env.REACT_APP_RAPID_API_KEY}`;
axios.defaults.headers.common[
  "X-RapidAPI-Host"
] = `${process.env.REACT_APP_RAPID_API_HOST}`;

export function fetch(config: AxiosRequestConfig) {
  return axios(config)
    .then((response) => {
      return Promise.resolve(response.data);
    })
    .catch((error) => {
      return error.response.data
        ? Promise.reject(error.response.data)
        : Promise.reject(ERRORS.default);
    });
}
