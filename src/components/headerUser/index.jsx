import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './headerUser.css'; 



export default function UserHeader () {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const userInfo = JSON.parse(localStorage.getItem('currencyUser'));
   

  const handleClick = () => {
    navigate('/')
    setIsOpen(!isOpen);
  }

  return (
    <div className="headers">
      <h2 className="logo">Cexchange</h2>
      <div className="info">
        <p className="p-tags">About</p>
        <p className="p-tags">Market</p>
        <p className="p-tags">Contact</p>
        <p className="user">{userInfo.firstName} </p>
        <button
          className="btn"
          onClick={handleClick}
        >
          Logout
        </button>
      </div>
    </div>
  )
}