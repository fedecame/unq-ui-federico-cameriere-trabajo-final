import React, {useState} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import rulesImage from './images/2495px-Rock_paper_scissors_lizard_spock.svg.png';
import lizardImage from './images/lizard.svg.png';
import lizardIcon from './images/icons/lizard.png';
import paperImage from './images/paper.svg.png';
import paperIcon from './images/icons/paper.png';
import rockImage from './images/rock.svg.png';
import rockIcon from './images/icons/footprint.png';
import scissorsImage from './images/scissors.svg.png';
import scissorsIcon from './images/icons/scissors.png';
import spockImage from './images/spock.svg.png';
import spockIcon from './images/icons/vulcan-salute.png';
import './styles/app.scss';
import Rock from './options/Rock';
import Paper from './options/Paper';
import Scissors from './options/Scissors';
import Lizard from './options/Lizard';
import Spock from './options/Spock';
import OptionImage from './components/OptionImage';
import Spinner from './components/Spinner';
import Header from './components/Header';

import Image from 'react-bootstrap/Image';

function App() {
  const [showSpinner, setShowSpinner] = useState(false);
  const [isEnabledGameMode, setIsEnabledGameMode] = useState(true);
  const [selectedOption, setSelectedOption] = useState(null);
  const [victoryMsg, setVictoryMsg] = useState("");
  const [matchMsg, setMatchMsg] = useState("");
  const [firstSelection, setFirstSelection] = useState(null);
  const [secondSelection, setSecondSelection] = useState(null);
  const [gameMode, setGameMode] = useState("PvE");
  const options = [
    new Lizard(lizardImage, lizardIcon, "hvr-pulse-grow color-lizard adjust-lizard-position"),
    new Paper(paperImage, paperIcon, "hvr-glow color-paper"),
    new Scissors(scissorsImage, scissorsIcon, "hvr-bounce-in color-scissors"),
    new Rock(rockImage, rockIcon, "", "hvr-radial-out"),
    new Spock(spockImage, spockIcon, "hvr-grow color-spock")
  ];

  const handleSelection = (event) => {
    setSelectedOption(options.find(opt => opt.value === event.target.title));
  }

  const getMatchResult = (firstOption, secondOption) => {
    let result = firstOption.value === secondOption.value ? "It was a tie." : "";
    let message = "";

    if (!result) {
      const firstWins =  firstOption.defeats(secondOption.value);
      message = firstWins ?
      `${firstOption.value} ${firstOption.getDefeatMessage(secondOption.value)} ${secondOption.value}` :
      `${secondOption.value} ${secondOption.getDefeatMessage(firstOption.value)} ${firstOption.value}`; 
      switch (gameMode) {
        case "PvE":
          result = firstWins ? "You won!" : "Computer Won...";
          break;
        case "PvP":
          result = firstWins ? "First player won!" : "Second player won!";
          break;
        default:
          console.log("Invalid game mode!");
          break;
      }
    }

    return {result, message};
  }
  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  const getRandomOption = () => {
    return options[getRandomInt(0, options.length - 1)];
  }

  const startSpinner = (miliseconds) => {
    setShowSpinner(true);
    setTimeout(() => {setShowSpinner(false); setIsEnabledGameMode(true);}, miliseconds);
  }

  const playVsPC = () => {
    startSpinner(2500);
    const pcSelection = getRandomOption();
    const matchResult = getMatchResult(selectedOption, pcSelection);
    setVictoryMsg(matchResult.result);
    setMatchMsg(matchResult.message);
    setFirstSelection(selectedOption);
    setSecondSelection(pcSelection);
  }

  const playVsPlayer = () => {
    if (firstSelection) {
      startSpinner(2500);
      setSecondSelection(selectedOption);
      const matchResult = getMatchResult(firstSelection, selectedOption);
      setVictoryMsg(matchResult.result);
      setMatchMsg(matchResult.message);
    } else {
      setFirstSelection(selectedOption);
      setIsEnabledGameMode(false);
      setSelectedOption("");
    }
  }

  const resetGame = () => {
    setVictoryMsg("");
    setMatchMsg("");
    setFirstSelection(null);
    setSecondSelection(null);
    setSelectedOption("");
  }

  return (
    <>
    <Header
      gameMode={gameMode}
      setGameMode={setGameMode}
      isEnabledGameMode={isEnabledGameMode}
    />
    <Container fluid>
      <Row className="mt-3 mb-3 justify-content-center">
        <Col md={10} lg={9} xl={8}>
          <Card bg="danger" text="light">
            {!selectedOption && 
              <Card.Header className="text-center">
                <strong>Click an image to play</strong>
              </Card.Header>
            }
            {selectedOption &&
            <Card.Body className="text-center">
                {victoryMsg && !showSpinner &&
                  <>
                  <Card.Text>
                    First player picked <strong className="text-capitalize">{`${firstSelection.value} `}</strong> <span className="d-inline-block responsive-icon"><Image src={firstSelection.icon} fluid/></span>
                  </Card.Text>
                  <Card.Text>
                    {gameMode === "PvE" ? "Computer" : "Second player"} picked <strong className="text-capitalize">{`${secondSelection.value} `}</strong> <span className="d-inline-block responsive-icon"><Image src={secondSelection.icon} fluid/></span>
                  </Card.Text>
                  <Card.Text>
                    {matchMsg}
                  </Card.Text>
                  </>
                }
                <Card.Text>
                  {showSpinner ? 
                    "Calculating winner..." :
                    firstSelection && secondSelection ? victoryMsg :
                    <>Current choice: {selectedOption ? <strong className="text-capitalize">{`${selectedOption.value} `}</strong> : ""} {selectedOption ? <span className="d-inline-block responsive-icon"><Image src={selectedOption.icon} fluid/></span> : <em>Click any image</em>}</>
                  }
                </Card.Text>
                {/* <Card.Title>  </Card.Title> */}
                {/* <Card.Text>
                  <h3>Current choice: {selectedOption ? selectedOption : <em>Click any image</em>}</h3>
                </Card.Text> */}
              </Card.Body>
            }
          </Card>
        </Col>
      </Row>
      <Row>
        {/* <Col>
          <h1>Current choice: {selectedOption ? selectedOption : <em>Click any image</em>}</h1>
        </Col> */}
        {/* <Col>
          <Image src={rulesImage} alt="rules" className="centered-img"/>
        </Col> */}
        {/* <Col>
          <Image src={rulesImage} alt="rules" className="centered-img"/>
        </Col> */}
      </Row>
      {showSpinner &&
        <Row className="justify-content-center">
          <Col xs={4} lg={1}>
            <Spinner/>
          </Col>
        </Row>
      }
      <Row className={showSpinner || victoryMsg ? "d-none" : "visible"} xs={12} md={5}>
        {options.map(opt => (
            <OptionImage
              key={opt.value}
              image={opt.image}
              clickHandler={handleSelection}
              name={opt.value}
              imageClasses={opt.imageClasses}
              containerClasses={opt.containerClasses}
            />
        ))}
      </Row>
      <Row className="justify-content-center mt-3">
        {!showSpinner && victoryMsg ?
          <Button variant="success" block size="lg" onClick={resetGame}>
            <strong>Play again!</strong>
          </Button> :
          <Button variant="info" size="lg" onClick={gameMode === "PvE" ? playVsPC : playVsPlayer} disabled={showSpinner || !selectedOption}>
            {selectedOption ? gameMode === "PvE" ? <strong>Play against computer</strong> : <strong>Finish selection</strong> : <em>Click on an image</em>}
          </Button>
        }
      </Row>
    </Container>
    </>
  );
}

export default App;