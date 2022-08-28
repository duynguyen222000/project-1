import axios from "axios";
import React, { useState } from "react";
import "./LoginForm.scss";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { LOGIN_SAGA } from "../../redux/contants/contants";
export const LoginFrom = () => {
  const [valueForm, setValueForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleChageValue = (e) => {
    const { name, value } = e.target;
    setValueForm({ ...valueForm, [name]: value });
  };
  const handleSubmitForm = (e) => {
    e.preventDefault();
    handleLoginApi();
  };
  const handleLoginApi = async () => {
    await dispatch({
      type: LOGIN_SAGA,
      dataUser: valueForm,
      navigate,
    });
  };

  return (
    <div className="form-login d-flex justify-content-center align-items-center">
      <div className="container ">
        <div className="d-flex justify-content-center align-items-center ">
          <form style={{ width: "500px" }}>
            <div className="form-outline mb-4">
              <input
                onChange={handleChageValue}
                name="email"
                type="email"
                id="form1Example1"
                className="form-control"
              />
              <label className="form-label" htmlFor="form1Example1">
                Email address
              </label>
            </div>
            {/* Password input */}
            <div className="form-outline mb-4">
              <input
                onChange={handleChageValue}
                name="password"
                type="password"
                id="form1Example2"
                className="form-control"
              />
              <label className="form-label" htmlFor="form1Example2">
                Password
              </label>
            </div>
            {/* 2 column grid layout for inline styling */}
            <div className="row mb-4">
              <div className="col d-flex justify-content-center">
                {/* Checkbox */}
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultValue
                    id="form1Example3"
                    defaultChecked
                  />
                  <label className="form-check-label" htmlFor="form1Example3">
                    {" "}
                    Remember me{" "}
                  </label>
                </div>
              </div>
              <div className="col">
                {/* Simple link */}
                <a href="#!">Forgot password?</a>
              </div>
            </div>
            {/* Submit button */}
            <Link
              to="/admin"
              onClick={handleSubmitForm}
              className="btn btn-primary btn-block"
            >
              Sign in
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};
