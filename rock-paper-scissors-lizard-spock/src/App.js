import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
// import './App.css';
import rulesImage from './images/2495px-Rock_paper_scissors_lizard_spock.svg.png';
import lizard from './images/lizard.svg.png';
import paper from './images/paper.svg.png';
import rock from './images/rock.svg.png';
import scissors from './images/scissors.svg.png';
import spock from './images/spock.svg.png';
import './styles/app.scss';

function App() {
  return (
    <Container fluid>
      <Row>
        <Col>
          <Image src={rulesImage} alt="rules" className="centered-img"/>
        </Col>
        <Col>
          <Image src={rulesImage} alt="rules" className="centered-img"/>
        </Col>
      </Row>
      <Row>
        {/* <Col className="hvr-icon-pulse-grow"><Image src={lizard} alt="lizard" style={{cursor:"pointer"}} className="centered-img hvr-icon-color" roundedCircle/></Col> */}
        <Col><div className="image-container"><Image src={lizard} alt="lizard" style={{cursor:"pointer"}} className="centered-img hvr-pulse-grow color-lizard" roundedCircle/></div></Col>
        <Col><div className="image-container"><Image src={paper} alt="paper" className="centered-img hvr-glow color-paper" roundedCircle/></div></Col>
        <Col><div className="hvr-radial-out image-container"><Image src={rock} alt="rock" className="centered-img" roundedCircle/></div></Col>
        {/* <Col className="hvr-icon-bounce"><Image src={scissors} alt="scissors" className="centered-img hvr-icon" roundedCircle/></Col> */}
        <Col><div className="image-container"><Image src={scissors} alt="scissors" className="centered-img hvr-bounce-in color-scissors" roundedCircle/></div></Col>
        {/* <Col className="hvr-icon-fade"><Image src={spock} alt="spock" className="centered-img hvr-icon"/></Col> */}
        {/* <Col><div className="hvr-icon-grow"><Image src={spock} alt="spock" className="centered-img hvr-icon-color"/></div></Col> */}
        <Col><div className="image-container"><Image src={spock} alt="spock" className="centered-img hvr-grow color-spock" roundedCircle/></div></Col>
      </Row>
    </Container>
  );
}

export default App;
