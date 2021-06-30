import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { Nav, Navbar, NavDropdown } from "react-bootstrap";

import * as bungie from '../../utils/bungie';
import './styles.css';
import OAuth2Login from 'react-simple-oauth2-login';


const onSuccess = response => console.log(response);
const onFailure = response => console.error(response);
  
/**
 * Enum for character classes.
 * @readonly
 * @enum {{class: string, value: int}}
 */
 export const ClassType = Object.freeze({
    TITAN:   { name: "Titan", value: 0 },
    HUNTER:  { name: "Hunter", value: 1 },
    WARLOCK: { name: "Warlock", value: 2 }
  });

function MainNavbar(){
    // let selectedClass = "Hunter 1330";
    const [value,setValue]=useState('Hunter 1330');
    const handleSelect=(e)=>{
         // console.log(e);
        setValue(e)
    }

    function getRecentClassUsed(){

    };

    function switchClass(){

    }; 

    function login(){
      ReactDOM.render(
        <OAuth2Login
          authorizationUrl="https://www.bungie.net/en/oauth/authorize?response_type=code&client_id=36127"
          responseType="code"
          clientId={process.env.clientId}
          redirectUri="http://localhost:3000/oauth-callback"
          onSuccess={onSuccess}
          onFailure={onFailure}/>,
        document.getElementById('root')
      );
    }

    return(
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="#home">Destiny 9 to 5</Navbar.Brand>
          <DropdownButton menuAlign="right" title={value} id="dropdown-menu-align-right" variant="secondary" onSelect={handleSelect}>
              <Dropdown.Item eventKey="Hunter 1330" >Hunter 1330</Dropdown.Item>
              <Dropdown.Item eventKey="Titan 1310">Titan 1310</Dropdown.Item>
              <Dropdown.Item eventKey="Warlock 1300">Warlock 1300</Dropdown.Item>
          </DropdownButton>
          <div id="navbar-menu-right-side">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
              <Nav.Link className="mr-auto" href="#deets">Bounty Board</Nav.Link>
              <Nav.Link className="mr-auto" eventKey={2} href="#memes">Loadouts</Nav.Link>
              <Nav.Link className="mr-auto" eventKey={3} href="#memes">Pinnacle Checklist</Nav.Link>
              <Button className="mr-auto " type="button" class="btn btn-primary align-right" onClick={login}>Login to Bungie.net</Button>
          </Navbar.Collapse>
          </div>
        </Navbar>
    );
    
}

export default MainNavbar