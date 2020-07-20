import React, {useState} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';
// import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import Button from 'react-bootstrap/Button';
// import './App.css';
import rulesImage from './images/2495px-Rock_paper_scissors_lizard_spock.svg.png';
import lizardImage from './images/lizard.svg.png';
import paperImage from './images/paper.svg.png';
import rockImage from './images/rock.svg.png';
import scissorsImage from './images/scissors.svg.png';
import spockImage from './images/spock.svg.png';
import './styles/app.scss';
import Rock from './options/Rock';
import Paper from './options/Paper';
import Scissors from './options/Scissors';
import Lizard from './options/Lizard';
import Spock from './options/Spock';
import OptionImage from './components/OptionImage';

function App() {

  const [showSpinner, setShowSpinner] = useState(false);
  const [isEnabledGameMode, setIsEnabledGameMode] = useState(true);
  const [selectedOption, setSelectedOption] = useState("");
  const [victoryMsg, setVictoryMsg] = useState("");
  const [matchMsg, setMatchMsg] = useState("");
  const [firstSelection, setFirstSelection] = useState(null);
  const [secondSelection, setSecondSelection] = useState(null);
  const [gameMode, setGameMode] = useState("PvE");
  const options = [
    new Lizard(lizardImage, "hvr-pulse-grow color-lizard"),
    new Paper(paperImage, "hvr-glow color-paper"),
    new Scissors(scissorsImage, "hvr-bounce-in color-scissors"),
    new Rock(rockImage, "", "hvr-radial-out"),
    new Spock(spockImage, "hvr-grow color-spock")
  ];

  const handleSelection = (event) => {
    setSelectedOption(event.target.title);
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
    startSpinner(1750);
    const pcSelection = getRandomOption();
    const firstPlayerSelection = options.find(opt => opt.value === selectedOption);
    const matchResult = getMatchResult(firstPlayerSelection, pcSelection);
    setVictoryMsg(matchResult.result);
    setMatchMsg(matchResult.message);
    setFirstSelection(firstPlayerSelection);
    setSecondSelection(pcSelection);
  }

  const playVsPlayer = () => {
    if (firstSelection) {
      startSpinner(1750);
      const secondPlayerSelection = options.find(opt => opt.value === selectedOption);
      setSecondSelection(secondPlayerSelection);
      const matchResult = getMatchResult(firstSelection, secondPlayerSelection);
      setVictoryMsg(matchResult.result);
      setMatchMsg(matchResult.message);
    } else {
      const firstPlayerSelection = options.find(opt => opt.value === selectedOption);
      setFirstSelection(firstPlayerSelection);
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
    <Container fluid>
      <Row>
        <Col>
          <h1>Selected option: {selectedOption ? selectedOption : <em>Please select an option</em>}</h1>
        </Col>
        {/* <Col>
          <Image src={rulesImage} alt="rules" className="centered-img"/>
        </Col>
        <Col>
          <Image src={rulesImage} alt="rules" className="centered-img"/>
        </Col> */}
        <Col>
          <ToggleButtonGroup className="float-right" size="lg" type="radio" name="Game mode" value={gameMode} onChange={setGameMode}>
            <ToggleButton variant="warning" type="radio" value={"PvE"} disabled={!isEnabledGameMode}>Player vs PC</ToggleButton>
            <ToggleButton variant="warning" type="radio" value={"PvP"}>2 Players</ToggleButton>
          </ToggleButtonGroup>
        </Col>
      </Row>
      <Row className={showSpinner ? "visible" : "dont-display"}>
        <Spinner animation="border" variant="info" />
      </Row>
      <Row className={!showSpinner && victoryMsg ? "visible" : "dont-display"}>
        <h2>{firstSelection && secondSelection && `First player selected ${firstSelection.value} and ${gameMode === "PvE" ? "Computer" : "Second player"} picked ${secondSelection.value}`}</h2>
        <h1>{victoryMsg}</h1>
      </Row>
      <Row className={!showSpinner && matchMsg ? "visible" : "dont-display"}>
        <h1>{matchMsg}</h1>
      </Row>
      <Row className={showSpinner || victoryMsg ? "dont-display" : "visible"}>
        {options.map(opt => (
          <Col key={opt.value}>
            <OptionImage
              image={opt.image}
              clickHandler={handleSelection}
              name={opt.value}
              imageClasses={opt.imageClasses}
              containerClasses={opt.containerClasses}
            />
          </Col>
        ))}
      </Row>
      <Row>
        {!showSpinner && victoryMsg ?
          <Button variant="success" block size="lg" onClick={resetGame}>
            <strong>Play again!</strong>
          </Button> :
          <Button variant="info" block size="lg" onClick={gameMode === "PvE" ? playVsPC : playVsPlayer} disabled={showSpinner || !selectedOption}>
            {selectedOption ? gameMode === "PvE" ? <strong>Play against computer</strong> : <strong>Finish selection</strong> : <em>Please select an option</em>}
          </Button>
        }
      </Row>
    </Container>
  );
}

export default App;
