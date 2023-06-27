import React, { createContext, useContext } from "react";
import { useState } from "react";
import UserHeader from "../../components/headerUser";
import './dashboard.css';
import EditAccount  from "../../components/editAccount/indext";
import Popup from "../../components/popup";
import { Context } from "../../utiles/context/context";
import { useNavigate } from "react-router-dom";


export default function DashBoard () {
  const [isEdit, setIsEdit] = useState(false);
  // const {userCurrency} =  useContext(Context);
  const userInfo = JSON.parse(localStorage.getItem('currencyUser'));

  const handleClick = () => {
    setIsEdit(!isEdit);
  }


  return (
    <div>
      <UserHeader/>
      <div className="dashboard">
        <div className="balance">
          <h2>{userInfo.firstName}'s wallet </h2>
          <hr></hr>
          <h2 >Balance</h2>
          <p>USD balance : <b>USD</b> </p>
          <p>EUR balance : <b>EUR</b></p>
          <p>XAF balance : <b>XAF</b></p>
          {isEdit && <Popup
            content = {<>
              <EditAccount/>
            </>}
            handleClose = {handleClick}
          />}
          <div >
            <button
              className="btn-edit"
              onClick={handleClick}
            >
              Edit balance
            </button>
          </div>

        </div>
      </div>
      
      
    </div>
  );
}