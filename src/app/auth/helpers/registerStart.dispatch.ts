import { inject } from "@angular/core";
import { IRequestUser } from "../model/requestUser.interface";
import { Store } from "@ngrx/store";
import { registerStart } from "../store/action";

export const registerStartAction = (user: IRequestUser) => {
  const store = inject(Store);
  store.dispatch(registerStart(user))
}
