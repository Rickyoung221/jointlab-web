import React, {  useState } from "react";
import { BrowserRouter as Router, Routes, Route, Outlet, Link, NavLink} from "react-router-dom";
import { MDBContainer, MDBNavbar, MDBNavbarToggler, MDBIcon, MDBNavbarNav, MDBNavbarItem, MDBNavbarLink, MDBBtn, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBDropdownLink, MDBCollapse, MDBNavbarBrand} from 'mdb-react-ui-kit';
import './Navbar.css';
import logo from '../../assets/img/common/logo.png';

function NavbarPage(){
  const [showBasic, setShowBasic] = useState(false);
  const bgBlue = { backgroundColor: '#2974AE' };
  const notJump = (e) => {
    e.preventDefault();
  }

  return (
  <div className='nav-sticky'>
    <MDBNavbar expand='lg' dark style={bgBlue} sticky>
      <MDBContainer fluid>
        <img src={logo} className='App-logo' />
        <MDBNavbarToggler
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowBasic(!showBasic)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>
        <MDBCollapse navbar show={showBasic}>
          <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>

            <MDBNavbarItem>
              <div className="nav-item active">
                  <NavLink
                    className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                    to='/'> Home <span className="sr-only">(current)</span>
                  </NavLink>
              </div>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBDropdown>
                  <NavLink className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown"
                    aria-haspopup="true" aria-expanded="false" to='/vision' onClick={notJump}>
                    Vision
                  </NavLink>
                  <ul className="dropdown-menu dropdown-primary" aria-labelledby="navbarDropdownMenuLink">
                    <NavLink to='/vision/mission' className="dropdown-item">Mission</NavLink>
                    <NavLink to="/vision/aboutUs" className="dropdown-item">About Us</NavLink>
                  </ul>
              </MDBDropdown>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBDropdown>
              <NavLink className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown"
                aria-haspopup="true" aria-expanded="false" to='/research' onClick={notJump}>
                Research
              </NavLink>
              <ul className="dropdown-menu dropdown-primary" aria-labelledby="navbarDropdownMenuLink">
                <NavLink to='/research/ongoing-projects' className="dropdown-item">Ongoing Projects</NavLink>
                <NavLink to="/research/finished-projects" className="dropdown-item">Finished Projects</NavLink>
              </ul>

              </MDBDropdown>
            </MDBNavbarItem>


            <MDBNavbarItem>
              <MDBDropdown>
                <NavLink to='/publication' className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown"
                  aria-haspopup="true" aria-expanded="false" onClick={notJump}>Publications</NavLink>
                <ul className="dropdown-menu dropdown-primary" aria-labelledby="navbarDropdownMenuLink">
                  <NavLink to='/publication/reports' className="dropdown-item"> Reports </NavLink>
                  <NavLink to="/publication/journal-articles" className="dropdown-item">Journal Articles</NavLink>
                  <NavLink to="/publication/conferences" className="dropdown-item">Conferences</NavLink>
                </ul>
              </MDBDropdown>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBDropdown>
                <NavLink className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown"
                  aria-haspopup="true" aria-expanded="false" to='/Events' onClick={notJump}>Events</NavLink>
                <ul className="dropdown-menu dropdown-primary" aria-labelledby="navbarDropdownMenuLink">
                  <NavLink to='/events/workshop' className="dropdown-item">Workshop</NavLink>
                  <NavLink to='/events/seminar' className="dropdown-item">Seminar</NavLink>
                  <NavLink to='/events/media-cover' className="dropdown-item">Media Cover</NavLink>
                </ul>
              </MDBDropdown>
            </MDBNavbarItem>

           <MDBNavbarItem>
              <div className="nav-item active">
                <NavLink activeClassName="selected" className="nav-link" to='/joinUs'>Join Us <span className="sr-only">(current)</span></NavLink>
              </div>
           </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  </div>
  );
}


export default NavbarPage;
