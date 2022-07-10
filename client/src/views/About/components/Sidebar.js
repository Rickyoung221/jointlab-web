import {NavLink} from "react-router-dom";
import '../../commons/components/Sidebar.css';

function Sidebar(){
  return(
    <div className="sidebar sidebar-version"> 
        <NavLink to='/aboutUs/aboutUs' className="sidebar-item sidebar-button sidebar-border-bottom">About Us </NavLink>
        <ul className='titleCustom'>
            <li> <NavLink to='/aboutUs/mission' className="sidebar-item sidebar-button"> Vision & Mission </NavLink> </li>
            <li> <NavLink to='/aboutUs/avatar' className="sidebarbar-item sidebar-button"> Team Members </NavLink> </li>
            <li> <NavLink to='/aboutUs/advisory-board' className="sidebar-item sidebar-button"> Advisory Structure </NavLink> </li>
            <li> <NavLink to='/aboutUs/partners' className="sidebar-item sidebar-button"> Our Partners</NavLink> </li>
        </ul>
    </div>
  )
}

export default Sidebar;
