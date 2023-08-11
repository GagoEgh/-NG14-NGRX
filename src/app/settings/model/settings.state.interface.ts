import { ICurrentUser } from "src/app/shared/model/currentUser.interface";

export interface ISettingsState{
  isLoad:boolean,
  currentUser:null|ICurrentUser
}