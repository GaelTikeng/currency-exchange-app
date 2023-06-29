import React, { useState } from "react";
import ReactModal from "react-modal";
import Header from "../header";
import SignupForm from "../signup";
import Popup from "../popup";
import { IconName, FaWallet } from "react-icons/fa";
import "./hero.css";

export default function HeroSection() {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const handleClick = () => {};

  return (
    <div className="all-section">
      <Header />
      <div className="hero">
        <br></br>
        <div className="items">
          <h2 className="first-text">
            Reliable Exchange Rates & Currency Conversion for your Business
          </h2>
          <p className="p-tag">
            The universal real-time exchange rate data solution.
          </p>
          <p className="p-tag">A powerful yet simple currency converter</p>
          {isOpen && (
            <Popup
              content={
                <>
                  <SignupForm />
                </>
              }
              handleClose={togglePopup}
            />
          )}
          <div className="two-bottons">
            <button className="botun" onClick={togglePopup}>
              Sign up now
            </button>
            <button onClick={handleClick} className="botton">
              <a href="#learn-more">Learn more</a>
            </button>
          </div>
        </div>
        <img
          className="image"
          src="https://img.freepik.com/free-photo/cheerful-young-asian-woman-holding-money-showing-display-phone_171337-8788.jpg"
        />
      </div>
      <div id="learn-more">
        <article>
          <h1>HOW IT WORK</h1>
          <p>
            Cexchange is a currency app that can exchange between Dollars, Euro and XAF. Cexchange can handle 3 currencies and exchange them within each other.
            E.g. John Doe's wallet (Default currency = USD)
          
            USD balance: 100 USD 
            EUR balance: 500 EUR
            XAF balance: 10000 XAF
            Totalized value in USD = 736.667 USD
            Users are be able to exchange from one currency to the other one. Hence, John can decide to exchange his 100 USD to his Euro account. After the conversion, he will end up having: Considering 1 EUR = 1.24 USD
            USD balance: 0 USD
            EUR balance: 580.42 EUR
            XAF balance: 10000 XAF
            Totalized value in USD = 736.667 USD
          </p>
        </article>
      </div>
    </div>
  );
}
