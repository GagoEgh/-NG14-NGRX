import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpContextToken
} from '@angular/common/http';
import { Observable } from 'rxjs';

export const IS_PUBLIC_API = new HttpContextToken<boolean>(() => false);

@Injectable()
export class MainInterceptor implements HttpInterceptor {
  url = 'https://api.realworld.io/api/';

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let cloneURL = `${this.url}${request.url}`;
    const token  = localStorage.getItem('accessToken');
    let headers = request.headers;
    
    if (request.context.get(IS_PUBLIC_API)) {
      headers = headers.set('Authorization', `Token ${token}`);
    }

    const cloneRequest = request.clone({
      url: cloneURL,
      headers:headers
    })

    return next.handle(cloneRequest);
  }
}
