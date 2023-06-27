import React, { useState } from "react";
import { Formik, Form, useField } from 'formik';
import { MyTextInput } from "../signup";
import './editAccount.css';



export default function EditAccount () {
  const [usd, setUsd] = useState('');
  const [eur, setEur] = useState('');
  const [xaf, setXaf] = useState('');


  const handleChangeUsd = (e) => {
    e.preventDefault()
    setUsd(e.target.value);
  }

  const handleChangeEur = (event) => {
    event.preventDefault()
    setEur(event.target.value);
  }

  const handleChangeXaf = (ev) => {
    ev.preventDefault()
    setXaf(ev.target.value);
  }

  const handleSave = (e) => {
    e.preventDefault();
    console.log(usd);
  }
  return (
    <div className="edit">
      <h2>Edit Balance</h2>
      <hr></hr>
      <Formik
        initialValues = {{
          UsdBalance: '',
          EurBalance:'',
          XafBalance:'',
        }}
        onSubmit={(money, { setSubmitting }) => {
          setTimeout(() => {
            localStorage.setItem('money', JSON.stringify(money));
            alert(JSON.stringify(money, null, 2));
            setSubmitting(false);
          }, 100);
          
        }}
      >
        <Form className="formStyle">
          <MyTextInput
            className="money"
            label= "USD balance"
            name="UsdBalance"
            type="number"
            placeholder="Amount in usd"
          />
          <MyTextInput
            className="money"
            label= "EUR balance"
            name="EurBalance"
            type="number"
            placeholder="Amount in eur"
          />
          <MyTextInput
            label= "XAF balance"
            className="money"
            name="XafBalance"
            type="number"
            placeholder="Amount in xaf"
          />
          <div className="two-buttons">
            
            <button
              className="bot"
            >
              Save
            </button>
            <button
              onClick={handleSave}
              className="cancel">
              
              cancel
            </button>
          </div>
        </Form>
        
        
      </Formik>
      {/* <form className="formStyle">
        <label>
          USD balance :
          <input
            className="money"
            type="number"
            placeholder="Amount in USD"
            onChange={handleChangeUsd}
            // value={usd}
          />
        </label>
        <label>
        EUR balance :
        <input
          className="money"
          type="number"
          placeholder="Amount in EUR"
          onChange={handleChangeEur}
          // value={eur}
        />
      </label>
      <label>
        XAF balance :
        <input
          className="money"
          type="number"
          placeholder="Amount in XAF"
          onChange={handleChangeXaf}
          // value={xaf}
        />
      </label>
      <div className="two-buttons">
        <button className="cancel">
          cancel
        </button>
        <button
          className="bot"
          onClick={handleSave}
        >
          Save
        </button>
      </div>
      
      </form> */}
      
    </div>
  )
}