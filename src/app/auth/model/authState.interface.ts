import { IBackError } from "src/app/shared/model/backendErrore.interface"
import { ICurrentUser } from "src/app/shared/model/currentUser.interface"

export interface IAuthState{
  isLoad: boolean,
  logedIn: boolean
  currentUser:ICurrentUser|null,
  backError:null|IBackError
}