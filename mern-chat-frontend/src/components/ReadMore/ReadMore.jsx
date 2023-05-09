import React from "react";
import './ReadMore.css';
import img1 from '../../assets/im1.jpeg';
import img2 from '../../assets/IM2.jpg';
import img3 from '../../assets/IM3.jfif';
import img4 from '../../assets/IM4.jpg';
import gross from '../../assets/gross.jpg';
import img5 from '../../assets/im5.jpg';
import varicelle from '../../assets/varicelle.jfif';
import Scarlatine from '../../assets/Scarlatine.jpeg';
import bronchiolite from '../../assets/bronchiolite.jfif';
import Coliques from '../../assets/Coliques.jpeg';
import Fièvre from '../../assets/Fièvre.jfif';
import Échographies from '../../assets/Échographies.jfif';
import Alimentation from '../../assets/Alimentation.jfif';


const ReadMore = () =>{
    return(
        
<>
            <section className="readMore">
                <div className="row">
                <div>
                    <p className="Theme">Selon l'Age de votre Bébé</p>
                    </div>
                    <div className="col-lg-4 col-lg-4">
                        <div className="read">
                            <div className="age">Age:0-3 mois</div>
                            <img className="img" src={img1}/>
                            <i>Comment aider bébé à bien dormir ?</i>
                            <hr/>

                            <a href='https://www.bebe.nestle.fr/dormir-reveils-nocturnes-parents'className="text">Découvrez quelques conseils et astuces pour endormir bébé et l’aider à faire ses nuits.</a>
                         </div>
                    </div>

                    <div className="col-lg-4 col-lg-4">
                        <div className="read">
                            <div className="age">Age:3-6 mois</div>
                            <img className="img" src={img2}/>
                            <i>Le sommeil de bébé : durée et conseils</i>
                            <hr/>

                            <a href='https://www.bebe.nestle.fr/sommeil-bebe'className="text">Entre 3 et 6 mois, le temps de sommeil de bébé se réduit légèrement, car il va dormir entre 14 et 17 heures par jour.</a>
                         </div>
                    </div>
                
                    <div className="col-lg-4 col-lg-4">
                        <div className="read">
                            <div className="age">Age:1 à-2 ans</div>
                            <img className="img" src={img3}/>
                            <i>À quel âge peut-on apprendre une langue étrangère à bébé ?</i>
                            <hr/>

                            <a href='https://www.bebe.nestle.fr/apprendre-plusieurs-langues-bebe'className="text">Quelques astuces pour accompagner l’apprentissage de plusieurs langues par un bébé</a>
                         </div>
                    </div> 
                </div>
                <div className="row">
                <div>
                <p className="Theme">Articles sur les maladies</p>
                </div>
                    
                    <div className="col-lg-4 col-lg-4">
                        <div className="read">
                            <div className="age">La varicelle</div>
                            <img className="img" src={varicelle}/>
                            <i>une maladie infectieuse causée par le virus varicelle-zona (VZV)</i>
                            <hr/>

                            <a href='https://www.doctissimo.fr/html/dossiers/varicelle/gr_7605_varicelle_symptomes.htm'className="text">Quelles sont les causes de la varicelle ?</a>
                         </div>
                    </div>
                    <div className="col-lg-4 col-lg-4">
                        <div className="read">
                            <div className="age">Scarlatine</div>
                            <img className="img" src={Scarlatine}/>
                            <i>Maladie rare et bénigne de l'enfant, peu contagieuse, une infection bactérienne causée par le streptocoque du groupe A (streptococcus)</i>
                            <hr/>

                            <a href='https://www.doctissimo.fr/html/sante/encyclopedie/sa_1131_scarlatine.htm'className="text">La scarlatine, qu'est-ce que c'est ?</a>
                         </div>
                    </div> 
                    <div className="col-lg-4 col-lg-4">
                        <div className="read">
                            <div className="age">Lactose</div>
                            <img className="img" src={img5}/>
                            <i>Intolérance au lactose de bébé : symptômes et traitement</i>
                            <hr/>

                            <a href='https://www.bebe.nestle.fr/intolerance-lactose-bebe'className="text">Comment se manifeste cette forme d’intolérance alimentaire chez l'enfant ?</a>
                         </div>
                    </div> 

                </div>

                <div className="row">
                <div className="col-lg-4 col-lg-4">
                        <div className="read">
                            <div className="age">Bronchiolite</div>
                            <img className="img" src={bronchiolite}/>
                            <i>une infection virale très contagieuse concerne les nourrissons et les jeunes enfants, avec un pic entre 2 et 8 mois</i>
                            <hr/>

                            <a href='https://www.doctissimo.fr/html/sante/encyclopedie/sa_789_bronchiolites.htm'className="text">causes, symptômes et traitement</a>
                         </div>
                    </div> 
                     
                    <div className="col-lg-4 col-lg-4">
                        <div className="read">
                            <div className="age">Fièvre</div>
                            <img className="img" src={Fièvre}/>
                            <i>un tiers des parents donnent des médicaments contre la fièvre à leur enfant lorsque cela n’est pas nécessaire. </i>
                            <hr/>

                            <a href='https://www.doctissimo.fr/bebe/maladies-infantiles/fievre-de-lenfant/fievre-un-tiers-des-parents-traitent-leur-enfant-alors-que-ce-nest-pas-necessaire/73e395_ar.html'className="text">un tiers des parents traitent leur enfant alors que ce n’est pas nécessaire</a>
                         </div>
                    </div> 
                    <div className="col-lg-4 col-lg-4">
                        <div className="read">
                            <div className="age">Coliques</div>
                            <img className="img" src={Coliques}/>
                            <i>Les coliques sont un problème très fréquent chez les nourrissons de moins de 3 mois.</i>
                            <hr/>

                            <a href='https://www.doctissimo.fr/html/grossesse/bebe/nourrir/articles/14205-coliques-bebe.htm'className="text">Coliques du nourrisson : comment les soulager ?</a>
                         </div>
                    </div> 

                </div>

                <div className="row">
                <div>
                <p className="Theme">Apropos la Gracesse </p>
                </div>
                    <div className="col-lg-4 col-lg-4">
                        <div className="read">
                            <div className="age">Grossesse</div>
                            <img className="img" src={gross}/>
                            <i>Découvrez les réponses à toutes vos questions sur le diabète gestationnel !</i>
                            <hr/>

                            <a href='https://www.bebe.nestle.fr/diabete-gestationnel'className="text">Découvrez tout ce que vous devez savoir sur le diabète</a>
                         </div>
                    </div> 
                     
                    <div className="col-lg-4 col-lg-4">
                        <div className="read">
                            <div className="age">Échographies</div>
                            <img className="img" src={Échographies}/>
                            <i>Les articles de nos experts sur les échographies pour le meilleur suivi de grossesse possible</i>
                            <hr/>

                            <a href='https://www.mpedia.fr/cat-echographies/'className="text">Quelles sont les 3 échographies conseillées ? </a>
                         </div>
                    </div> 
                    <div className="col-lg-4 col-lg-4">
                        <div className="read">
                            <div className="age">Alimentation</div>
                            <img className="img" src={Alimentation}/>
                            <i>bonnes habitudes : tout ce qu’il faut savoir sur l’alimentation de la femme enceinte</i>
                            <hr/>

                            <a href='https://www.mpedia.fr/cat-alimentation-de-la-femme-enceinte/'className="text">Aliments déconseillés,  compléments alimentaires & vitamines,</a>
                         </div>
                    </div> 
                    </div>

            </section>
        </>
  
    )
}

export default  ReadMore  ;