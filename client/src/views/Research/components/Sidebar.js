import {NavLink} from "react-router-dom";
import { withTranslation } from 'react-i18next';

function Sidebar({t}){
  const notJump = (e) => {
    e.preventDefault();
  }
  return(
    <>
      <div className="sidebar">
        <NavLink to='/research' className="sidebar-item sidebar-button sidebar-border-bottom titleUnclick" onClick={notJump}>  {t("research.title")} </NavLink>
          <ul className='titleCustom'>
              <li>
                <NavLink to='/research/ongoing-projects' className="sidebar-item sidebar-button" > {t("research.menu.ongoing-projects")} </NavLink>
              </li>
              <li>
                <NavLink to='/research/finished-projects' className="sidebar-item sidebar-button"> {t("research.menu.finished-projects")} </NavLink>
              </li>
          </ul>
      </div>
    </>
  )
}

export default withTranslation()(Sidebar);
