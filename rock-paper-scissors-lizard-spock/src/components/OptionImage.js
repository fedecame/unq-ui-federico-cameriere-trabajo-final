import React from "react";
import Image from 'react-bootstrap/Image';
import '../styles/option-img.scss';


const OptionImage = ({image, clickHandler, name, imageClasses, containerClasses}) => {
  return (
    <div className={`image-container ${containerClasses}`}>
      <Image
        src={image}
        alt={name}
        title={name}
        onClick={clickHandler}
        className={`centered-img ${imageClasses}`}
        roundedCircle
      />
    </div>
  );
};

export default OptionImage;