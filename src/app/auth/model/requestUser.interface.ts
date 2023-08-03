import { IRequestLogin } from "./requestLogin.interface"

export interface IRequestUser {
  user:IRequestRegister|IRequestLogin
}

interface IRequestRegister extends IRequestLogin{
  username:string
}
