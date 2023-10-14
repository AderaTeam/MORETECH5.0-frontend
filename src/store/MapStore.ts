import { makeAutoObservable } from "mobx";

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