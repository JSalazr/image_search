import React from "react";
import { ImageData } from "../types";
import ImageContainer from "./imageContainer";

interface ImageListProps {
  imageList: Array<ImageData>
}
/**
 * Text input to search images
 */
const ImageList = ({imageList} : ImageListProps) => {
  return (
    <>
      {imageList.map((imageData: ImageData) => (
        <ImageContainer
          key={imageData.id}
          id={imageData.id}
          url={imageData.urls.small}
          description={imageData.description}
        />
      ))}
    </>
  );
};

export default ImageList;
