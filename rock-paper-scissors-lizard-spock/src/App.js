import React, {useState} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import rulesImage from './images/2495px-Rock_paper_scissors_lizard_spock.svg.png';
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
  const [disabledGameMode, setDisabledGameMode] = useState("");
  const [selectedOption, setSelectedOption] = useState(null);
  const [victoryMsg, setVictoryMsg] = useState("");
  const [effectMsg, setEffectMsg] = useState("");
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
  };

  const getMatchResult = (firstOption, secondOption) => {
    let result = firstOption.value === secondOption.value ? "It's a tie." : "";
    let message = "";

    if (!result) {
      const firstWins =  firstOption.defeats(secondOption.value);
      message = firstWins ?
      `1st ${firstOption.getDefeatMessage(secondOption.value)}` :
      `2nd ${secondOption.getDefeatMessage(firstOption.value)}`; 
      switch (gameMode) {
        case "PvE":
          result = firstWins ? "You win!" : "PC Wins...";
          break;
        case "PvP":
          result = firstWins ? "First player wins!" : "Second player wins!";
          break;
        default:
          console.log("Invalid game mode!");
          break;
      }
    }

    return {result, message};
  };

  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const getRandomOption = () => {
    return options[getRandomInt(0, options.length - 1)];
  };

  const startSpinner = (miliseconds) => {
    setShowSpinner(true);
    setTimeout(() => {setShowSpinner(false); setDisabledGameMode("");}, miliseconds);
  };

  const playVsPC = () => {
    setDisabledGameMode("PvP");
    startSpinner(2500);
    const pcSelection = getRandomOption();
    const matchResult = getMatchResult(selectedOption, pcSelection);
    setVictoryMsg(matchResult.result);
    setEffectMsg(matchResult.message);
    setFirstSelection(selectedOption);
    setSecondSelection(pcSelection);
  };

  const playVsPlayer = () => {
    if (firstSelection) {
      startSpinner(2500);
      setSecondSelection(selectedOption);
      const matchResult = getMatchResult(firstSelection, selectedOption);
      setVictoryMsg(matchResult.result);
      setEffectMsg(matchResult.message);
    } else {
      setDisabledGameMode("PvE");
      setFirstSelection(selectedOption);
      setSelectedOption("");
    }
  };

  const resetGame = () => {
    setVictoryMsg("");
    setEffectMsg("");
    setFirstSelection(null);
    setSecondSelection(null);
    setSelectedOption("");
  };

  const jsxOptionWithIcon = (option) => (
    <>
      <strong className="text-capitalize">{`${option.value} `}</strong>
      {jsxIcon(option)}
    </>
  );

  const jsxIcon = (option) => <span className="d-inline-block responsive-icon"><Image src={option.icon} fluid/></span>;

  return (
    <>
    <Header
      gameMode={gameMode}
      setGameMode={setGameMode}
      disabledGameMode={disabledGameMode}
    />
    {showSpinner && 
      <div className="centered-absolute-container">
        <Spinner/>
      </div>
    }
    <Container fluid>
      <Row className="mt-3 mb-3 justify-content-center">
        <Col sm={10} md={8} lg={7} xl={6}>
          <Card bg="danger" text="light" className="text-center">
            {!selectedOption && 
              <Card.Header>
                <strong>Click an image to play</strong>
              </Card.Header>
            }
            {selectedOption &&
            <Card.Body>
                <Card.Text className="mb-0">
                  {showSpinner && "Loading results..."}
                  {!victoryMsg && !showSpinner &&
                    <>
                      Current choice: {selectedOption ? jsxOptionWithIcon(selectedOption) :
                      <em>Click any image</em>}
                    </>
                  }
                </Card.Text>
                {victoryMsg && !showSpinner &&
                  <>
                  <Card.Text>
                    <em>First player</em> picked {jsxOptionWithIcon(firstSelection)}
                  </Card.Text>
                  <Card.Text>
                    <em>{victoryMsg.includes("wins") ? "Second player" : "Computer"}</em> picked {jsxOptionWithIcon(secondSelection)}
                  </Card.Text>
                  </>
                }
              </Card.Body>
            }
          </Card>
          {victoryMsg && !showSpinner &&
            <Card bg="warning" text="dark" className="text-center mt-3">
              <Card.Header>
                <strong>Match result</strong>
              </Card.Header>
              <Card.Body>
                {effectMsg &&
                  <Card.Text>
                    {effectMsg.startsWith('1st') ?
                      <>{jsxIcon(firstSelection)} <strong>{effectMsg.slice(4)}</strong> {jsxIcon(secondSelection)}</> :
                      <>{jsxIcon(secondSelection)} <strong>{effectMsg.slice(4)}</strong> {jsxIcon(firstSelection)}</>
                    }
                  </Card.Text>
                }
                <Card.Text>
                  <strong className="display-4">{victoryMsg}</strong>
                </Card.Text>
              </Card.Body>
            </Card>
          }
        </Col>
      </Row>
      {!victoryMsg && !showSpinner && 
        <Row xs={12} md={5}>
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
      }
      {selectedOption && !showSpinner &&
        <Row className="mt-3">
          <Col
            xs={{span: 12, offset: 0}}
            sm={{span: 8, offset: 2}}
            md={{span: 6, offset: 3}}
            xl={{span: 4, offset: 4}}
          >
          {victoryMsg ?
            <Button variant="success" block size="lg" onClick={resetGame}>
              <strong>Play again!</strong>
            </Button> :
            <Button variant="info" block size="lg" onClick={gameMode === "PvE" ? playVsPC : playVsPlayer}>
              {gameMode === "PvE" ? <strong>Play against computer</strong> : <strong>Finish selection</strong>}
            </Button>
          }
          </Col>
        </Row>
      }
    </Container>
    </>
  );
}

export default App;