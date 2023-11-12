import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Gallery = ( {path} ) => {
  return (
    <LazyLoadImage
      src={path}
      className="w-fit h-44 rounded-lg mx-5"
    />
  );
};

export default Gallery;