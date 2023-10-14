import { makeAutoObservable } from "mobx";
import {IMap} from '../models/IMap';
import { ILocation } from "../models/ILocation";

export class MapStore {
  offices = {} as IMap[] | undefined;
  office = {} as IMap | undefined;
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

  setOffices(offices: IMap[]) {
    this.offices = offices;
  }

  setOffice(office: IMap) {
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