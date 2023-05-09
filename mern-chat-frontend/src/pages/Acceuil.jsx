import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import Navigation from "../components/Navigation";
import "./Acceuil.css";

function Home() {
    return (
        <div>
            <Navigation/>
        <Row>
            <Col md={6} className="d-flex flex-direction-column align-items-center justify-content-center">
                <div className="name" >
                    <h1><span>Discussion </span>Entre Mamans!</h1>
                    <br/>
                    <p className="details"> Qui mieux qu'une essayeuse peut comprendre une autre essayeuse ? <br/>
                             Qui mieux qu'une future maman peut comprendre une autre future maman ?<br/>
                             Qui mieux qu'une maman peut comprendre une autre maman ?<br/>
                          <br/></p>
                       <p className="detail"> Découvrez une communauté de femmes comme vous, toujours disponibles pour<br/>
                     te soutenir et te conseiller.</p>
                    <LinkContainer to="/chat">
                        <button className="custom-btn btn-1"  >
                        Commencer <i className="fas fa-comments home-message-icon"></i>
                        </button>
                    </LinkContainer>
                </div>
            </Col>
            <Col md={6} className="home__bg"></Col>
        </Row>
        </div>
    );
}

export default Home;