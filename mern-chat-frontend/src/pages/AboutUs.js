import React from "react";
import Banner from "../components/Banner/Banner";
import './Aboutus.css';
import img1 from '../assets/11.jpg';
import img2 from '../assets/12.png';
import img3 from '../assets/13.jfif';


const Aboutus =()=>{
    return(
        <>
            <Banner title="AboutUs" smtitle="AboutUs"/>
            <section className="about-us">
                    <div className="col-lg-6 col-md-30">
                        <div className="about-area">

                            <ul>
                                <img className="about-thumb1" src={img1}/>
                                <img className="about-thumb2" src={img2} />
                                <img  className="about-thumb3" src={img3} />
                                    <div className="exp-bx">
                                        Notre but est :
                                    </div>
                            </ul>
                            </div>    
                    </div>
                    <div className="col-lg-6 col-md-30">
                    <div class="heading-bx">
                        <h2 class="title">Aider les parents à mieux comprendre leurs bébés.</h2>
                        <p>
                           
                            Certains parents ne se sentent pas à l’aise au début avec leurs nouveau-nés pour différentes raisons. Ils
                            trouvent des difficultés à connaitre leurs véritables besoins. Cette application  offre
                            aux parents la possibilité de comprendre les besoins de leurs bébés en enregistrant leurs pleurs,
                            puis l'application analyse et classe leurs besoins. Ceci est effectué à travers un compte qui
                            enregistre les profils des parents et les coordonnées de leurs enfants. Notre application donne
                            aussi la possibilité aux parents de partager leurs connaissances et leurs solutions pour calmer ses
                            bébés.
                        </p>
                    </div>
                    </div>      
                        

                        
                             
                 
            </section>
        </>

    )


}

export default Aboutus;

