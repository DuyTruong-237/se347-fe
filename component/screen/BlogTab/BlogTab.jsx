import React from 'react'
import HeaderView2 from '../../HeaderView2/HeaderView2'
import HeaderView from '../../HeaderView/HeaderView'
import './BlogTab.css'
import Footer from '../../footer/Footer'
import HeaderImg from '../../HeaderImg/HeaderImg'
import ListPost from '../ListPost/ListPost'
import ListTicket from '../ListTicket/ListTicket'
import Header from '../../Header/Header'
export default function BlogTab() {
    return (
        <div className='BlogTab'>
            <Header/>
            <img className='BlogTab-Img' src={process.env.PUBLIC_URL + '/image/ViewMain2.jpg'} alt='logo'/>
          <div className='BlogTab-HeaderView2'><HeaderView2/></div>
          
          <div className='BlogTab-ListPosst'><ListPost/></div>
            
        <div className='BlogTab-Footer'><Footer/></div>

        </div>
    )
}
