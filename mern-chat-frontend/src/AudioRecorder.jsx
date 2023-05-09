import { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrophone, faToggleOn, faToggleOff, faSave, faRegistered, faReceipt, faArrowAltCircleLeft, faVolumeUp, faVolumeControlPhone, faVolumeXmark, faVolumeHigh, faShare, faDownload } from "@fortawesome/free-solid-svg-icons";
import './AudioRecorder.css';




const mimeType = "audio/wav";

const AudioRecorder = () => {
	const [permission, setPermission] = useState(false);

	const mediaRecorder = useRef(null);

	const [recordingStatus, setRecordingStatus] = useState("inactive");

	const [stream, setStream] = useState(null);

	const [audio, setAudio] = useState(null);

	const [audioChunks, setAudioChunks] = useState([]);
	const [val, setVal] = useState(null);

	const getMicrophonePermission = async () => {
		if ("MediaRecorder" in window) {
			try {
				const mediaStream = await navigator.mediaDevices.getUserMedia({
					audio: true,
					video: false,
				});
				setPermission(true);
				setStream(mediaStream);
			} catch (err) {
				alert(err.message);
			}
		} else {
			alert("The MediaRecorder API is not supported in your browser.");
		}
	};

	const startRecording = async () => {
		setRecordingStatus("recording");
		const media = new MediaRecorder(stream, { type: mimeType });

		mediaRecorder.current = media;

		mediaRecorder.current.start();

		let localAudioChunks = [];

		mediaRecorder.current.ondataavailable = (event) => {
			if (typeof event.data === "undefined") return;
			if (event.data.size === 0) return;
			localAudioChunks.push(event.data);
		};

		setAudioChunks(localAudioChunks);
	};

	const stopRecording = () => {
		setRecordingStatus("inactive");
		mediaRecorder.current.stop();

		mediaRecorder.current.onstop = () => {
			const audioBlob = new Blob(audioChunks, { type: mimeType });
			const audioUrl = URL.createObjectURL(audioBlob);

			setAudio(audioUrl);

			setAudioChunks([]);
		};
	};

	const predict =async() =>{

		const substr = audio.slice(27);
		 
		
	    await fetch("http://localhost:5000/predict", {
				method: "POST",
				headers:{
					"content-type":"application/json"
				  },
				body: JSON.stringify({'filename': 'D:/OneDrive/Bureau/donateacry-corpus-master/donateacry_corpus_cleaned_and_updated_data/B2AABCE0-1F62-4B57-B58A-308959ABDFE7-1437188751-1.1-m-26-ti.wav'})
			})
			.then(response => response.json())
			.then(data => {
				setVal(data["prediction"]);
			});	
	}
	



	return (
		<div className="recorder_wrapper">
			<main>
				<div className="audio-controls">
					{!permission ? (
						<button onClick={getMicrophonePermission} type="button" className="btn-extern" >
							<FontAwesomeIcon icon={faMicrophone}/>  Obtenir le micro
						</button>
					) : null}
					{permission && recordingStatus === "inactive" ? (
						<button onClick={startRecording} type="button" className="record_btn">
							<FontAwesomeIcon icon={faToggleOn}/> Commencer l'enregistrement
						</button>
					) : null}
					{recordingStatus === "recording" ? (
						<button onClick={stopRecording} type="button" className="record2_btn">
							<FontAwesomeIcon icon={faToggleOff}/> Arrêter d'enregistrer
						</button>
					) : null}
				</div>


				{audio ? (
					<div className="audio-player">
						<audio src={audio} controls></audio>

						<FontAwesomeIcon icon={faDownload} />

						<a download href={audio} className="download">
							Enregister 
						</a>
						<div >
							
						<button className="btn-predict" onClick={predict}>Prediction</button>
                        <div>
							{val}</div>

						</div>
					</div>
				) : null}
			</main>
		</div>
	);
};

export default AudioRecorder;