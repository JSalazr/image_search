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
  accessKey: unsplashAccessKey,
});

/**
 * Sends request to Unsplash API to search images.
 * @param  {ImageQuery} query The object containing the query params
 * @return {SearchResponse}      The new generic object containing the query params values
 */
export const searchImages = (imageQuery: ImageQuery) : Promise<SearchResponse> => {
  return api.search
      .getPhotos({
        query: imageQuery.text,
        page: imageQuery.page,
        perPage: imageQuery.pageSize,
      }) as Promise<SearchResponse>;
};
