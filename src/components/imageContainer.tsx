import React from "react";

interface ImageContainerProps {
  id: string;
  description: string;
  url: string;
}

const ImageContainer = ({id, url, description} : ImageContainerProps) => {
  return (
    <img key={id} src={url} alt={description} />
  );
};

export default ImageContainer;
