import React from "react";
import ReactPlayer from 'react-player';
import Banner from "../components/Banner/Banner";
import './Doc.css';
import img1 from '../assets/111.jfif';
import img2 from '../assets/112.jpg';
import img3 from '../assets/113.jpg';
import Navbar  from "../components/Nav/Navbar";
import Footer from "../components/Footer/Footer";


const Doc =()=>{
    return(
        <>
            <Navbar title="Navbar" smtitle="Navbar"/>
            <Banner title="Documentation " smtitle="Documentation"/>
            <section className="doc">
                   
                <div>
                <h2 class="title"> Découvrez comment décoder les pleurs nocturnes de votre bébé et apprenez à aider votre enfant à bien dormir.</h2>
                <ul>
                    <li><h6 class="parag">Mieux comprendre les pleurs de bébé : Pourquoi votre bébé pleure le soir ?
                    <ul>
                        <li class="L" >Un nourrisson qui pleure le fait par besoin et non par caprice car il est encore trop petit pour manifester son désaccord.</li>  
                        
                        <li class="L">Le cerveau de bébé est en plein développement et il enregistre un nombre incalculable d’informations. Après ses journées bien chargées, il est possible que bébé pleure le soir pour évacuer les tensions et surcharge d’informations de la journée.</li>
 
                        <li class="L">Trop de bruit ou de visites avec de nouveaux visages peuvent être aussi à l'origine d'un excès d'émotions chez bébé, qui, le soir venu, se décharge grâce à son seul moyen d'expression et de communication : les pleurs à chaudes larmes.</li>

                        <li class="L1">Si votre bébé a plus de 8 mois, il est possible que ses pleurs du soir viennent d’une autre petite angoisse : celle de la séparation. Cette angoisse du soir est passagère et disparaîtra vite !</li>
                        <li class="L1"> REGARDEZ LA VIDEO POUR PLUS DE DETAILS </li>
                        </ul></h6></li>
                        
                    <li className="exp-bx"> Pourquoi votre bébé pleure le soir ? Et les solutions ? </li>
                </ul>
                </div>

                <div className="doc-area">
                    <ul>
                     <li className="exp-bx2">S’ISOLER AVEC BÉBÉ DANS UNE PIÈCE SOMBRE ET CALME
                                    </li>
                    <li className="exp-bx2">UTILISER LES SONS POUR CALMER LES PLEURS DU SOIR
                                    </li>   
                    <li className="exp-bx2">s’isolez dans une pièce sombre et silencieuse.
                                    </li>   
                    <li className="exp-bx2">PRATIQUER LE PORTAGE ou PRATIQUER LE PEAU À PEAU
                                    </li>             
                    <li className="exp-bx2"> Utiliser la respiration pour apaiser bébé.
                                    </li> 
                     </ul>
                
                </div>
                <div  className="doc-thumb4"> <ReactPlayer url='https://youtu.be/41GjOFF1DdA' width='200%'
        height='70%'/></div>


                        <div className="doc-area">

                            <ul>
                            <li className="exp-bx"> Décrypter les pleurs de bébé</li>
                            <div className="fleur">
                                <img className="doc-thumb2" src={img1}/>
                                <img className="doc-thumb3" src={img2} />
                                <img  className="doc-thumb1" src={img3} />
                            </div>

                            <li>
                                    <h6 class="parag2">
                                     Pleurer est une autre forme de communication pour un nourrisson. Il s'exprime dans un langage bébé pas très agréable pour son entourage, mais il faut le laisser faire et l'écouter. Il a beaucoup de choses à dire.
                                    Petite séance de décryptage :

                                    <li class="L">Quand les pleurs augmentent en intensité, et sont associés à des sons stridents, il exprime sa faim !</li>
                                    <li class="L">Quand ce sont des grognements, il a sans doute envie de dormir.</li>
                                    <li class="L">Si ses pleurs sont soudains, perçants et aigus, c’est parce qu’il ressent sûrement une douleur.</li>
                                    <li class="L"> Certains pleurs inconsolables peuvent notamment être dus à des coliques.</li>
                                    <li class="L">Quand il crie très fort et devient tout rouge, il manifeste sa colère ou sa frustration.</li>
                                    <li class="L">S’il pleure en continu en fin de journée, toujours à la même heure, il s'agit de la fameuse angoisse du soir. Ces crises l’aident à s’adapter à son nouveau rythme veille/sommeil et à se décharger des émotions de la journée.</li>
                                    </h6>
                                    </li>
                              

                            </ul>
                            </div>    
                    
                                     
            </section>
            <Footer title="Footer" smtitle="Footer"/>

        </>

    )


}

export default Doc;

