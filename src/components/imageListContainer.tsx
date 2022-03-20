import { ImageList } from "@mui/material";
import React from "react";
import { ImageData } from "../types";
import ImageContainer from "./imageContainer";

interface ImageListContainerProps {
  imageList: Array<ImageData>;
}
/**
 * Text input to search images
 */
const ImageListContainer = ({ imageList }: ImageListContainerProps) => {
  return (
    <div className="image-results-container">
      <ImageList variant="masonry" cols={3} gap={8}>
        {imageList.map((imageData: ImageData) => (
          <ImageContainer
            key={imageData.id}
            id={imageData.id}
            url={imageData.urls.small}
            description={imageData.description}
          />
        ))}
      </ImageList>
    </div>
  );
};

export default ImageListContainer;
