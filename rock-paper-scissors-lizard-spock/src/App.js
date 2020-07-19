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
import roll from './images/roll.svg';
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
        <Col>
        <ListGroup>
          <ListGroup.Item>Cras justo odio</ListGroup.Item>
          <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
          <ListGroup.Item>Morbi leo risus</ListGroup.Item>
          <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
          <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        </ListGroup>
        </Col>
      </Row>
      <Row>
        {/* <Col><Image src={roll} alt="roll" style={{cursor:"pointer"}} className="hvr-radial-out" onClick={() => alert("asd")}/></Col> */}
        <Col><a href="#" className="hvr-icon-grow"> texto <img src={roll} className="hvr-icon"/></a></Col>
        <Col className="hvr-icon-pulse-grow"><Image src={lizard} alt="lizard" style={{cursor:"pointer"}} className="centered-img hvr-icon-color" roundedCircle/></Col>
        <Col><div><Image src={paper} alt="paper" className="centered-img hvr-glow" roundedCircle/></div></Col>
        <Col className="hvr-icon-grow"><Image src={rock} alt="rock" className="centered-img hvr-icon" roundedCircle/></Col>
        <Col className="hvr-icon-bounce"><Image src={scissors} alt="scissors" className="centered-img hvr-icon"/></Col>
        {/* <Col className="hvr-icon-fade"><Image src={spock} alt="spock" className="centered-img hvr-icon"/></Col> */}
        <Col><div className="hvr-icon-grow"><Image src={spock} alt="spock" className="centered-img hvr-icon-color"/></div></Col>
      </Row>
      <Row className="mt-5">
        <Col>
          <button className="hvr-radial-out">Aceptar</button>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
