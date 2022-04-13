import react from "react";
import {Link, NavLink} from "react-router-dom";


function Sidebar(){
  const notJump = (e) => {
    e.preventDefault();
  }
  return(
    <div class="sidebar ">
      <NavLink to='/publication' className="sidebar-item sidebar-button sidebar-border-bottom titleUnclick" onClick={notJump}>Publications </NavLink>
        <ul className='titleCustom'>
            <li>
              <NavLink to='/publication/reports' className="sidebar-bar-item sidebar-button" > Reports </NavLink>
            </li>
            <li>
              <NavLink to='/publication/journal-articles' className="sidebar-item sidebar-button"> Journal Articles </NavLink>
            </li>
            <li>
              <NavLink to='/publication/conferences' className="sidebar-item sidebar-button"> Conferences </NavLink>
            </li>
        </ul>
    </div>
  )
}

export default Sidebar;
