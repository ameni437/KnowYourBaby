import React from "react";
import Banner from "../components/Banner/Banner";
import Navbar from "../components/Nav/Navbar";
import Footer from "../components/Footer/Footer";
import img1 from "../assets/ban.jpg";
import img2 from "../assets/113.jpg";
import img3 from "../assets/111.jfif";
import './ServDet.css';

const ServDet = () => {
  return (
    <>
      <Navbar title="Navbar" smtitle="Navbar" />
      <Banner title="Plus de détails" smtitle="Plus de détails" />
      <section className="about-us">
        <div className="col-lg-6 col-md-30">
          <div className="about-area">
            <ul>
              <img className="about-thumb1" src={img1} />
              <img className="about-thumb2" src={img2} />
              <img className="about-thumb3" src={img3} />
              <div className="exp-bx">Description:</div>
            </ul>
          </div>
        </div>
        <div className="col-lg-6 col-md-30">
          <div class="heading-bx">
            <h2 class="title">
              Aider les parents à mieux comprendre leurs bébés.
            </h2>
            <p class="la-parag2">
              Les applications dédiées aux parents et bébés sont de plus en plus
              populaires à mesure que les parents recherchent des moyens
              pratiques et efficaces pour suivre les étapes de développement de
              leur enfant, trouver des informations sur les soins de santé, la
              nutrition et le sommeil, et interagir avec d’autres parents. Ces
              applications peuvent aider les parents à rester organisés et à
              suivre les habitudes alimentaires, les couches, les rendez-vous
              chez le médecin et d’autres activités importantes liées à la
              parentalité. Certaines applications sont également conçues pour
              aider les bébés à dormir en proposant des sons apaisants ou des
              routines de sommeil.
            </p>
          </div>
        </div>

          <div class="heading-bx">
            <h2 class="title2">
            Comment serait alors notre besoin à une application qui traduit
            les pleures des bébés ?            </h2>
            <p class="la-parag3">
            Comprendre les besoins des bébés peut être une tâche difficile pour de nombreux parents,
            surtout pour les nouveaux parents qui manquent d’expérience. Les bébés ne peuvent pas
            communiquer avec des mots et leur langage corporel est souvent difficile à interpréter. En
            outre, les besoins des bébés évoluent rapidement au fur et à mesure qu’ils grandissent, ce
            qui peut rendre difficile pour les parents de suivre leurs besoins en constante évolution.
            Les bébés ont des besoins de base tels que la nourriture, le sommeil, les soins d’hygiène, l’attention et la stimulation. Les signes de faim ou de fatigue peuvent être difficiles à repérer,
en particulier pour les parents qui manquent de sommeil ou sont stressés. De plus, chaque
bébé est unique et peut avoir des besoins différents. Par conséquent, il est important pour
les parents de prendre le temps d’apprendre à connaître leur bébé et de se familiariser avec
ses signaux et ses besoins individuels.
De ce besoin est née l’idée d’une application web évoluée qui traduit les pleurs des bébés
et qui peut être très utile pour les parents qui ont des difficultés à comprendre les besoins
de leur bébé. Les avantages de la technologie web que vous avez mentionnés, tels que la
facilité d’utilisation, la mobilité et la maintenance externalisée, peuvent également être très
bénéfiques pour les utilisateurs.
Cependant, il convient de noter que la traduction des pleurs des bébés peut être un défi
complexe pour l’intelligence artificielle. Les pleurs des bébés peuvent être influencés par de
nombreux facteurs tels que la faim, la fatigue, l’inconfort, la douleur ou encore les coliques.
Les pleurs peuvent également varier en fonction de l’âge, du sexe et de la personnalité du
bébé.
La création d’un module d’intelligence artificielle pour analyser les pleurs des bébés nécessiterait une grande quantité de données pour l’entraînement du modèle. Il serait également
important de s’assurer que l’application est fiable et précise pour éviter de fausses interprétations des pleurs des bébés.
            </p>
          </div>
      </section>
      <Footer title="Footer" smtitle="Footer" />
    </>
  );
};

export default ServDet;
