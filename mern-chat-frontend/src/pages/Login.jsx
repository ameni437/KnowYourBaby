import React, { useContext, useState } from "react";
import { Col, Container, Form, Row, Button, Spinner } from "react-bootstrap";
import { useLoginUserMutation } from "../services/appApi";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import { AppContext } from "../context/appContext";
import Navigation from "../components/Navigation";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const { socket } = useContext(AppContext);
    const [loginUser, { isLoading, error }] = useLoginUserMutation();
    function handleLogin(e) {
        e.preventDefault();
        // login logic
        loginUser({ email, password }).then(({ data }) => {
            if (data) {
                // socket work
                socket.emit("new-user");
                // navigate to the chat
                navigate("/chat");
            }
        });
    }

    return (
        <div>
             <Navigation/>
        <Container>
           
            <Row>
                <Col md={7} className="login__bg2"></Col>
                
                <Col md={5} className="d-flex align-items-center justify-content-center flex-direction-column">
                    
                    <Form style={{ width: "80%", maxWidth: '500px' }} onSubmit={handleLogin}>
                        <div className="name1">
                    <h2 className="titreA">Bonjour</h2>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            {error && <p className="alert alert-danger">{error.data}</p>}
                            <Form.Label>Adresse e-mail</Form.Label>
                            <Form.Control type="email" placeholder="Adresse e-mail" onChange={(e) => setEmail(e.target.value)} value={email} required />
                            <Form.Text className="text-muted">Nous ne partagerons jamais votre e-mail avec quelqu'un d'autre.</Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Mot de passe</Form.Label>
                            <Form.Control type="password" placeholder="Mot de passe" onChange={(e) => setPassword(e.target.value)} value={password} required />
                        </Form.Group>
                        <Button className="custom-btnn btn-2" style={{width:"100%", borderColor:"#F4C2C2"}} type="submit">
                            {isLoading ? <Spinner animation="grow" /> : "Connexion"}
                        </Button>
                        <div className="py-4">
                            <p className="text-center" >
                            Vous n'avez pas de compte ? <Link to="/signup"><b className="colorer">Signup</b></Link>
                            </p>
                        </div>
                        </div>
                    </Form>
                    
                </Col>
            </Row>
        </Container>
        </div>
    );
}

export default Login;