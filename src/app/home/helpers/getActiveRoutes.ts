import { inject } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { map } from "rxjs";

export const getActiveRoute = () => {
  const activatedRoute = inject(ActivatedRoute);
  return activatedRoute.queryParams
    .pipe(map((res) => {
      return res
    }))
}