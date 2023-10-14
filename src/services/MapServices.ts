import { AxiosResponse } from "axios";
import $api from "../http";
import { IMap } from "../models/IMap";

export default class MapServices {
  
  static async search(): Promise<AxiosResponse<IMap[]>> {
    return $api.post<IMap[]>('/user/signin', {})
  }
}