import React, { useState } from "react";
import Popup from "../popup";
import LoginForm from "../login/login";
import './header.css';



export default function Header () {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className="header">
      <h2 className="logo">Cexchange</h2>
      <div className="info">
        <p className="p-tags">About</p>
        <p className="p-tags">Market</p>
        <p className="p-tags">Contact</p>
        {isOpen && <Popup
          content = {<>
            <LoginForm />
          </>}
          handleClose = {handleClick}
        />}
        <p
          onClick={handleClick}
          className="p-tags"
        >
          Sign in
        </p>
        <button className="btn">Sign up free</button>
      </div>
    </div>
  )
}