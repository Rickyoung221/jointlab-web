import react from "react";
import './Sidebar.css';
import {Link, NavLink} from "react-router-dom";


function Sidebar(props){
  const notJump = (e) => {
    e.preventDefault();
  }
  return(
    <>
    <div class="w3-sidebar w3-bar-block">
      <NavLink to='/Events' className="w3-bar-item w3-button w3-border-bottom w3-hover-none w3-hover-text-grey" onClick={notJump}>Events </NavLink>
        <ul className='titleCustom'>
            <li>
              <NavLink to={props.1.url} className="w3-bar-item w3-button w3-hover-none w3-hover-text-grey" > {props.1.name} </NavLink>
            </li>
            <li>
              <NavLink to={props.2.url} className="w3-bar-item w3-button w3-hover-none w3-hover-text-grey"> {props.2} </NavLink>
            </li>
            <li>
              <NavLink to={props.3.url} className="w3-bar-item w3-button w3-hover-none w3-hover-text-grey"> {props.3} </NavLink>
            </li>
        </ul>
    </div>
    </>
  )
}

export default Sidebar;
