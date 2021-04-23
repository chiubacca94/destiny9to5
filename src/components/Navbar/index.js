import React,{useState} from 'react';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

import './styles.css';

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

function Navbar(){
    // let selectedClass = "Hunter 1330";
        const [value,setValue]=useState('Hunter 1330');
        const handleSelect=(e)=>{
            // console.log(e);
            setValue(e)
        }

    
    function getRecentClassUsed(){
        // 
    };

    function switchClass(){

    }; 

    return(
        <nav class="navigation navbar navbar-light bg-light" fixed="top">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">DESTINY 9 to 5</a>
                <Button type="button" class="btn btn-primary">Login to Bungie.net</Button>
            </div>
            {/* Class selection will only appear if signed in */}
            <div class="container-fluid">
                <DropdownButton menuAlign="right" title={value} id="dropdown-menu-align-right" variant="secondary" onSelect={handleSelect}>
                    <Dropdown.Item eventKey="Hunter 1330" >Hunter 1330</Dropdown.Item>
                    <Dropdown.Item eventKey="Titan 1310">Titan 1310</Dropdown.Item>
                    <Dropdown.Item eventKey="Warlock 1300">Warlock 1300</Dropdown.Item>
                </DropdownButton>
                <ul class="nav nav-tabs top-space">
                <li class="nav-item" >
                    <a class="nav-link active" href="#">Bounty Board</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Loadouts</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Pinnacle Checklist</a>
                </li>
            </ul>
            </div>
        </nav>)
    
}

export default Navbar