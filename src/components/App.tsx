import React, { useEffect, useState } from "react";
import SearchInput from "./searchInput";
import "../App.css";
import { searchImages } from "../queries/searchQueries";
import ImageList from "./imageList";
import { ImageData, SearchResponse, SearchQuery } from "../types";
import PaginationControl from "./paginationControl";

const App = () => {
  const [imageList, setImageList] = useState<Array<ImageData>>([]);
  const [query, setQuery] = useState<SearchQuery>({page: 1, text: ""});
  const [totalPages, setTotalPages] = useState<number>(1);

  useEffect(() => {
    const handleImageSearch = () => {
      searchImages({
        text: query.text,
        page: query.page,
        pageSize: 10
      }).then((response : SearchResponse) => {
        console.log(response);
        setImageList(response.response?.results || []);
        setTotalPages(response.response?.total_pages || 1);
      }).catch((error) => {
        console.log(error);
      })
    }

    if(query.text !== "")
      handleImageSearch();
  }, [query]);

  return (
    <div className="App">
      <header className="App-header">
        <SearchInput query={query} setQuery={setQuery}/>
        <ImageList imageList={imageList}/>
        <PaginationControl query={query} setQuery={setQuery} totalPages={totalPages} />
      </header>
    </div>
  );
};

export default App;
