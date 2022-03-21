import { ImageList } from "@mui/material";
import React from "react";
import { ImageData } from "../types";
import ImageContainer from "./imageContainer";

type ImageListContainerProps = {
  /** An array containing the information of the searched images. */
  imageList: Array<ImageData>;
}
/**
 * Container that displays the searched images.
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
