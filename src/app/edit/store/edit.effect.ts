import { Injectable, inject } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EditService } from "../edit.service";
import { editActionErrore, editActionStart, editActionSucces } from "./action";
import { catchError, map, of, switchMap, tap } from "rxjs";
import { EditDTO } from "../model/editDTO";
import { HttpErrorResponse } from "@angular/common/http";
import { Router } from "@angular/router";
import { IFeed } from "src/app/home/model/globalFeed.interface";

@Injectable()
export class EditEffect{

  private actions = inject(Actions);
  private editService = inject(EditService);
  private router = inject(Router);

  editEffect = createEffect(()=>this.actions.pipe(
    ofType(editActionStart),
    switchMap((res:EditDTO)=>{
      return this.editService.createEdit({ article: res }).pipe(
        map((response:any)=>{
          console.log('response',response)
          return editActionSucces(response)
        }),
        catchError((err:HttpErrorResponse)=>{
          console.log('err',err.error)
          return of(editActionErrore(err.error.errors))
        })
      )
    })
  ))

  editEffectSucces = createEffect(()=>this.actions.pipe(
    ofType(editActionSucces),
    tap((res:any)=>{
      this.router.navigate(['./articles'],{
        queryParams:{
          slug:res.article.slug
        }
      })
    })
  ),
  {
    dispatch:false
  }
  )
}