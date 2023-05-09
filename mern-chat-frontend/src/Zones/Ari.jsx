import React from "react";
import "./Zone.css";
import dhouha from "../assets/dhaouha.jpg";
import raja from "../assets/raja.jfif";
import nadia from "../assets/nadia.jfif";
import tarek from "../assets/tarek.jfif";

function Ari() {
  return (
    <>
      <section className="readMore2">
        <div className="row">
          <div className="col-lg-4 col-lg-4">
            <div className="read2">
              <div className="age2">52 558 661</div>
              <img className="img2" src={dhouha} />
              <i>Dr Dhouha RIAHI</i>
              <hr />
              <p className="adresse ">
                Centre lawand cabinet D2-8 ibn sina ouradia Ibn Sina 2066 Tunis
                Tunisie
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-lg-4">
            <div className="read2">
              <div className="age2">56 056 057</div>
              <img className="img2" src={raja} />
              <i>Dr Raja BAHRI</i>
              <hr />
              <p className="adresse ">
                121 Rue l'ère nouvelle , centre médical Abou el kacem chebbi ;
                1ére étage App N12- (en face clinique ennasr) Cité Ennasr 2 2037
                Ariana Tunisie
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-lg-4">
            <div className="read2">
              <div className="age2">96 087 860</div>
              <img className="img2" src={nadia} />
              <i>Dr Nadia GUELLOUZ NAJJAR</i>
              <hr />
              <p className="adresse ">
                Complexe Vital Cube 2 ème étage Cabinet V 2-2 Rue Tasmanie -
                Berges du Lac 2s
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-lg-4">
            <div className="read2">
              <div className="age2">27 201 777</div>
              <img className="img2" src={tarek} />
              <i>Dr Tarek EL AKKAD</i>
              <hr />
              <p className="adresse ">
                Avenue de l'Ere Nouvelle Centre Kammoun Médical 2001- Cité
                Ennasr, Ariana Cité Ennasr 2 2037 Ariana Tunisie
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Ari;
