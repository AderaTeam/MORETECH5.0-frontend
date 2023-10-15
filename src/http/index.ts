import axios from "axios";

export const API_URL = `https://api.adera-team.ru`; //api.adera-team.ru

const $api = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});

export default $api;