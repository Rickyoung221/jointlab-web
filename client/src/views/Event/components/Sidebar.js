import {NavLink} from "react-router-dom";
import { withTranslation } from 'react-i18next';

function Sidebar({t}){
  const notJump = (e) => {
    e.preventDefault();
  }
  return(
    <div className="sidebar sdiebar-block">
      <NavLink to='/events' className="sidebar-item sidebar-button sidebar-border-bottom titleUnclick" onClick={notJump}> {t("events.title")} </NavLink>
        <ul className='titleCustom'>
            <li>
              <NavLink to='/events/workshop' className="sidebar-item sidebar-button" > {t("events.menu.workshop")}</NavLink>
            </li>
            <li>
              <NavLink to='/events/Seminar' className="sidebar-item sidebar-button"> {t("events.menu.seminar")}</NavLink>
            </li>
            <li>
              <NavLink to='/events/media-cover' className="sidebar-item sidebar-button"> {t("events.menu.media-cover")} </NavLink>
            </li>
        </ul>
    </div>
  )
}

export default withTranslation()(Sidebar);
