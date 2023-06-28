import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import "./login.css";

export default function LoginForm() {
  const [userName, setUserName] = useState("");
  const [passWord, setPassWord] = useState("");
  const [isSumitting, setIsSumitting] = useState(false);
  const [isUser, setIsUser] = useState(false);
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("currencyUser"));
  const username = user.firstName + user.lastName;

  const handleClick = (event) => {
    event.preventDefault();
    console.log(user.password);
    console.log(user);
    if (username == userName && passWord == user.password) {
      setIsSumitting(true);
      navigate('./dashboard');
    } else {
      setIsUser(true);
    }
  };
  return (
    <div className="first-container">
      <h1>Cexchange</h1>
      <FaUser className="user-icon" />
      <h3>Login</h3>
      <hr></hr>
      <form className="form">
        <lable for="name">Username</lable>
        <input
          type="text"
          placeholder="Ente username"
          className="input"
          name="username"
          value={userName}
          onChange={(event) => {
            setUserName(event.target.value);
          }}
          required
        />
        <label for="name">Password</label>
        <input
          type="password"
          name="password"
          className="input"
          value={passWord}
          onChange={(e) => {
            setPassWord(e.target.value);
          }}
          required
        />
        <lable>
          <input type="checkbox" />
          Remember me
        </lable>
        {isSumitting ? (
          <p style={{ color: "Green", fontStyle: "italic" }}>
            Welcome {userName}
          </p>
        ) : (
          ""
        )}
        {isUser ? (
          <div style={{ color: "red" }}>wrong password or userName</div>
        ) : (
          ""
        )}

        <button type="submit" className="submit" onClick={handleClick}>
          Login
        </button>
      </form>
    </div>
  );
}
