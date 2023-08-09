import { IAuthor } from "../../home/model/author.interface";

export interface IArticle {
  author: IAuthor,
  body: string,
  createdAt: string,
  description: string,
  favorited: boolean,
  favoritesCount: number,
  slug: string,
  tagList: string[],
  title: string,
  updatedAt: string
}