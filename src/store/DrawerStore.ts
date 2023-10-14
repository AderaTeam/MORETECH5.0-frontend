import { makeAutoObservable } from "mobx";

export class DrawerStore {
  isMapHeader: boolean = false;
  isList: boolean = false;
  isItem: boolean = false;

  constructor() {
    makeAutoObservable(this);
    this.isList = false;
    this.isMapHeader = false;
    this.isItem = false;
  }

  setIsList = (isList: boolean) => {
    this.isList = isList;
  }

  setIsMapHeader = (isMapHeader: boolean) => {
    this.isMapHeader = isMapHeader;
  }

  setIsItem = (isItem: boolean) => {
    this.isItem = isItem;
  }
}