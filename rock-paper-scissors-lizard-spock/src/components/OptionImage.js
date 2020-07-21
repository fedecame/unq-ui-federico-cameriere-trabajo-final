import React from "react";
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import '../styles/option-img.scss';

const azul = (nombre) => {
  let ret = {span:4}
  switch (nombre) {
    case "lizard":
      ret = {...ret, offset:4}
      break;
    case "paper":
      ret = {...ret, offset:1}
      break;
    case "scissors":
      ret = {...ret, offset:2}
      break;
    case "rock":
      ret = {...ret, offset:2}
      break;
    case "spock":
    default:
      break;
  }
  return ret;
}

const OptionImage = ({image, clickHandler, name, imageClasses, containerClasses}) => {
  return (
    <Col
      xs={azul(name)}
      md={{span:0, offset:0}}
    >
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
    </Col>
  );
};

export default OptionImage;