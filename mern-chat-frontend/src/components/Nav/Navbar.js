import react from "react";
import {Navbar , Container , NavDropdown, Collapse , Nav} from 'react-bootstrap';
import './Nav.css';
import logo from'../../assets/logo1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft  } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";


const Navbars =()=>{
  return (
    <Navbar expand="lg" style={{backgroundColor:'#fff',width:'98%',height:'79px',borderRadius:'10px',fontSize:'medium',borderColor:'#4e54c7',borderStyle:'outset',marginTop:'10px',marginLeft:'10px',marginRight:'10px',fontFamily:'Tajawal, sans-serif' }}>
      <Container className="cont">

        <Navbar.Brand className="logo" href="#home">
          <img src={logo} title="logo"/> 

        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="hana"  >

          <Nav className="me-auto">

            <Link to ="/" className="active1">Home</Link>
            <Link to="/contact"  >Contact us</Link>

            <NavDropdown title="Pages" id="basic-nav-dropdown" className="active2">
              
              <NavDropdown.Item href="#action/3.1"> <Link to="/Doc">Documentation </Link></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1"><Link to="/AboutUs">About Us</Link></NavDropdown.Item>
            </NavDropdown>
        

            <NavDropdown title="Services" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Service</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Servise details</NavDropdown.Item>

            </NavDropdown>

            <NavDropdown title="Blog" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Blogs</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Blog details</NavDropdown.Item>

            </NavDropdown>

            


            <LinkContainer to='/acc'>
              <button > Login / Registration<span> <FontAwesomeIcon icon={faArrowLeft}/> </span> </button>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export
default Navbars ;