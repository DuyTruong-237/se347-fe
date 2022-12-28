import React from 'react'
import './HeaderView.css'


export default function Header() {
  return (
    <center className='HeaderView'>
        <img className='HeaderViewImg' src={process.env.PUBLIC_URL + '/image/ViewMain5.jpg'} alt='logo'/>
        <div className='headerView-textItem'>
          <div className='headerView-textItem-title'>Paradise</div>
          <div className='headerView-textItem-info'>Travel makes one modest. You see what a tiny place you occupy in the world</div>
        </div>
    </center>
  )
}
