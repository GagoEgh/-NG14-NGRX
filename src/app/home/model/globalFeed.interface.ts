import { IAuthor } from "./author.interface";

export interface IFeed{
  author:IAuthor,
  body:string,
  createdAt:string,
  description:string,
  favorited:boolean,
  favoritesCount:number,
  slug:string,
  tagList:string[],
  title:string,
  updatedAt:string
}

