import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import "./login.css";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [passWord, setPassWord] = useState("");
  const [isSumitting, setIsSumitting] = useState(false);
  const [isUser, setIsUser] = useState(false);
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("currencyUser"));

  const handleClick = (event) => {
    event.preventDefault();
    if (user.email === email) {
      setIsSumitting(true);
      navigate("./dashboard");
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
        <lable for="name">Email address</lable>
        <input
          type="text"
          placeholder="Enter Email"
          className="input"
          name="username"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
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
            Successfully login
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
