import React from "react";
import _ from "lodash";
import {SearchQuery } from "../types";

interface SearchInputProps {
  query: SearchQuery
  setQuery: Function;
}
/**
 * Text input to search images
 */
const SearchInput = ({query, setQuery} : SearchInputProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery({...query, text: event.target.value});
  };

  return (
    <input
      type="text"
      placeholder="Search..."
      defaultValue={query.text}
      onChange={_.debounce(handleChange, 300)}
    />
  );
};

export default SearchInput;
