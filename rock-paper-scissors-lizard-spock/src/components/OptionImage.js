import React from "react";
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import '../styles/option-img.scss';

const shiftForResponsiveness = (nombre) => {
  let ret = {span:4}
  switch (nombre) {
    case "lizard":
      ret = {...ret, order:1, offset:4}
      break;
    case "paper":
      ret = {...ret, order:2, offset:1}
      break;
    case "scissors":
      ret = {...ret, order:4, offset:2}
      break;
    case "rock":
      ret = {...ret, order:3, offset:2}
      break;
    case "spock":
      ret = {...ret, order:5}
      break;
    default:
      break;
  }
  return ret;
}

const OptionImage = ({image, clickHandler, name, imageClasses, containerClasses}) => {
  return (
    <Col
      xs={shiftForResponsiveness(name)}
      md={{span:0, order:0, offset:0}}
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