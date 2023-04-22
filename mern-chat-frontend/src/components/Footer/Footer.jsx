import React from "react";
import logoo from'../../assets/logo1.png';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faPhone,   } from '@fortawesome/free-solid-svg-icons';
import fb from'../../assets/fb.png';
import insta from'../../assets/insta.png';
import linked from'../../assets/linked.png';
import twit from'../../assets/twit.png';




const Footer = () =>{
    return(
        <footer>
            <div className="row">
                <div className="col-lg-3 col-lg-3" >
                    <img src={logoo} className="footerlogo"/>
                    <p>C'est un projet orienté développement web et intelligence artificielle,
                         l’objectif de ce projet est d'offrir aux utilisateurs la possibilité 
                         de comprendre les besoins des bébés en analysant leurs pleurs à travers
                          un modèle de classification </p>
                        <div className="footer-contact">
                            <div className="footer-icon">
                                <FontAwesomeIcon icon={faPhone}/>   
                            </div>     
                            <div className="footer-text">
                            <h6>Contactez-nous</h6>
                            <h4>+216 50 367 108</h4>
                            </div>      
                        </div>
                </div>
                <div className="col-md-3 col-sm-6">
                    <h2>LIENS RAPIDES</h2>
                    <ul>
                        
                        <li><a href="/home">Home</a></li>
                        <li>  <a href="/aboutUs">À propos de nous</a></li>
                        <li>  <a href="/doc">Documentation</a></li>
                        <li>  <a href="#">Services</a></li>
                        <li>   <a href="#">Blog</a></li>


                    </ul>
                </div>
                <div className="col-md-3 col-sm-6">
                <h2>NOS SERVICES</h2>
                    <ul>
                        <li><a href="#">AAAAA</a></li>
                            <li>  <a href="#">BBBBB</a></li>
                            <li>  <a href="#">CCCC</a></li>
                            <li>   <a href="#">DDDDD</a></li>
                            <li>  <a href="#">EEEEE</a> </li>
                    </ul>
                </div>
                <div className="col-md-3 col-sm-6">
                    <h2>S'ABONNER</h2>
                    <form>
                    <input type="email" placeholder="Entrez l'e-mail"/>
                        <button type="submit" className="btn3"> Abonnez-vous maintenant</button>
                    </form>
                    <ul className="social">
                        <li><a href="#"><img src={fb}/></a></li>
                        <li><a href="#"><img src={insta}/></a></li>
                        <li><a href="#"><img src={linked}/></a></li>
                        <li><a href="#"><img src={twit}/></a></li>

                    </ul>
                </div>

            </div>
        </footer>
    )

}

export default Footer;