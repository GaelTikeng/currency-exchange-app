import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
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
      <h2 className="logo">C-exchange</h2>
      <div className="info">
        <p className="p-tags about">About</p>
        <p className="p-tags market">Market</p>
        <p className="p-tags contact">Contact</p>
        <p className="user">{userInfo.firstName} </p>
        <FiLogOut
          className="icon-fi"
          onClick={handleClick}
        />
      </div>
    </div>
  )
}