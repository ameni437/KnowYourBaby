import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SideB } from "../components/SideB";
import "../Pages/pediatre.css";
import Navbar from "../components/Nav/Navbar";
import Footer from "../components/Footer/Footer";
import { IconContext } from "react-icons";
import { Container, Row, Col } from "react-bootstrap";
import Ari from"../Zones/Ari";

function Ariana() {
  const [sideb, setsideb] = useState(false);

  const showsideb = () => setsideb(!sideb);

  return (
    <>
      <Navbar title="Navbar" smtitle="Navbar"/>
      <div className="container">
      <div className='row'>
               
               <div className='col-md-2 col-lg-2'>
            <div className="pediatre"> 
            </div>

            <nav className={sideb ? "nav-menu active" : "nav-menu"}>
              <ul className="nav-menu-items" onClick={showsideb}>
                <li className="pediatre-toggle">
                  <Link to="#" className="menu-bars">
                  </Link>
                </li>
                {SideB.map((item, index) => {
                  return (
                    <li key={index} className={item.cName}>
                      <Link to={item.path}>
                                            {item.icon}

                        <span>{item.title}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>  
            </div>
                    <div className='col-md-10 col-lg-10'>

            <div>
                <Ari/>
            </div>
            </div>
                </div>
      </div>    
      
      
      <Footer title="Footer" smtitle="Footer"/>
    </>
  );
}


export default Ariana;
