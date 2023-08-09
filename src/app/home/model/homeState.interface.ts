
import { IArticle } from "../../article/model/article.interface";
import { IHomeFeed } from "./homeFeed.interface";

export interface IHomeState {
  isLoad: boolean,
  globalFeed: null | IHomeFeed,
  yourFeed: null | IHomeFeed,
  article: null | IArticle
}