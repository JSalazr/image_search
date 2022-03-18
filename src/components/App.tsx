import React, { createContext, useState } from "react";
import SearchInput from "./searchInput";
import "../App.css";
import { searchImages } from "../utils/searchUtils";
import ImageList from "./imageList";

interface ImagesContextValues {
  imageList: Array<object>;
  setImageList: Function;
}

const ImagesContext = createContext<ImagesContextValues | null>(null);

const App = () => {
  const [imageList, setImageList] = useState<Array<object>>([]);

  const contextValues : ImagesContextValues = {imageList, setImageList};

  const handleImageSearch = (searchText : string) => {
    searchImages({
      text: searchText,
      page: 1,
      pageSize: 10
    }).then(response => {
      setImageList(response.response ? response.response.results : []);
    }).catch((error) => {
      console.log(error);
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <SearchInput handleImageSearch={handleImageSearch}/>
        <ImagesContext.Provider value={contextValues}>
          <ImageList />
        </ImagesContext.Provider>
      </header>
    </div>
  );
};

export { ImagesContext, App };
