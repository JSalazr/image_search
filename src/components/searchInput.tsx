import React from "react";
import _ from "lodash";

interface SearchInputProps {
  handleImageSearch: Function;
}
/**
 * Text input to search images
 */
const SearchInput = ({handleImageSearch} : SearchInputProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleImageSearch(event.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search..."
      onChange={_.debounce(handleChange, 300)}
    />
  );
};

export default SearchInput;
