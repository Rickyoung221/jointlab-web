import {NavLink} from "react-router-dom";

function Sidebar(){
  const notJump = (e) => {
    e.preventDefault();
  }
  return(
    <>
      <div className="sidebar sdiebar-block">
        <NavLink to='/events' className="sidebar-item sidebar-button sidebar-border-bottom titleUnclick" onClick={notJump}>Events </NavLink>
          <ul className='titleCustom'>
              <li>
                <NavLink to='/events/workshop' className="sidebar-item sidebar-button" > Workshop </NavLink>
              </li>
              <li>
                <NavLink to='/events/Seminar' className="sidebar-item sidebar-button"> Seminar </NavLink>
              </li>
              <li>
                <NavLink to='/events/media-cover' className="sidebar-item sidebar-button"> Media Cover </NavLink>
              </li>
          </ul>
      </div>
    </>
  )
}

export default Sidebar;
