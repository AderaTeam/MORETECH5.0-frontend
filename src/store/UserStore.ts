import { makeAutoObservable } from "mobx";
import { IUser } from "../models/IUser";
import AuthServices from "../services/AuthServices";
import { ILocation } from "../models/ILocation";

export default class UserStore {
    user = {} as IUser;
    isAuth = false;
    isLoading = false;
    userCurrentLocation = {} as ILocation | undefined;
    userLocation = {} as ILocation | undefined;
    userAddress: string | undefined = undefined;
    userCity: string | undefined = undefined;

    constructor() {
      makeAutoObservable(this);
      this.userLocation = undefined;
      this.userAddress = undefined;
      this.userCity = undefined;
      this.userCurrentLocation = undefined;
    }

    setAuth(bool: boolean) {
      this.isAuth = bool;
    }

    setUserLocation(userLocation: ILocation) {
      this.userLocation = userLocation;
    }

    setUserCurrentLocation(userCurrentLocation: ILocation) {
      this.userCurrentLocation = userCurrentLocation;
    }

    setUserCity(city: string) {
      this.userCity = city;
    }

    setUserAddress(address: string) {
      this.userAddress = address;
    }

    setUser(user: IUser) {
        this.user = user;
    }

    setLoading(bool: boolean) {
        this.isLoading = bool;
    }

    async login(email: string, password: string) {
        try {
            const response = await AuthServices.login(email, password);
            localStorage.setItem('token', response.data.access_token);
            this.setAuth(true);
            this.setUser(response.data.user);
        } catch (e: any) {
            console.log(e.response?.data?.message);
        }
    }

    async registration(username: string, password: string) {
        try {
            const response = await AuthServices.registration(username, password);
            localStorage.setItem('token', response.data.access_token);
            this.setAuth(true);
            this.setUser(response.data.user);
        } catch (e: any) {
            console.log(e.response?.data?.message);
        }
    }

    async logout() {
        try {
            localStorage.removeItem('token');
            this.setAuth(false);
            this.setUser({} as IUser);
        } catch (e: any) {
            console.log(e.response?.data?.message);
        } 
    }
}
