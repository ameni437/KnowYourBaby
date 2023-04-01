import React from "react";
import './ReadMore.css';
import img1 from '../../assets/im1.jpeg';
import img2 from '../../assets/IM2.jpg';
import img3 from '../../assets/IM3.jfif';
import img4 from '../../assets/IM4.jpg';
import gross from '../../assets/gross.jpg';
import img5 from '../../assets/im5.jpg';






const ReadMore = () =>{
    return(
        
<>
            <section className="readMore">
                <div className="row">
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
                            <div className="age">Couches</div>
                            <img className="img" src={img4}/>
                            <i>L'apprentissage de la propreté de bébé : toute une histoire !</i>
                            <hr/>

                            <a href='https://www.bebe.nestle.fr/apprentissage-proprete-bebe'className="text">Les bébés n'ont pas toujours porté des couches.</a>
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
            </section>
        </>
  
    )
}

export default  ReadMore  ;