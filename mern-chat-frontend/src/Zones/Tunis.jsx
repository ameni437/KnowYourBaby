import React from "react";
import "./Zone.css";
import imen from "../assets/imen.jfif";
import manel from "../assets/manel.jfif";
import rafla from "../assets/rafla.jpg";
import fedra from "../assets/fedra.jpg";
import nour from "../assets/nour.jfif";
import aziz from "../assets/aziz.jfif";

function Tunis() {
  return (
    <>
      <section className="readMore2">
        <div className="row">
          <div className="col-lg-4 col-mg-4">
            <div className="read2">
              <div className="age2">24 270 630 </div>
              <img className="img2" src={imen} />
              <i>Dr Ayadi IMENE</i>
              <hr />
              <p className="adresse ">
                Centre Médical ( Coral ) 7ème étage cabinet A7.5, Centre Urbain
                Nord Centre Urbain Nord 1082 Tunis Tunisie
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-mg-4">
            <div className="read2">
              <div className="age2">56 206 009</div>
              <img className="img2" src={manel} />
              <i>Dr Manel BOUSLAH GUESMI</i>
              <hr />
              <p className="adresse ">
                Residence Farah Lake, cabinet B1-10 Av Feuille d'Érable cité les
                pins,Les Berges du lac2 Tunis
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-lg-4">
            <div className="read2">
              <div className="age2">46 614 564</div>
              <img className="img2" src={rafla} />
              <i>Dr Rafla TEJ DELLAGI</i>
              <hr />
              <p className="adresse ">
                Av. Hedi Chaker -Residence Riadh ,bloc D, 1ier étage - La Marsa
                La Marsa 2078 Tunis Tunisies
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-lg-4">
            <div className="read2">
              <div className="age2">98 357 526</div>
              <img className="img2" src={fedra} />
              <i>Dr Fedra BENNOUR</i>
              <hr />
              <p className="adresse ">
                Bardo centre - Bloc 7- 2ème étage - Appartement 8 Le Bardo 2000
                Tunis Tunisie
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-lg-4">
            <div className="read2">
              <div className="age2">20 318 195</div>
              <img className="img2" src={nour} />
              <i>Dr Nourchène KHELIL CHARFEDDINE</i>
              <hr />
              <p className="adresse ">
                Le bardo médical 3ème étage bureau N°1 Le Bardo 2000 Tunis
                Tunisie
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-lg-4">
            <div className="read2">
                <div className="age2">98 647 353</div>
                <img className="img2" src={aziz} />
                <i>Dr Azaiez SOFIENE</i>
                <hr />
                <p className="adresse ">
                  59 av. Ennakhil, Ezzahrouni Ezzahrouni 2051 Tunis Tunisie
                </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Tunis;
