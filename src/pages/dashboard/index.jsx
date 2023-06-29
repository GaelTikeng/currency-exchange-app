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
  const [isUsd, setIsUsd] = useState(false);
  const [isEur, setIsEur] = useState(false);
  const [isXaf, setIsXaf] = useState(false);
  const [totalUsd, setTotalUsd] = useState(0)
  const [totalEur, setTotalEur] = useState(0)
  const [totalXaf, setTotalXaf] = useState(0)

  const [currency, setCurrency] = useState({});
  const [currency1, setCurrency1] = useState('');
  const [currency2, setCurrency2] = useState('');
  const [totalValue, setTotalValue] = useState('');
  const money = JSON.parse(localStorage.getItem('money'));
  const [usd, setUsd] = useState(money.UsdBalance);
  const [eur, setEur] = useState(money.EurBalance);
  const [xaf, setXaf] = useState(money.XafBalance);
  // const {userCurrency} =  useContext(Context);
  const userInfo = JSON.parse(localStorage.getItem('currencyUser'));
  
  let res = 0;
  const getCurrency = () => {
    const url = "https://api.currencyapi.com/v3/latest?apikey=0Sf1rTsrRudBO39VADHO1Ro3f4CsLoIAAAcwjBdd"

    // const url = "http://data.fixer.io/api/latest?access_key=cb1ba0a89400455bef300779f0f2c464&format=1&_gl=1*1hxkb1x*_ga*MTQzNjI5Mzc5OC4xNjg3NTAyNDE1*_ga_HGV43FGGVM*MTY4NzkwNDE0OC43LjEuMTY4NzkwNDI3My4zLjAuMA.."

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
    console.log("fetched data", currency.data)
  }

  const handleConvert = () => {
    if (currency1 != "" && currency2 != "") {
      if (currency1 == 'EUR' && currency2 == "USD") {
        console.log('second condition')
        setUsd ((eur / currency.data.EUR.value + usd).toFixed(2));
        setEur('0.00');
      } else if (currency1 == 'EUR' && currency2 == 'XAF') {
        setXaf((eur * 650 + xaf).toFixed(2));
        setEur('0.00');
        console.log('XAF conversion')
      } else if (currency1 == 'USD' && currency2 == 'EUR') {
        setEur((usd * currency.data.EUR.value + eur).toFixed(2));
        setUsd('0.00');
      } else if (currency1 === 'XAF' && currency2 === 'EUR') {
        setEur((xaf / 650 + eur).toFixed(2));
        setXaf('0.00');
      } else if (currency1 === 'XAF' && currency2 === 'USD') {
        setUsd((xaf / currency.data.XAF.value + usd).toFixed(2));
        setXaf('0.00');
      } else if (currency1 === 'USD' && currency2 === 'XAF') {
        // res = usd * currency.rates.XAF;
        setXaf((usd * currency.data.XAF.value + xaf).toFixed(2));
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

  const handleChange3 = (money3) => {
    setTotalValue(money3.target.value);
  }

  const handleTotalValue = () => {
    if (totalValue != '') {
      if (totalValue === 'USD') {
        setTotalUsd((eur / currency.data.EUR.value + xaf / currency.data.XAF.value + usd).toFixed(2));
        setIsUsd(true);
      } else if (totalValue === 'EUR') {
        setTotalEur((usd * currency.data.EUR.value + xaf / 650 + eur).toFixed(2));
        setIsEur(true);
      } else if (totalValue === 'XAF') {
        setTotalXaf((usd * currency.data.XAF.value + eur * 650 + xaf).toFixed(2));
        setIsXaf(true);
      }
    }
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
          {isEdit && <Popup
            content = {<>
              <EditAccount/>
            </>}
            handleClose = {handleClick}
          />}

          {isUsd && <p>Totalised value in <b>{totalValue}</b> is <b>{totalUsd} {totalValue}</b> </p>}
          {isEur && <p>Totalised value in <b>{totalValue}</b> is <b>{totalEur} {totalValue}</b> </p>}
          {isXaf && <p>Totalised value in <b>{totalValue}</b> is <b>{totalXaf} {totalValue}</b> </p>}
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
                onClick={handleConvert}
                >
                Convert
              </button>
            </div>
            <h3>
              Totalised values in
              <br></br>
              <select onChange={handleChange3}>
                <option disabled selected value>select currency</option>
                <option>USD</option>
                <option>EUR</option>
                <option>XAF</option>
              </select>
            </h3>
            <button
              className="chf"
              onClick={handleTotalValue}
            >
              Calculate
            </button>
          </div>
      </div>
      
      
    </div>
  );
}