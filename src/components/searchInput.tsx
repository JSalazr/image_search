import React from "react";
import _ from "lodash";
import {SearchQuery } from "../types";
import { TextField } from "@mui/material";

type SearchInputProps = {
  /** Includes the terms of search: text and page.*/
  query: SearchQuery;
  /** setState function to modify the search query. */
  setQuery: Function;
}
/**
 * Text input to search images.
 */
const SearchInput = ({query, setQuery} : SearchInputProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery({...query, text: event.target.value});
  };

  return (
    <TextField
      type="text"
      placeholder="Search..."
      defaultValue={query.text}
      onChange={_.debounce(handleChange, 300)}
      className="search-bar"
    />
  );
};

export default SearchInput;
