import React from "react";
import { Formik, Form } from "formik";
import { MyTextInput } from "../signup";
import "./editAccount.css";

export default function EditAccount() {

  const handleSave = (e) => {
    e.preventDefault();

  };

  const handleCancel = () => {

  }

  return (
    <div className="edit">
      <h2>Edit Balance</h2>
      <hr></hr>
      <Formik
        initialValues={{
          UsdBalance: "",
          EurBalance: "",
          XafBalance: "",
        }}
        onSubmit={(money, { setSubmitting }) => {
          setTimeout(() => {
            localStorage.setItem("money", JSON.stringify(money));
            setSubmitting(false);
          }, 100);
        }}
      >
        <Form className="formStyle">
          <MyTextInput
            className="money"
            label="USD balance"
            name="UsdBalance"
            type="number"
            placeholder="Amount in usd"
          />
          <MyTextInput
            className="money"
            label="EUR balance"
            name="EurBalance"
            type="number"
            placeholder="Amount in eur"
          />
          <MyTextInput
            label="XAF balance"
            className="money"
            name="XafBalance"
            type="number"
            placeholder="Amount in xaf"
          />
          <div className="two-buttons">
            <button onClick={handleCancel} className="bot">Save</button>
            <button onClick={handleSave} className="cancel">
              cancel
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}
