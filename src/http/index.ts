import axios from "axios";

export const API_URL = `api.adera-team.ru`;

const $api = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});

export default $api;