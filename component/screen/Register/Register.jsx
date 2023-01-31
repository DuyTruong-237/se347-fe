import React, { Component, useState } from 'react'
import './Register.css'
import BackGround from '../../background/background'
import Button from '../../Button/Button'

import Links from '../../Link/Link'

import { Link, useNavigate} from 'react-router-dom'
import { registerUser } from '../../../redux/apiRequest'
import { useDispatch } from 'react-redux'

const Register =()=> {

 const [email,setEmail]= useState("");
 const [username,setUsername]= useState("");
 const [password,setPassword]=useState("");
 const dispatch= useDispatch();
 const navigate= useNavigate();
 const handleRegister = (e) => {
  e.preventDefault();
  const newUser = {
    userName: username,
    password: password,
    email: email
  };
  registerUser(newUser,dispatch,navigate)

};
    return (
      <BackGround>
       <img id="logo" src={process.env.PUBLIC_URL + '/image/logotrv.png'} alt='logo'/>
       <form  onSubmit={handleRegister}>
       <div className="login__background__input">
              <input
              placeholder="Username"
              type="text"
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
            placeholder="Password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
             <input
             placeholder="Email"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            </div>
        {/* <InputNoneIMG name="Username" input="text"/>
        <InputNoneIMG name="Password" input="password"/>
        <InputNoneIMG name="Verify Password" input="password"/>
        <InputNoneIMG name="Email" input="email"/> */}
        <Button>Create Account</Button>
        </form>
      <Link to={"/login"}><Links content="Already have account? Log In"/></Link>
      </BackGround>
    )
  
}
export default Register;
