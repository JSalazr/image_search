import { createApi } from "unsplash-js";
import { SearchResponse } from "../types";

const unsplashAccessKey: string = process.env
  .REACT_APP_UNSPLASH_ACCESS_KEY as string;

interface ImageQuery {
  text: string;
  page: number;
  pageSize: number;
}

const api = createApi({
  // Don't forget to set your access token here!
  // See https://unsplash.com/developers
  accessKey: unsplashAccessKey,
});

export const searchImages = (imageQuery: ImageQuery) : Promise<SearchResponse> => {
  return api.search
      .getPhotos({
        query: imageQuery.text,
        page: imageQuery.page,
        perPage: imageQuery.pageSize,
      }) as Promise<SearchResponse>;
};
