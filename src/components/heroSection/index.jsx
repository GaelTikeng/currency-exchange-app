import React, { useState } from "react";
import ReactModal from "react-modal";
import Header from "../header";
import SignupForm from "../signup";
import Popup from "../popup";
import { IconName, FaWallet } from "react-icons/fa";
import './hero.css'



export default function HeroSection () {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  }


  const handleClick = () => {
    
  }

  return (
    <div>
      <Header/>
      <div className="hero">
        <br></br>
        <div className="items" >
          <h2 className="first-text">
          Reliable Exchange Rates & Currency
          Conversion for your Business
          </h2>
          <p className="p-tag">The universal real-time exchange rate data solution</p>
          <div className="go">
            
          </div>
          {isOpen && <Popup
            content = {<>
              <SignupForm/>
            </>}
            handleClose = {togglePopup}
          />}
          <div className="two-bottons">
            <button
              className="botun"
              onClick={togglePopup}
            >Sign up now
            </button>
            <button
              onClick={handleClick}
              className="botton"
            >
              Learn more
            </button>
          </div>
        </div>
        <img className="image" src="https://img.freepik.com/free-photo/cheerful-young-asian-woman-holding-money-showing-display-phone_171337-8788.jpg"/>
      </div>
    </div>
    
  )
}