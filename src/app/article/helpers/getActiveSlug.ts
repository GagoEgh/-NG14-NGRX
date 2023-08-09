import { inject } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Store } from "@ngrx/store";
import { articleStartAction } from "../store/action";

export const getActiveSlug = () => {
  const activeRoute = inject(ActivatedRoute);
  const store = inject(Store);

  activeRoute.queryParams.subscribe({
    next: (res) => {
      store.dispatch(articleStartAction({ slug: res['slug'] }))
    }
  })
}