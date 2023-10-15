import { makeAutoObservable } from "mobx";
import { ILocation } from "../models/ILocation";
import { IMapResponse } from "../models/response/IMapResponse";

export class MapStore {
  offices = {} as IMapResponse[] | undefined;
  office = {} as IMapResponse | undefined;
  routeType: string = 'walk';
  timeStart = {} as {hours: string, minutes: string} | undefined;
  mapCenterLocation = {} as ILocation | undefined;
  
  constructor() {
    makeAutoObservable(this);
    this.offices = undefined;
    this.office = undefined;
    this.routeType = 'walk';
    this.timeStart = undefined;
  }

  setOffices(offices: IMapResponse[]) {
    this.offices = offices;
  }

  setOffice(office: IMapResponse) {
    this.office = office;
  }

  setRouteType(routeType: string) {
    this.routeType = routeType;
  }

  setTimeStart(time: {hours: string, minutes: string}) {
    this.timeStart = time;
  }

  setMapCenterLocation(center: ILocation) {
    this.mapCenterLocation = center;
  }
}