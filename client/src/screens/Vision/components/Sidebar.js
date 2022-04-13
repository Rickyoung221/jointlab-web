import react from "react";
import {NavLink} from "react-router-dom";


function Sidebar(){
  const notJump = (e) => {
    e.preventDefault();
  }
  return(
    <>
    <div class="sidebar">
        <NavLink to="/vision/mission" className="sidebar-item sidebar-button sidebar-border-bottom">Mission</NavLink>
        <NavLink to='/vision/aboutUs' className="sidebar-item sidebar-button sidebar-border-bottom">About Us </NavLink>
        <ul className='titleCustom'>
            <li> <NavLink to='/vision/aboutUs/avatar' className="sidebarbar-item sidebar-button"> Team Members </NavLink> </li>
            <li> <NavLink to='/vision/aboutUs/advisory-board' className="sidebar-item sidebar-button"> Advisory Structure </NavLink> </li>
            <li> <NavLink to='/vision/aboutUs/partners' className="sidebar-item sidebar-button"> Our Partners</NavLink> </li>
        </ul>
    </div>
    </>
  )
}

export default Sidebar;
