import React, {  useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBDropdownLink,
  MDBCollapse,
  MDBNavbarBrand,
} from 'mdb-react-ui-kit';
import './NavbarPage.css';




function NavbarPage(){

  const [showBasic, setShowBasic] = useState(false);
  const bgBlue = { backgroundColor: '#2974AE' };
  const menuList = [
    {    
      title: 'Home',
      key:'/home',  // path key
      objectId: 0,
      isPublic: true,
    },
    {      
      title: 'Vision',
      key: '/vision',
      objectId:1,
      isPublic: true,
      children: [
        {
          title: 'Mission',
          key: '/mision',
        },
        {
          title:'About Us',
          key: '/about',
        },
      ]
    },
    {
      title:'Publications',
      key:'./publications',
      objectId:2,
      isPublic:true,
      children:[
        {
          title:'Reports',
          key:'/reports',
        },
        {
          title:'Journal Articles',
          key:'/Journal',
        },
        {
          title:'Conferences' ,
          key:'/conferences',
        },
      ]
    },
    {
      title:'Events',
      key:'/events',
      objectId:3,
      isPublic:true,
      children:[
        {
          title:'Workshop',
          key:'/workshop',
        },
        {
          title:'Seminar',
          key:'/seminar',
        },
        {
          title:'Media Cover' ,
          key:'/mediacover',
        },
      ]
    },
    {
      title:'Join Us',
      key: '/joinus',
      objectId:4,
      isPublic:true,
    }
  ];

  return (
  
    <MDBNavbar expand='md' dark style={bgBlue} sticky scrolling>
      <MDBContainer fluid >
        <MDBNavbarBrand className = "App-logo">
          SLIBNU-ALECSO <br/>
          Smart Education <br/>
          Joint Lab 
        </MDBNavbarBrand>
        
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
              <MDBNavbarLink active aria-current='page' href='#'>
                Home
              </MDBNavbarLink>
            </MDBNavbarItem>
            
            <MDBNavbarItem>
              <MDBDropdown>
        <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown"
          aria-haspopup="true" aria-expanded="false">Vision</a>
        <ul className="dropdown-menu dropdown-primary" aria-labelledby="navbarDropdownMenuLink">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
        </ul>
                
              </MDBDropdown>
            </MDBNavbarItem>

            
          <MDBNavbarItem>
            <MDBDropdown>
              <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown"
          aria-haspopup="true" aria-expanded="false">Publications</a>
              <ul className="dropdown-menu dropdown-primary" aria-labelledby="navbarDropdownMenuLink">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </MDBDropdown>        
          </MDBNavbarItem>
            
          <MDBNavbarItem>
            <MDBDropdown>
              <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown"
          aria-haspopup="true" aria-expanded="false">Events</a>
              <ul className="dropdown-menu dropdown-primary" aria-labelledby="navbarDropdownMenuLink">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </MDBDropdown>        
          </MDBNavbarItem>


            <MDBNavbarItem>
              <MDBNavbarLink href='#'>
                Join Us
              </MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>


          {/*Search box*/}
          <form className='d-flex input-group w-auto'>
            <input type='search' className='form-control' placeholder='Article Title' aria-label='Search' />
            <MDBBtn color='primary'>Search</MDBBtn>
          </form>
          
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
  
}


function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}


export default NavbarPage;