import React from "react";
import _ from "lodash";
import {SearchQuery } from "../types";

interface PaginationControlProps {
  query: SearchQuery;
  setQuery: Function;
  totalPages: number;
}
/**
 * Text input to search images
 */
const PaginationControl = ({query, setQuery, totalPages} : PaginationControlProps) => {
  const handleOnClick = (newPage : number) => () => {
    setQuery({...query, page: query.page + newPage});
  };

  return (
    <>
      <button 
        onClick={handleOnClick(-1)}
        disabled={query.page === 1}
      >
        prev
      </button>
        {query.page}
      <button 
        onClick={handleOnClick(1)}
        disabled={query.page === totalPages}
      >
        next
      </button>
    </>
  );
};

export default PaginationControl;
