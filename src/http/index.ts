import axios from "axios";

export const API_URL = `https://api.adera-team.ru`; //api.adera-team.ru
export const API_PYTHON_URL = `https://py.adera-team.ru`; //py.adera-team.ru

const $api = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});

export const $apiPython = axios.create({
  withCredentials: true,
  baseURL: API_PYTHON_URL,
});

export default $api;