import { inject } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { backendErrore } from "../../auth/store/selectors";
import { map } from "rxjs";

export const backendError = () => {
  const store = inject(Store);
  return store.pipe(select(backendErrore))
    .pipe(
      map((res) => {
        return res
      })
    )

}