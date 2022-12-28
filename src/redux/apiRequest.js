import axios from "axios";
import { loginStart, loginSuccess,loginFailed, registerStart, registerSuccess, registerFailed } from "./authSlice";

export const loginUser = async(user,dispatch,navigate)=>{
    dispatch(loginStart());
    try{
        const res = await axios.post("https://api-nodejs-daax.onrender.com/v1/auth/login",user);
        dispatch(loginSuccess(res.data));
        navigate("/");
        console.log("run")
    }
    catch(err){
        dispatch(loginFailed());
        console.log(err);
        console.log(user)
    }
}
export const registerUser =async(user,dispatch,navigate)=>{
    dispatch(registerStart());
    try{
        await axios.post("https://api-nodejs-daax.onrender.com/v1/auth/register",user);
        dispatch(registerSuccess);
        navigate("/login")

    }
    catch(err){
        dispatch(registerFailed());

    }
}