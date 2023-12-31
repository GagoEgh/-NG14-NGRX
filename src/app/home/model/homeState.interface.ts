import { IHomeFeed } from "./homeFeed.interface";

export interface IHomeState {
  isLoad: boolean,
  globalFeed: null | IHomeFeed,
  yourFeed: null | IHomeFeed,
  tag: null | IHomeFeed,
  popularTags: null | string[],
  isTag: boolean
}