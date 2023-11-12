import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Gallery = ( {path, className} ) => {
  return (
    <LazyLoadImage
      src={path}
      className={className}
    />
  );
};

export default Gallery;