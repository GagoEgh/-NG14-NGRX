import { IAuthor } from "src/app/home/model/author.interface";

export interface IComments{
  author:IAuthor,
  id:number,
  createdAt:string,
  updatedAt:string,
  body:string,
}