import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import './Banner.css';


const Banner =(props)=>{
    return(

        <section className="banner">
            <div classNames="row">
                <div className="col-lg-12 col-md-12">
                    <h2>
                        {props.title}
                        
                    </h2>
                    <li>
                    
                        <Link to="/">
                        <FontAwesomeIcon icon={faHome}/> Acceuil
                        </Link>
                        / {props.smtitle}
                    </li>
                </div>

            </div>
        </section>

    )
}

export default Banner ;