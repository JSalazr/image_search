import { ImageListItem, ImageListItemBar } from "@mui/material";
import React from "react";

interface ImageContainerProps {
  id: string;
  description: string;
  url: string;
}

const ImageContainer = ({ id, url, description }: ImageContainerProps) => {
  return (
    <ImageListItem key={id}>
      <img src={url} alt={description} />
      {description && (
        <ImageListItemBar subtitle={description} />
      )}
    </ImageListItem>
  );
};

export default ImageContainer;
