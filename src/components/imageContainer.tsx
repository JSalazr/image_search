import React from "react";

interface ImageContainerProps {
  url: string
}

const ImageContainer = ({url} : ImageContainerProps) => {
  return (
    <img src={url} alt='idk' />
  );
};

export default ImageContainer;
