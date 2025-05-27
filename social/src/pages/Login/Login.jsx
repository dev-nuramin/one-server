import React from "react";
import { BiLogoFacebookSquare } from "react-icons/bi";
import "./Login.scss"; // Importing styles specific to the Login component
// This component renders a login form with fields for username and password, and a button to log in.
const Login = () => {
  return (
    <>
      <div className="login_container">
        <div className="login_wrapper">
          <a href="#" className="login_logo_link">
            <a href="https://imgbb.com/">
              <img
                src="https://i.ibb.co/Q7vRZbD4/Screenshot-2.png"
                alt="Screenshot-2"
                border="0"
              />
            </a>
          </a>
          <form action="#" className="login_form">
            <input
              type="text"
              className="login_name"
              placeholder="username phone or email"
            />
            <input
              type="password"
              className="login_password"
              placeholder="password"
            />
            <button className="login_button">Log In</button>
          </form>
          <div className="divider">
            <p>OR</p>
          </div>
          <div className="login_fb">
            <a href="#" className="login_fb_link">
              <a href="#">
                <BiLogoFacebookSquare />
                Log in with facebook
              </a>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
