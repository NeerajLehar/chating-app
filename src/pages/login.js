import React from "react"
import Input from "../components/input/input"
import { Link } from "@reach/router"
import Button from "../components/button/button"
import style from "../styles/login/login.scss"
import GoogleImg from "../images/social-icon/google.svg"
import faceBook from "../images/social-icon/facebook.svg"

const Login = props => (
  <div className="login-container">
    <div className="header-container">
      <h1>Login</h1>
    </div>
    <form action="login">
      <Input placeholder="User Name" type="text" id="userName">
        User Name
      </Input>
      <Input placeholder="Email Address" type="mail">
        Email Address
      </Input>
    </form>
    <div className="social-authentication">
      <Link to="www.google.com">
        <img src={GoogleImg} alt="google" />
      </Link>
      <Link to="">
        <img src={faceBook} alt="facebook" />
      </Link>
    </div>
    <div className="button-container">
      <Button>login</Button>
      <Link to="page-2">Sign up</Link>
    </div>
  </div>
)
export default Login
