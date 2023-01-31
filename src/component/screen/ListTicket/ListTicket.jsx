import React, { useState, useEffect } from 'react'
import "./ListTicket.css"
import { Link } from 'react-router-dom'
import Loading from '../../Loading/Loading';
import Axios from 'axios';
import { useSelector } from 'react-redux';

export default function ListTicket() {
    const [tourList,setTourList] = useState([])
    const user= useSelector((state)=> state.auth.login?.currentUser);
  
    const [loading , setLoading] = useState(false)
    useEffect(()=>{
        Axios.get('https://api-nodejs-daax.onrender.com/v1/tour/readTour').then((respone) => {setTourList(respone.data) ; setLoading(true)})
    },[])
    
    const likeHandle = (id)=>{
        window.location.reload()
        Axios.put('https://api-nodejs-daax.onrender.com/v1/post/likePost',{
            _id : id
        })
    }
    const [query, setQuery] = useState("")
    return (
        <div className='ListTicker-tab'>
            <div className='ListTiket-titleTab'>Travel Tickets: choose your trip</div>
            <div className='ListTiket-findTicketBody'>
                <div className='ListTiket-findTicketBody-search'>
                    <div className='ListTiket-findTicketBody-search-body'>
                        <div className='ListTiket-findTicketBody-Title'>Find tickets</div>
                        <input className='ListTiket-findTicketBody-inputSearch' onChange={e => setQuery(e.target.value)} />
                        <img className='ListTiket-findTicketBody-btnSearch' src={process.env.PUBLIC_URL + '/image/iconsearchheart.png'} alt="" />
                        
                    </div>
                    
                </div>
                <div>
                {user?.admin ? <Link to={"/addtour"}>
                <center><div className='btnAddTour'>
                    <img className='iconAddTour' src={process.env.PUBLIC_URL + '/image/iconAddPost.png'} alt={"AddPost"} />
                </div></center></Link>:""}
                
                <div className='ListTicker-tab-allTicker'>
               
                <div className='ListTicker-tab-allTicker-body' >
                
                {loading?tourList.filter((tour) =>
                  tour.location.toLowerCase().includes(query)
              ).map((tour, key) => {
                const imgList = tour.imgURLs.split(",")[0];
                const img_url = "https://api-nodejs-daax.onrender.com/" + imgList;
                const checkin=tour.checkin.split("T")[0];
                const checkout=tour.checkout.split("T")[0];
                      return <div className='TikerItem' key={key} >
                         <img className='post_img' src={img_url} alt='' style={{display:"flex", height:"300px", zIndex:"0", position:"absolute",height:"300px"}} />
                            <div><div className='TikerItem-locationName'>{tour.location}</div></div>
                            <div className='TikerItem-inforBasic'>
                                <dip className='TikerItem-inforBasic-days'>{tour.totalTime}</dip>
                                <div className='TikerItem-inforBasic-itemInfo' >
                                    <div className='TikerItem-inforBasic-itemInfo-title'>Check in: </div>
                                    <div className='TikerItem-inforBasic-itemInfo-info'>{checkin}</div>
                                </div>
                                <div className='TikerItem-inforBasic-itemInfo' >
                                    <div className='TikerItem-inforBasic-itemInfo-title'>Check out: </div>
                                    <div className='TikerItem-inforBasic-itemInfo-info'>{checkout}</div>
                                </div>
                                <div className='TikerItem-inforBasic-fare'>{tour.price}</div>
                               <Link to={'/ticketdetail'} state={{location:tour.location,totalTime:tour.totalTime,schedule:tour.schedule,price:tour.price,tourID:tour._id}}><button className='TikerItem-inforBasic-btnBuy'>Read more and buy</button></Link> 

                            </div>

                        </div>
                        
                 
                    
                        
              }):<Loading/>}
                        
                    </div>
                   
                    
                    
                    
                    
                </div>
                </div>


            </div>
        </div>
    )
}

