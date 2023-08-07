import { inject } from "@angular/core"
import { Store } from "@ngrx/store"
import { yourStatrtAction } from "../store/action";

export const yourStartAction = (num:number=0)=>{
  const store = inject(Store);
  const page ={
    page:num
  }
  store.dispatch(yourStatrtAction(page))
}