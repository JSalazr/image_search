import React, { useEffect, useState } from "react";
import SearchInput from "./searchInput";
import "../App.css";
import { searchImages } from "../queries/searchQueries";
import ImageListContainer from "./imageListContainer";
import { ImageData, SearchResponse, SearchQuery } from "../types";
import PaginationControl from "./paginationControl";
import { Grid } from "@mui/material";
import Title from "./title";

const App = () => {
  const [imageList, setImageList] = useState<Array<ImageData>>([]);
  const [query, setQuery] = useState<SearchQuery>({ page: 1, text: "" });
  const [totalPages, setTotalPages] = useState<number>(1);

  useEffect(() => {
    const handleImageSearch = () => {
      searchImages({
        text: query.text,
        page: query.page,
        pageSize: 10,
      })
        .then((response: SearchResponse) => {
          console.log(response);
          setImageList(response.response?.results || []);
          setTotalPages(response.response?.total_pages || 1);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    if (query.text !== "") handleImageSearch();
  }, [query]);

  return (
    <div className="App">
      <header className="App-header">
        <Grid>
          <Grid item>
            <Title />
          </Grid>
          <Grid item>
            <SearchInput query={query} setQuery={setQuery} />
          </Grid>
          <Grid item>
            <ImageListContainer imageList={imageList} />
          </Grid>
          {query.text !== "" && (
            <Grid item>
              <PaginationControl
                query={query}
                setQuery={setQuery}
                totalPages={totalPages}
              />
            </Grid>
          )}
        </Grid>
      </header>
    </div>
  );
};

export default App;
