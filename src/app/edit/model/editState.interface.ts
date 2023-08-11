import { IFeed } from "src/app/home/model/globalFeed.interface"
import { IBackError } from "src/app/shared/model/backendErrore.interface"

export interface IEditState{
  isLoad:boolean,
  article: null | IFeed,
  backError:null | IBackError,
}