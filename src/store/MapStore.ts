import { makeAutoObservable } from "mobx";
import {IMap} from '../models/IMap';

export class MapStore {
  offices = {} as IMap[] | undefined;
  office = {} as IMap | undefined;
  routeType: string = 'walk';
  
  constructor() {
    makeAutoObservable(this);
    this.offices = undefined;
    this.office = undefined;
    this.routeType = 'walk';
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
}