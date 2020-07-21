import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import '../styles/header.scss';

const Header = ({gameMode, setGameMode, isEnabledGameMode}) => {
  return ( 
    <Navbar collapseOnSelect expand="md" className="bg-violet" variant="dark" sticky="top">
    <Navbar.Brand href="https://the-big-bang-theory.com/rock-paper-scissors-lizard-spock/" target="_blank" rel="noopener noreferrer">TBBT Simple Game</Navbar.Brand>
    <Navbar.Toggle className="button-violet" aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="https://www.instructables.com/id/How-to-Play-Rock-Paper-Scissors-Lizard-Spock/" target="_blank" rel="noopener noreferrer">Rules</Nav.Link>
      </Nav>
        <ToggleButtonGroup className="d-flex" size="lg" type="radio" name="Game mode" value={gameMode} onChange={setGameMode}>
          <ToggleButton className="button-violet" type="radio" value={"PvE"} disabled={!isEnabledGameMode}>Player vs PC</ToggleButton>
          <ToggleButton className="button-violet" type="radio" value={"PvP"}>Player vs Player</ToggleButton>
        </ToggleButtonGroup>
    </Navbar.Collapse>
  </Navbar>
  );
}
 
export default Header;