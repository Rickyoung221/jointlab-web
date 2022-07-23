import {NavLink} from "react-router-dom";
import '../../commons/components/Sidebar.css';
import { withTranslation } from 'react-i18next';

function Sidebar({t}){
  return(
    <div className="sidebar sidebar-version"> 
        <NavLink to='/aboutUs/aboutUs' className="sidebar-item sidebar-button sidebar-border-bottom">{t("about.title")} </NavLink>
        <ul className='titleCustom'>
            <li> <NavLink to='/aboutUs/mission' className="sidebar-item sidebar-button">  {t("about.vision&mission.title")} </NavLink> </li>
            <li> <NavLink to='/aboutUs/avatar' className="sidebarbar-item sidebar-button"> {t("about.team-members.title")} </NavLink> </li>
            <li> <NavLink to='/aboutUs/advisory-board' className="sidebar-item sidebar-button"> {t("about.advisory-structure.title")} </NavLink> </li>
            <li> <NavLink to='/aboutUs/partners' className="sidebar-item sidebar-button"> {t("about.our-partners.title")} </NavLink> </li>
        </ul>
    </div>
  )
}

export default withTranslation()(Sidebar);
