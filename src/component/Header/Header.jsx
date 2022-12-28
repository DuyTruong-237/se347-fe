import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';


export default function Header() {
  const user= useSelector((state)=> state.auth.login?.currentUser);
  
  return (
    <div className='Header'>
      <img className='Header_Logo' src={process.env.PUBLIC_URL + '/image/logotrv.png'} alt='logo' />

      <div className='Header_Profile'>
        <div className='header-itemBody'>
        <Link ѕtуle="teхt-deᴄoration:none;" to={'/'}><div>Home</div></Link>
         <Link ѕtуle="teхt-deᴄoration:none;" to={'/tickets'}> <div>Travel Ticket</div></Link>
          <Link ѕtуle="teхt-deᴄoration:none;" to={'/blog'}><div>Travel blog</div></Link>
          {user?.admin ? 
                        <Link to={'/bill'}><div>Bill</div></Link>
                        :""}
        </div>
        {user? <Link to={"/profile"}><div className='userHeader'>
        <h3 className='Header_NameProfile'>{user.userName}</h3>
        <img className='Header_icProfile' src={process.env.PUBLIC_URL + '/image/username-removebg-preview.png'}/>
                          
                          </div></Link>:<div><Link to={"/login"}><button className='btn_loginHeader'>Login</button></Link></div>}
                            
                        
      </div>
    </div>
  )
}
