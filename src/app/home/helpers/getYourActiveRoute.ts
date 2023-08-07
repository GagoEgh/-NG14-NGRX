import { EnvironmentInjector, inject } from "@angular/core";
import { yourStartAction } from "./yourStart.action";
import { getActiveRoute } from "./getActiveRoutes";

export const getYourActiveRoute = () => {
  const injector = inject(EnvironmentInjector);

  getActiveRoute().subscribe({
    next: (res) => {
      injector.runInContext(() => {
        if (res['offset']) {
          yourStartAction(res['offset']);
        } else {
          yourStartAction();
        }
      })
    }
  })
}