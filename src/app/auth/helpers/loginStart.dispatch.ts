import { inject } from "@angular/core";
import { Store } from "@ngrx/store";
import { loginStart } from "../store/action";
import { IRequestUser } from "../model/requestUser.interface";

export const loginStartAction = (user:IRequestUser)=>{
  const store = inject(Store);
  store.dispatch(loginStart(user));
}