import { inject } from "@angular/core"
import { Store, select } from "@ngrx/store"
import { Observable, map } from "rxjs"
import { IBackError } from "src/app/shared/model/backendErrore.interface"
import { editBackError } from "../store/selector"

export const getEditBackError = (): Observable<IBackError | null> => {
  const store = inject(Store);
  return store.pipe(select(editBackError)).pipe(map((err: IBackError | null) => err))
}