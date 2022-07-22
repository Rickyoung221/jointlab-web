import {NavLink} from "react-router-dom";
import '../../commons/components/Sidebar.css';
import { withTranslation } from 'react-i18next';

function Sidebar({t}){
  return(
    <div className="sidebar sidebar-version"> 
        <NavLink to='/aboutUs/aboutUs' className="sidebar-item sidebar-button sidebar-border-bottom">{t("about.title")} </NavLink>
        <ul className='titleCustom'>
            <li> <NavLink to='/aboutUs/mission' className="sidebar-item sidebar-button">  {t("about.menu.vision&mission")} </NavLink> </li>
            <li> <NavLink to='/aboutUs/avatar' className="sidebarbar-item sidebar-button"> {t("about.menu.team-members")} </NavLink> </li>
            <li> <NavLink to='/aboutUs/advisory-board' className="sidebar-item sidebar-button"> {t("about.menu.advisory-structure")} </NavLink> </li>
            <li> <NavLink to='/aboutUs/partners' className="sidebar-item sidebar-button"> {t("about.menu.our-partners")} </NavLink> </li>
        </ul>
    </div>
  )
}

export default withTranslation()(Sidebar);
