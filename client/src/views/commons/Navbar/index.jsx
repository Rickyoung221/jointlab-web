import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBDropdown,
  MDBCollapse,
} from "mdb-react-ui-kit";
import "./Navbar.css";
import logo from "@img/common/logo-white-font.png";
import LanguageSwitch from "./LanguageSwitch";
import { withTranslation } from 'react-i18next';



function NavbarPage({t}) {
  const [showBasic, setShowBasic] = useState(false);
  const bgBlue = { backgroundColor: "#1F4E79" };
  const notJump = (e) => {
    e.preventDefault();
  };

  return (
    <div className="nav-sticky">
      <MDBNavbar className='navbar-height' expand="lg" dark style={bgBlue} sticky>
        <MDBContainer fluid>
          <Link to='/'> <img src={logo} className="App-logo" alt="logo" /> </Link>
          <MDBNavbarToggler
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setShowBasic(!showBasic)}
          >
            <MDBIcon icon="bars" fas />
          </MDBNavbarToggler>
          <MDBCollapse navbar show={showBasic}>
            <MDBNavbarNav className="mr-auto mb-2 mb-lg-0">
              <MDBNavbarItem>
                <div className="nav-item active">
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "nav-link active" : "nav-link"
                    }
                    to="/"
                  >
                    {t("home.title")}
                    <span className="sr-only">(current)</span>
                  </NavLink>
                </div>
              </MDBNavbarItem>

              <MDBNavbarItem>
                <MDBDropdown>
                  <NavLink
                    className="nav-link dropdown-toggle"
                    id="navbarDropdownMenuLink"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    to="/aboutUs"
                    onClick={notJump}
                  >
                    {t("about.title")}
                  </NavLink>
                  <ul
                    className="dropdown-menu dropdown-primary"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <NavLink to="/aboutUs/mission" className="dropdown-item">
                    {t("about.menu.vision&mission")}
                    </NavLink>
                    <NavLink to="/aboutUs/avatar" className="dropdown-item">
                    {t("about.menu.team-members")}
                    </NavLink>
                    <NavLink to="/aboutUs/advisory-board" className="dropdown-item">
                    {t("about.menu.advisory-structure")}
                    </NavLink>
                    <NavLink to="/aboutUs/partners" className="dropdown-item">
                    {t("about.menu.our-partners")}
                    </NavLink>
                  </ul>
                </MDBDropdown>
              </MDBNavbarItem>

              <MDBNavbarItem>
                <MDBDropdown>
                  <NavLink
                    className="nav-link dropdown-toggle"
                    id="navbarDropdownMenuLink"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    to="/research"
                    onClick={notJump}
                  >
                    {t("research.title")}
                  </NavLink>
                  <ul
                    className="dropdown-menu dropdown-primary"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <NavLink
                      to="/research/ongoing-projects"
                      className="dropdown-item"
                    >
                    {t("research.menu.ongoing-projects")}
                    </NavLink>
                    <NavLink
                      to="/research/finished-projects"
                      className="dropdown-item"
                    >
                    {t("research.menu.finished-projects")}
                    </NavLink>
                  </ul>
                </MDBDropdown>
              </MDBNavbarItem>

              <MDBNavbarItem>
                <MDBDropdown>
                  <NavLink
                    to="/publication"
                    className="nav-link dropdown-toggle"
                    id="navbarDropdownMenuLink"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    onClick={notJump}
                  >
                    {t("publications.title")}
                  </NavLink>
                  <ul
                    className="dropdown-menu dropdown-primary"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <NavLink
                      to="/publication/reports"
                      className="dropdown-item"
                    >
                    {t("publications.menu.reports")}
                    </NavLink>
                    <NavLink
                      to="/publication/journal-articles"
                      className="dropdown-item"
                    >
                    {t("publications.menu.journal-articles")}
                    </NavLink>
                    <NavLink
                      to="/publication/conferences"
                      className="dropdown-item"
                    >
                    {t("publications.menu.conferences")}
                    </NavLink>
                  </ul>
                </MDBDropdown>
              </MDBNavbarItem>

              <MDBNavbarItem>
                <MDBDropdown>
                  <NavLink
                    className="nav-link dropdown-toggle"
                    id="navbarDropdownMenuLink"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    to="/Events"
                    onClick={notJump}
                  >
                    {t("events.title")}
                  </NavLink>
                  <ul
                    className="dropdown-menu dropdown-primary"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <NavLink to="/events/workshop" className="dropdown-item">
                    {t("events.menu.workshop")}
                    </NavLink>
                    <NavLink to="/events/seminar" className="dropdown-item">
                    {t("events.menu.seminar")}
                    </NavLink>
                    <NavLink to="/events/media-cover" className="dropdown-item">
                    {t("events.menu.media-cover")}
                    </NavLink>
                  </ul>
                </MDBDropdown>
              </MDBNavbarItem>

              <MDBNavbarItem>
                <div className="nav-item active">
                  <NavLink className="nav-link" to="/joinUs">
                  {t("joinus.title")} 
                  <span className="sr-only">(current)</span>
                  </NavLink>
                </div>
              </MDBNavbarItem>
            </MDBNavbarNav>

            <LanguageSwitch />

              
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </div>
  );
}

export default withTranslation()(NavbarPage);
