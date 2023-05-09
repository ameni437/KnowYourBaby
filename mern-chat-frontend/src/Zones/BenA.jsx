import React from 'react';

import'./Zone.css';
import sofia from '../assets/Sofia.jpg';
import nejiba from '../assets/nejiba.jfif';
import imen2 from '../assets/imen2.jfif';
import medch from '../assets/medch.jfif';
import afef from '../assets/afef.jpg';
import fatma from '../assets/fatma.jfif';




function BenA() {   
   return(
        
<>
            <section className="readMore2">
                <div className="row">
                    <div className="col-lg-4 col-lg-4">
                        <div className="read2">
                            <div className="age2">28 891 889</div>
                            <img className="img2" src={nejiba}/>
                            <i>Dr Nejia BELLAGHA
</i>
                            <hr/>
                            <p className="adresse ">
                               
Centre Hela . place 9 avril. Hammamlif 1ER ETAGE
Hammam Lif 2050 Ben arous Tunisie</p>
                         </div>
                    </div>

                      <div className="col-lg-4 col-lg-4">
                      <div className="read2">
                            <div className="age2">97 354 326</div>
                            <img className="img2" src={imen2}/>
                            <i>Dr Imen RIAHI BOUKADIDA
</i>
                            <hr/>
                            <p className="adresse ">
                            Medina medical,residence Ines,cabinet1-4
Nouvelle Medina 2063 Ben arous Tunisie</p>
                         </div>
                    </div> 
                    <div className="col-lg-4 col-lg-4">
                      <div className="read2">
                            <div className="age2">5555555</div>
                            <img className="img2" src={sofia}/>
                            <i>Dr Soufia HELIOUI</i>
                            <hr/>
                            <p className="adresse ">
                                Avenue de l'ère Nouvelle, Résidence les Emeraudes Bloc 3 , 2ème Etage , appartement n°7. Cité Ennasser 1. -Ariana-
                                Cité Ennasr 1 2037 Ariana Tunis</p>
                         </div>
                    </div> 

                </div>
                <div className="row">
                    <div className="col-lg-4 col-lg-4">
                        <div className="read2">
                            <div className="age2">50 517 855</div>
                            <img className="img2" src={medch}/>
                            <i>Dr Mohamed chawki GHARBI
</i>
                            <hr/>
                            <p className="adresse ">
                            Mourouj 4 Centre Médical AL AHMADI - En face Terminus Ligne Métro 6 (1er étage )
El Mourouj 4 2074 Ben arous Tunisie</p>
                         </div>
                    </div>

                      <div className="col-lg-4 col-lg-4">
                      <div className="read2">
                            <div className="age2">71 475 017</div>
                            <img className="img2" src={afef}/>
                            <i>Dr Afef BEN SALAH BEN HMIDA
</i>
                            <hr/>
                            <p className="adresse ">
                            101 avenue 20 mars
El Mourouj 5 2074 Ben arous Tunisie</p>
                         </div>
                    </div> 
                    <div className="col-lg-4 col-lg-4">
                      <div className="read2">
                            <div className="age2">56 564 041</div>
                            <img className="img2" src={fatma}/>
                            <i>Dr Fatma MARZOUKI
</i>
                            <hr/>
                            <p className="adresse ">
                                
Avenue Mohamed Ali Immeuble blue center B1.2 1er étage au dessus de pharmacie kais ben youssef
Rades 2040 Ben arous Tunisie</p>
                         </div>
                    </div> 

                </div>
            </section>
        </>
  
    )
}



export default BenA;