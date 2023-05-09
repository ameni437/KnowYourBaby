import React from "react";
import { useState } from "react";
import "./Serv.css";
import Banner from "../components/Banner/Banner";
import Navbar from "../components/Nav/Navbar";
import Footer from "../components/Footer/Footer";
import AudioRecorder from "../AudioRecorder.jsx";
import headerimg from "../assets/pleure.jpg";


const Serv = () => {
  let [recordOption, setRecordOption] = useState("video");

  const toggleRecordOption = (type) => {
    return () => {
      setRecordOption(type);
    };
  };

  return (
	<div >
		<Navbar />
		<Banner title="enregistreur audio" smtitle="enregis_audio" />	
		<div className="tt-page">
    	<div className="row">
			<div className="col-md-6 col-lg-6">
       			 <div className="homepage-container">
          			<h1 className="homepage-title">enregistrer les pleures de votre bébé</h1>
          			
          			<div>
          				{recordOption = "audio" ? <AudioRecorder /> : <AudioRecorder />}
        			</div>
        		</div>
     		</div>
      		<div className="col-md-6 col-lg-6">
        		<div className="header-box">
         			 <img src={headerimg} />
        		</div>
			</div>
       
      		
  
		</div>

		<Footer title="Footer" smtitle="Footer" />
		
   		 </div>
	</div>
  );
};

export default Serv;
