import { IArticle } from "./article.interface";
import { IComments } from "./comments.interface";

export interface IArticleState{
  isLoad:boolean,
  article:null|IArticle,
  comments:IComments|null
}