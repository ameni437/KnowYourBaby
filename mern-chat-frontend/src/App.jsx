import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/Layout/Layout'; 
import Acceuil from "./pages/Acceuil";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Chat from "./pages/Chat";
import { useSelector } from "react-redux";
import { useState } from "react";
import { AppContext, socket } from "./context/appContext";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Aboutus from "./pages/AboutUs";
import Doc from "./pages/Doc";
import Serv from "./pages/Serv";
import ServDet from "./pages/ServDet";
import Benarous from "./Zones/Benarous";
import Ariana from "./Zones/Ariana";
import Tunis from "./Zones/Tunis";
import Pediatre from "./pages/pediatre";



function App() {
    const [rooms, setRooms] = useState([]);
    const [currentRoom, setCurrentRoom] = useState([]);
    const [members, setMembers] = useState([]);
    const [messages, setMessages] = useState([]);
    const [privateMemberMsg, setPrivateMemberMsg] = useState({});
    const [newMessages, setNewMessages] = useState({});
    const user = useSelector((state) => state.user);
    return (
        <AppContext.Provider value={{ socket, currentRoom, setCurrentRoom, members, setMembers, messages, setMessages, privateMemberMsg, setPrivateMemberMsg, rooms, setRooms, newMessages, setNewMessages }}>
            <BrowserRouter>
                
                <Routes>
                <Route path="/" element={<Layout />} />
                <Route path="/home" element={<Home />} />
                <Route path="/contact" element={<Contact/>} />
                <Route path="/aboutUs" element={<Aboutus />} />
                <Route path="/doc" element={<Doc/>} />
                <Route path="/serv" element={<Serv/>} />
                <Route path="/servdet" element={<ServDet/>} />
               
                <Route path="/tunis" element={<Tunis/>} />
                <Route path="/ariana" element={<Ariana/>} />
                <Route path="/benarous" element={<Benarous/>} />
                

                <Route path="/pediatre" element={<Pediatre/>} />






                    <Route path="/acc" element={<Acceuil />} />
                    {!user && (
                        <>
                            <Route path="/login" element={<Login />} />
                            <Route path="/signup" element={<Signup />} />
                        </>
                    )}
                    <Route path="/chat" element={<Chat/>} />
                </Routes>
            </BrowserRouter>
        </AppContext.Provider>
    );
}

export default App;