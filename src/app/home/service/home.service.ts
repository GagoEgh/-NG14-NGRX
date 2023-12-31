import { HttpClient, HttpContext} from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable } from "rxjs";
import { IS_PUBLIC_API } from "src/app/main.interceptor";
import { IHomeFeed } from "../model/homeFeed.interface";


@Injectable()
export class HomeService {
  private http = inject(HttpClient);
  private isLoad = false;

  getIsLoad() {
    return this.isLoad
  }

  setIsLoad(value: boolean) {
    this.isLoad = value;
  }

  getGlobalFeed(offset: number = 0) {
    return this.http.get(`articles?limit=10&offset=${offset}`)
  }

  getYourFeed(offset: number = 0) {
    return this.http.get(`articles/feed?limit=10&offset=${offset}`,{
      context: new HttpContext().set(IS_PUBLIC_API, true)
    })
  }

  getTags(){
    return this.http.get(`tags`)
  }


  getTag(data:any):Observable<IHomeFeed>{
   return this.http.get<IHomeFeed>(`articles?tag=${data.tag}&limit=10&offset=${data.offset}`)
  }

}