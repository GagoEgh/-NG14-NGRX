import { HttpClient, HttpContext } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { IS_PUBLIC_API } from "../main.interceptor";

@Injectable(
  {
    providedIn:'root'
  }
)
export class SharedService {

  private http = inject(HttpClient);
  getCurrentUser() {
    return this.http.get('user', {
      context: new HttpContext().set(IS_PUBLIC_API, true)
    })
  }
}