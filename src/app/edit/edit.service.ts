import { HttpClient, HttpContext } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { IS_PUBLIC_API } from "../main.interceptor";

@Injectable()
export class EditService {
  private http = inject(HttpClient);

  createEdit(data: any) {
    return this.http.post(`articles/`, data,{
      context:new HttpContext().set(IS_PUBLIC_API,true)
    })
  }

}