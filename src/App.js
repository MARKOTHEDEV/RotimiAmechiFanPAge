import "./assets/css/bootstrap.css";
import "./assets/css/followCome.css"
import './App.css';
import Nav from "./Components/Nav";
import HeroSection from "./Components/HeroSection";
import AboutRotimi from "./Components/AboutRotimi";
import Aboutus from './Components/Aboutus'
import Goals from "./Components/Goals"
import Footer from "./Components/Footer"
import JoinForm from "./Components/JoinForm";
import { useState } from "react"
import Cards from "./Components/Cards";
const  App=()=>{

  const [ShowRegisterForm,setShowRegisterForm]=useState(false)
  return (
    <div className="App body-bg">
        <Nav setShowRegisterForm={setShowRegisterForm} />
        <HeroSection setShowRegisterForm={setShowRegisterForm} />
        <AboutRotimi />
        <Aboutus />
        <Goals/>

        <Cards />
        {/* <Cards /> */}
        <Footer/>
        <JoinForm 
        ShowRegisterForm={ShowRegisterForm}
        setShowRegisterForm={setShowRegisterForm} />

    </div>
  );
}

export default App;
