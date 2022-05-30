import React from "react";
import Layout from "../Layout";
import StyledRegistrationForm from "./style.";

const RegistrationForm = () => {
  return (
    <Layout currentPage="Registration">
      <StyledRegistrationForm>
        <div className="card white-card">
          <div className="header-container">
            <span className="main-header">Registration</span>
            <span className="header-subtext">
              Please enter company registration details
            </span>
          </div>
          <div className="input-container">
            <div className="input-group flex-nowrap">
              <span className="input-group-text" id="addon-wrapping">
                Company Name
              </span>
              <input
                type="text"
                // value={userName}
                // onChange={(e) => handleChangeUserName(e)}
                className="form-control"
                placeholder="Username"
                aria-label="Username"
                aria-describedby="addon-wrapping"
              />
            </div>
            <div className="input-group flex-nowrap">
              <span className="input-group-text" id="addon-wrapping">
                Email
              </span>
              <input
                type="text"
                // value={password}
                // onChange={(e) => handleChangePassword(e)}
                className="form-control"
                placeholder="Password"
                aria-label="Password"
                aria-describedby="addon-wrapping"
              />
            </div>
          </div>
          <div className="footer-container">
            <button
              //   onClick={() => handleSubmit()}
              type="button"
              className="btn btn-primary btn-lg"
            >
              Submit
            </button>
          </div>
        </div>
      </StyledRegistrationForm>
    </Layout>
  );
};

export default RegistrationForm;
