import { makeAutoObservable } from "mobx";
import {IMap} from '../models/IMap';

export class MapStore {
  offices = {} as IMap[] | undefined;
  
  constructor() {
    makeAutoObservable(this);
    this.offices = undefined;
  }

  setOffices(offices: IMap[]) {
    this.offices = offices;
  }
}