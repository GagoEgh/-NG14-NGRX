import { EnvironmentInjector, inject } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { yourStartAction } from "./yourStart.action";

export const getYourActiveRoute = ()=>{
  const activeRouter = inject(ActivatedRoute);
  const injector = inject(EnvironmentInjector);
  
  activeRouter.queryParams.subscribe({
    next:(res)=>{
      injector.runInContext(()=>{
        if(res['offset']){
          yourStartAction(res['offset']);
        }else{
          yourStartAction();
        }
      })
    }
  });
}