import React from "react";
import { Navbar } from "react-bootstrap";
import headerimg from '../assets/d.png';
import img1 from '../assets/image.png';
import './Home.css';

const Home =()=>{
    return(
        <div className="s">
           
            <div className='container'>
            
                <div className='row'>
               
                    <div className='col-md-6 col-lg-6'>
                        <h5>
                        Nous fournissons aux parents la possibilité de comprendre les besoins de leurs bébés
                        </h5>
                        <h2>
                            Prendre soin de vos enfants et Protéger leurs santés
                        </h2>
                        <button>
                            
                           <a href='https://www.1000-premiers-jours.fr/fr/le-developpement-du-langage-de-bebe'>Read More</a>
                        </button>
                        <span>
                        <img src={img1} />
                        </span>
                    </div>
                    <div className='col-md-6 col-lg-6'>
                        <div className="header-box">
                            <img src={headerimg} />
                        </div>
                    </div>
                </div>
            </div>
         </div>   

       
    )
}

export default Home;



