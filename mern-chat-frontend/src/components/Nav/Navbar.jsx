import react from "react";
import { Navbar, Container, NavDropdown, Collapse, Nav } from "react-bootstrap";
import "./Nav.css";
import logo from "../../assets/logo1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";

const Navbars = () => {
  return (
    <Navbar expand="lg" className="lnav">

      <Container className="cont">

        <Navbar.Brand className="logo" href="#home">
          <img src={logo} title="logo" className="logo-image"  />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" /> 

        <Navbar.Collapse id="basic-navbar-nav" className="boutonBasculement">

          <Nav className="me-auto">
            <Link to="/" className="active1">Home</Link>
            <Link to="/contact" className="active3">Contactez-nous</Link>

            <NavDropdown
              title="Pages"
              id="basic-nav-dropdown"
              className="active2"
            >
            <NavDropdown.Item href="#action/3.1">
                {" "}
                <Link to="/Doc">Documentation </Link>
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.1">
                <Link to="/AboutUs">À propos de nous</Link>
            </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Services" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Service</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Service détaillé</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Blog" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Blogs</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Blog détaillé</NavDropdown.Item>
            </NavDropdown>

            <LinkContainer to="/acc">

              <button className="logreg">
                {" "}
                Connexion / Inscription
                <span>
                  {" "}
                  <FontAwesomeIcon icon={faArrowLeft} />{" "}
                </span>{" "}
              </button>

            </LinkContainer>

          </Nav>
        </Navbar.Collapse>
      </Container>
     
    </Navbar>
  );
};

export default Navbars;
