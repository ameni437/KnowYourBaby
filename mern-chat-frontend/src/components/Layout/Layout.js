import {React,Fragment } from "react";
import { Outlet } from "react-router-dom";
import Navbar from '../Nav/Navbar';
import Footer from "../Footer/Footer";
import ReadMore from "../ReadMore/ReadMore";
import Home from "../../pages/Home";


const Layout =()=>{
    return(
        <Fragment>
            <Navbar />
            <main>
                <Outlet/>
                <Home/>
                <ReadMore/>
            </main>
            <Footer/>
        </Fragment>
    )
}

export default Layout;