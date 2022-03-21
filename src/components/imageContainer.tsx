import { ImageListItem, ImageListItemBar } from "@mui/material";
import React from "react";

type ImageContainerProps = {
  /** The image id, provided by Unsplash API. */
  id: string;
  /** Small description of the image. */
  description?: string;
  /** Source URL for the image.. */
  url: string;
}

/**
 * Renders an image.
 */
const ImageContainer = ({ id, url, description }: ImageContainerProps) => {
  return (
    <ImageListItem key={id}>
      <img src={url} alt={description || ""} />
      {description && (
        <ImageListItemBar subtitle={description} />
      )}
    </ImageListItem>
  );
};

export default ImageContainer;
