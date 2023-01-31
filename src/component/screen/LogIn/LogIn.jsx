import React, { useState } from "react";
import { loginUser } from "../../../redux/apiRequest";
import BackGround from "../../background/background";
import { useNavigate, Link } from "react-router-dom";

import Links from "../../Link/Link";
import Button from "../../Button/Button";
import "./LogIn.css";
import { useDispatch } from "react-redux";

const LogIn = () => {
  const [username, setUsername] = useState("huy");
  const [password, setPassword] = useState("112");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  

  const handleLogin = (e) => {
    e.preventDefault();
    const newUser = {
      userName: username,
      password: password,
    };
    loginUser(newUser, dispatch, navigate);
   
  };

  return (
    <div className="login__background-container">
      <BackGround>
      <img id="login__logo" src={process.env.PUBLIC_URL + '/image/logotrv.png'} alt='logo'/>
       
        <form onSubmit={handleLogin}>
          <div className="login__background__input">
            <input
              placeholder=
              "Username"
              type="text"
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
             placeholder="Password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
           
          </div>
          <div class="login__background__input">
           
          </div>
          
          {/* <Button type="submit" name={username} onSubmit>
            LOGIN
          </Button> */}
          <Button type="submit" >LOGIN</Button>
        </form>
        <Link to={"/register"}>
          <Links content="Register ?" />
        </Link>
      </BackGround>
    </div>
  );
};

export default LogIn;
