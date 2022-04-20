import react from "react";
import './Sidebar.css';
import {Link, NavLink} from "react-router-dom";


function Sidebar(props){
  const notJump = (e) => {
    e.preventDefault();
  }
  return(

    <div className = "w3-sidebar w3-bar-block">
      
      <NavLink to = '/Events' className = "w3-bar-item w3-button w3-border-bottom w3-hover-none w3-hover-text-grey" onClick = {notJump}> Events </NavLink>
       <div>
        <ul className = 'titleCustom'>
            <li>
              <NavLink to = {props.one} className = "w3-bar-item w3-button w3-hover-none w3-hover-text-grey" > {props.one} </NavLink>
            </li>
            <li>
              <NavLink to = {props.two} className = "w3-bar-item w3-button w3-hover-none w3-hover-text-grey"> {props.two} </NavLink>
            </li>
            <li>
              <NavLink to = {props.three} className = "w3-bar-item w3-button w3-hover-none w3-hover-text-grey"> {props.three} </NavLink>
            </li>
        </ul>
        </div>
    </div>


  )
}

export default Sidebar;
