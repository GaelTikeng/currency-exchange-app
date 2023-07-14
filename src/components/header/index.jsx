import React, { useState } from "react";
import LoginForm from "../login/login";
import './header.css';
import Popup from "../popup";
import SignupForm from "../signup";


export default function Header () {
  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  }

  const handleClickSignUp = () => {
    setOpen(!open)
  }

  return (
    <div className="header">
      <h2 className="logo">C- exchange</h2>
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
        {open && <Popup
          content = {<>
            <SignupForm/>
          </>}
          handleClose = {handleClickSignUp}
        />}
        <p
          onClick={handleClick}
          className="p-tags"
        >
          Sign in
        </p>
        <button
          className="btn"
          onClick={handleClickSignUp}
        >
          Sign up free
        </button>
      </div>
    </div>
  )
}