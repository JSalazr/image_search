import React, { useContext } from "react";
import { ImagesContext } from "./App";
import ImageContainer from "./imageContainer";

const ImageList = () => {
  const contextValues = useContext(ImagesContext);

  return (
    <>
      {
        contextValues?.imageList.map((imageData : any) => 
          <ImageContainer url={imageData.urls.small} />
        )
      }
    </>
  );
};

export default ImageList;
