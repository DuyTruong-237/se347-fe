import React from "react";
import "./Profile.css";

import { Link } from "react-router-dom";
import store from "../../../redux/store";
import { useSelector } from "react-redux";

export default function Profile() {
  const user= useSelector((state)=> state.auth.login?.currentUser);
  return (
    <div className="Profile">

      <div className="Profile_section">
        <div className="Profile_header">
          <img
            className="Profile_header_icon"
            src={require("../../../assets/user.png")}
            alt="Profile_header_icon"
          />
          <h2 className="Profile_header_name">
            {store.getState().auth.login.currentUser == null ? <p>NULL</p> : <p>{store.getState().auth.login.currentUser.userName}</p>}
          </h2>
          <p className="Profile_header_details">A web developer, love cats</p>
        </div>
        <div className="Profile_content">
          <div className="Profile_information">
            <div className="Profile_information--static">
              
              <div className="static line"></div>
              <div className="static visitors">
                <p>Visitors</p>
                <p>12657</p>
              </div>
            </div>
            <div className="Profile_information--email">
              <div>
                <img src={require("../../../assets/email.png")} alt="email" />
              </div>
              {store.getState().auth.login.currentUser == null ? <p>NULL</p> : <p>{store.getState().auth.login.currentUser.email}</p>}
            </div>
            <div className="Profile_contact">
              <img
                className="Profile_contact1"
                src={require("../../../assets/instagram.png")}
                alt="Profile_contact_instagram"
              />
              <img
                className="Profile_contact2"
                src={require("../../../assets/facebook.png")}
                alt="Profile_contact_facebook"
              />
              <img
                className="Profile_contact2"
                src={require("../../../assets/twitter.png")}
                alt="Profile_contact_facebook"
              />
              <img
                className="Profile_contact2"
                src={require("../../../assets/github-sign.png")}
                alt="Profile_contact_facebook"
              />
            </div>
          </div>
        </div>
        <div className="Profile_Logout">
          <Link to={"/login"}>
            <button className="Button_Logout">Đăng xuất</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
