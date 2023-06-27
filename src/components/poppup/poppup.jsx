import React from "react";
import './poppup.css';


const function Poppup = (props) => {

  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}>
          x
        </span>
        {props.content}
      </div>
    </div>
  );
};
export default function Poppup ();