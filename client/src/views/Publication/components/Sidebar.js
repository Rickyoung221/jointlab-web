import {NavLink} from "react-router-dom";
import { withTranslation } from 'react-i18next';

function Sidebar({t}){
  const notJump = (e) => {
    e.preventDefault();
  }
  return(
    <div className="sidebar ">
      <NavLink to='/publication' className="sidebar-item sidebar-button sidebar-border-bottom titleUnclick" onClick={notJump}> {t("publications.title")} </NavLink>
        <ul className='titleCustom'>
            <li>
              <NavLink to='/publication/reports' className="sidebar-bar-item sidebar-button" > {t("publications.menu.reports")} </NavLink>
            </li>
            <li>
              <NavLink to='/publication/journal-articles' className="sidebar-item sidebar-button"> {t("publications.menu.journal-articles")} </NavLink>
            </li>
            <li>
              <NavLink to='/publication/conferences' className="sidebar-item sidebar-button"> {t("publications.menu.conferences")} </NavLink>
            </li>
        </ul>
    </div>
  )
}

export default withTranslation()(Sidebar);
