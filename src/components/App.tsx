import React, { useState } from "react";
import SearchInput from "./searchInput";
import "../App.css";
import { searchImages } from "../utils/searchUtils";

const App = () => {
  const [imageList, setImageList] = useState([]);

  const handleImageSearch = (searchText : string) => {
    searchImages({
      text: searchText,
      page: 1,
      pageSize: 10
    }).then(response => {
      console.log(response.response);
    }).catch((error) => {
      console.log(error);
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <SearchInput handleImageSearch={handleImageSearch}/>
      </header>
    </div>
  );
};

export default App;
