export interface Urls {
  small: string;
}

export interface ImageData {
  id: string;
  description: string;
  urls: Urls;
}

export interface SearchResponse {
  response?: {
    results: Array<ImageData>;
    total: number;
    total_pages: number;
  }
}

export interface SearchQuery {
  text: string;
  page: number;
}