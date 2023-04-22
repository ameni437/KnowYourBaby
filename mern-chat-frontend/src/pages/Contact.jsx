import { FontAwesomeIcon ,} from "@fortawesome/react-fontawesome";
import React from "react";
import Banner from "../components/Banner/Banner";
import { faEnvelope, faMap } from "@fortawesome/free-solid-svg-icons";
import './Contact.css';
import Navbar from "../components/Nav/Navbar";
import Footer from "../components/Footer/Footer";




const Contact =()=> {
    return(
        <>
            <Navbar title="Navbar" smtitle="Navbar"/>

            <Banner title="Contact" smtitle="contact"/>
            <section className="contact-us">
                <div className="row">
                <div className="col-lg-4 col-md-4">
                        <form className="han">
                            <div className="form-control">
                              <input placeholder="votre nom"/>  
                            </div>
                            <div className="form-control">
                              <input placeholder="Votre e-mail"/>  
                            </div>
                            <div className="form-control">
                              <input placeholder="votre numéro de téléphone"/>  
                            </div>
                     
                            <div className="form-control">
                              <textarea placeholder="Message">
                                </textarea>  
                            </div>
                            <button className="but">Submit</button>
                        </form>
                    </div>
                    <div className="col-lg-4 col-md-4">
                        <div className="side">
                            < div className="overlay">
                                <h3>
                                Contactez-nous pour toute information
                                </h3>
                                <li>

                                    <FontAwesomeIcon icon={faMap} /> <h5> Location</h5>
                                </li>
                                <hr/>
                                <li> R377+FGR Compus Universitaire de ,
                                Manouba 2010 
                                Ecole  Nationale des Sciences de l'Iinformatique
                                </li>
                                <p>
            
                                </p>
                                <li><FontAwesomeIcon icon={faEnvelope} /> <h5>E-mail et téléphone </h5></li>
                                <hr/>
                               <li> ****@ensi-uma.tn  </li>                                         

                               <li>(+216) 50 367 108</li>
                               <p>

                               </p>
                             </div>
                        </div>
                    </div>                    
                </div>
            </section>
            <Footer title="Footer" smtitle="Footer"/>
        </>
    )
}


export default Contact;