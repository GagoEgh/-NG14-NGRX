import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";

@Injectable()
export class ArticleService{
  private http = inject(HttpClient);
 
  getArticles(slug:string){
    return this.http.get(`articles/${slug}`)
  }

}