
import { IFeed } from "src/app/home/model/globalFeed.interface";
import { IComments } from "./comments.interface";

export interface IArticleState{
  isLoad:boolean,
  article:null|IFeed,
  comments:IComments|null
}