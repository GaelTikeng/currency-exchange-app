import React, { createContext, useContext } from "react";
import { useState, useEffect } from "react";
import UserHeader from "../../components/headerUser";
import './dashboard.css';
import EditAccount  from "../../components/editAccount/indext";
import Popup from "../../components/popup";
import { Context } from "../../utiles/context/context";
import { useNavigate } from "react-router-dom";


export default function DashBoard () {
  const [isEdit, setIsEdit] = useState(false);
  const [currency, setCurrency] = useState({});
  const [currency1, setCurrency1] = useState('');
  const [currency2, setCurrency2] = useState('');
  const money = JSON.parse(localStorage.getItem('money'));
  const [usd, setUsd] = useState(money.UsdBalance);
  const [eur, setEur] = useState(money.EurBalance);
  const [xaf, setXaf] = useState(money.XafBalance);
  // const {userCurrency} =  useContext(Context);
  const userInfo = JSON.parse(localStorage.getItem('currencyUser'));
  

  const getCurrency = () => {
    // const url = "https://api.currencyapi.com/v3/latest?apikey=0Sf1rTsrRudBO39VADHO1Ro3f4CsLoIAAAcwjBdd"

    const url = "http://data.fixer.io/api/latest?access_key=cb1ba0a89400455bef300779f0f2c464&format=1&_gl=1*1hxkb1x*_ga*MTQzNjI5Mzc5OC4xNjg3NTAyNDE1*_ga_HGV43FGGVM*MTY4NzkwNDE0OC43LjEuMTY4NzkwNDI3My4zLjAuMA.."

    fetch(url)
      .then ((response) => {
        return response.json()
      })
      .then (data => {
        setCurrency(data)
      })

  }

  // useEffect (() => {
  //   getCurrency();
  // }, [])


  const handleClick = () => {
    setIsEdit(!isEdit);
    console.log("fetched data", currency.rates.USD)
  }

  const handleConvert = () => {
    if (currency1 != "" && currency2 != "") {
      if (currency1 == 'EUR' && currency2 == "USD") {
        console.log('second condition')
        setUsd ((usd * currency.rates.USD).toFixed(2));
        setEur('0.00');
      } else if (currency1 == 'EUR' && currency2 == 'XAF') {
        setXaf((xaf * currency.rates.XAF.toFixed(2)));
        setEur('0.00');
      } else if (currency1 == 'USD' && currency2 == 'EUR') {
        setEur((usd / currency.rates.USD + eur).toFixed(2));
        setUsd('0.00');
      }
    }

  }

  const handleChange1 = (money1) => {
    setCurrency1(money1.target.value);
  }

  const handleChange2 = (money2) => {
    setCurrency2(money2.target.value);
  }



  return (
    <div>
      <UserHeader/>
      <div className="dashboard">
        <div className="balance">
          <h2>{userInfo.firstName}'s wallet </h2>
          <hr></hr>
          <h2 >Balance</h2>
          <p>USD balance : <b>{usd} USD</b></p>
          <p>EUR balance : <b>{eur} EUR</b></p>
          <p>XAF balance : <b>{xaf} XAF</b></p>
          {/* <p>Totalised values in USD : <b>USD</b></p>
          <p>Totalised values in EUR : <b>EUR</b></p> */}
          {isEdit && <Popup
            content = {<>
              <EditAccount/>
            </>}
            handleClose = {handleClick}
          />}
          
          <button
            className="btn-edit"
            onClick={handleClick}
          >
            Edit balance
          </button>
          
        </div>
        <div>
            <h3>Convert your currency</h3>
            <div className="convert-currency">
              <p>From</p>
              <select onChange={handleChange1}>
                <option disabled selected value>select currency</option>
                <option>USD</option>
                <option>EUR</option>
                <option>XAF</option>
              </select>
              <p>To</p>
              <select onChange={handleChange2}>
                <option disabled selected value>select currency</option>
                <option>USD</option>
                <option>EUR</option>
                <option>XAF</option>
              </select>
              <button
                className="convert"
                onClick={handleConvert}              >
                Convert
              </button>
            </div>
            <h3>
              Totalised values in
              <br></br>
              <select>
                <option disabled selected value>select currency</option>
                <option>USD</option>
                <option>EUR</option>
                <option>XAF</option>
              </select>
            </h3>
          </div>
      </div>
      
      
    </div>
  );
}