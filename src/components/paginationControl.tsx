import { Button } from "@mui/material";
import React from "react";
import {SearchQuery } from "../types";

type PaginationControlProps =  {
  /** Includes the terms of search: text and page.*/
  query: SearchQuery;
  /** setState function to modify the search query. */
  setQuery: Function;
  /** Total number of pages.  */
  totalPages: number;
}
/**
 * Controls the current page of searched images.
 */
const PaginationControl = ({query, setQuery, totalPages} : PaginationControlProps) => {
  const handleOnClick = (newPage : number) => () => {
    setQuery({...query, page: query.page + newPage});
  };

  return (
    <>
      <Button 
        onClick={handleOnClick(-1)}
        disabled={query.page === 1}
      >
        prev
      </Button>
        <span>{query.page}</span>
      <Button 
        onClick={handleOnClick(1)}
        disabled={query.page === totalPages}
      >
        next
      </Button>
    </>
  );
};

export default PaginationControl;
