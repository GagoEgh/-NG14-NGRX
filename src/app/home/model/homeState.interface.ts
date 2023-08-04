import { IGlobalFeed } from "./globalFeed.interface";

export interface IHomeState{
  isLoad:boolean,
  globalFeed:null|IGlobalFeed
}