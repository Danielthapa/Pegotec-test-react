import React, { useState } from "react";
import request from "../../utils/request";
import Layout from "../Layout";
import StyledLoginPage from "./style";

const LoginPage = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassowrd] = useState("");

  const handleChangeUserName = (e) => {
    e.preventDefault();
    setUserName(e.target.value);
  };

  const handleChangePassword = (e) => {
    e.preventDefault();
    setPassowrd(e.target.value);
  };

  const handleSubmit = () => {
    const res = request("https://api.framework.pegotec.dev/api/auth/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: userName,
        password,
      }),
    });
    console.log('response', res);
  };

  return (
    <Layout currentPage="Login">
      <StyledLoginPage>
        <div className="card white-card">
          <div className="login-header">
            <span className="main-header">Login</span>
            <span className="header-subtext">
              Please enter your details to get sign in to your account
            </span>
          </div>
          <div className="input-container">
            <div className="input-group flex-nowrap">
              <span className="input-group-text" id="addon-wrapping">
                Username
              </span>
              <input
                type="text"
                value={userName}
                onChange={(e) => handleChangeUserName(e)}
                className="form-control"
                placeholder="Username"
                aria-label="Username"
                aria-describedby="addon-wrapping"
              />
            </div>
            <div className="input-group flex-nowrap">
              <span className="input-group-text" id="addon-wrapping">
                Password
              </span>
              <input
                type="text"
                value={password}
                onChange={(e) => handleChangePassword(e)}
                className="form-control"
                placeholder="Password"
                aria-label="Password"
                aria-describedby="addon-wrapping"
              />
            </div>
          </div>
          <div className="footer-container">
            <button
              onClick={() => handleSubmit()}
              type="button"
              className="btn btn-primary btn-lg"
            >
              Submit
            </button>
          </div>
        </div>
      </StyledLoginPage>
    </Layout>
  );
};

export default LoginPage;
