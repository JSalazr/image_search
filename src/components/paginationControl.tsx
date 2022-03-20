import { Button } from "@mui/material";
import React from "react";
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
