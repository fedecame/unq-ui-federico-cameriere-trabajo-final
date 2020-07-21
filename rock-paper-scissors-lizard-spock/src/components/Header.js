import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import '../styles/header.scss';

const Header = ({gameMode, setGameMode, isEnabledGameMode}) => {
  return ( 
    <Navbar collapseOnSelect expand="md" className="bg-violet" variant="dark" sticky="top">
    <Navbar.Brand>TBBT Simple Game</Navbar.Brand>
    <Navbar.Toggle className="button-violet" aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="#rules">Rules</Nav.Link>
      </Nav>
        <ToggleButtonGroup className="d-flex" size="lg" type="radio" name="Game mode" value={gameMode} onChange={setGameMode}>
          <ToggleButton className="button-violet" type="radio" value={"PvE"} disabled={!isEnabledGameMode}>Player vs PC</ToggleButton>
          <ToggleButton className="button-violet" type="radio" value={"PvP"}>2 Players</ToggleButton>
        </ToggleButtonGroup>
    </Navbar.Collapse>
  </Navbar>
  );
}
 
export default Header;