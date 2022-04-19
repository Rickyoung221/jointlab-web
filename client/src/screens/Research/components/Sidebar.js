import {NavLink} from "react-router-dom";

function Sidebar(){
  const notJump = (e) => {
    e.preventDefault();
  }
  return(
    <>
      <div class="sidebar">
        <NavLink to='/research' className="sidebar-item sidebar-button sidebar-border-bottom titleUnclick" onClick={notJump}>Research </NavLink>
          <ul className='titleCustom'>
              <li>
                <NavLink to='/research/ongoing-projects' className="sidebar-item sidebar-button" > Ongoing Projects </NavLink>
              </li>
              <li>
                <NavLink to='/research/finished-projects' className="sidebar-item sidebar-button"> Finished Projects </NavLink>
              </li>
          </ul>
      </div>
    </>
  )
}

export default Sidebar;
