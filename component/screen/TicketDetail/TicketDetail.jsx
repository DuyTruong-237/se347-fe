import React,{useState} from 'react'
import './TicketDetail.css'
import { useLocation } from 'react-router-dom'
import Axios from 'axios'
import { useNavigate } from 'react-router-dom';
import Header from '../../Header/Header';
function TicketDetail() {
  const {location} = useLocation().state;
  const {totalTime} = useLocation().state;
  const {schedule} = useLocation().state;
  const {price} = useLocation().state;
  const {tourID} = useLocation().state;

    const [userName , setUserName] = useState("");
    const [email , setEmail] = useState("");
    const [phoneNumber , setPhoneNumber] = useState("");
    const [ address, setAddress] = useState("");
    const [amount , setAmount] = useState("");
    const [idTour , setIDtour] = useState(tourID);
    const [idUser , setIDUser] = useState("123");
    const [billStatic , setBillStatic] = useState("no");
    const [sumPrice , setSumPrice] = useState("900");
  
   
   
    const formData = new FormData();
    const navigate = useNavigate()
    formData.append('userName', userName);
    formData.append('email',email);
    formData.append('phoneNumber', phoneNumber);
    formData.append('address', address);
    formData.append('amount', amount);
    formData.append('idTour', idTour);
    formData.append('idUser', idUser);
    formData.append('billStatic', billStatic);
    formData.append('sumPrice', sumPrice);
   const setdata=()=>{
    const a=amount * price;
   console.log(a)
   sumPrice=a;
   return a;
   
    
   }

    const submitHandler = ()=>{
      setSumPrice(amount*price)
      console.log(amount)
      console.log(price)
      console.log(sumPrice)
      Axios.post("https://api-nodejs-daax.onrender.com/v1/bill/addBill", 
          {userName,email,phoneNumber,address,amount,idTour,idUser,billStatic,sumPrice}
      )
  }
  console.log(billStatic);
    console.log(formData)
    console.log([...formData])
  return (
    <div className='TicketDetail'>
      <Header/>
      <div className='TicketDetail-Title'>Ticket Infomation </div>
      <div className='TicketDetail-Title-mainbody'>
      <div className='TicketDetail-Title-body'>

        <div className='TicketDetail-Title-bodyv2'>
          <div className='TicketDetail-Title-body-itemInfo-location'>{location}</div>
          <div className='TicketDetail-Title-body-mainInfo'>
            <div className='TicketDetail-Title-body-itemInfo'>
              <div className='TicketDetail-Title-body-itemInfo-title'>Total time:</div>
              <div className='TicketDetail-Title-body-itemInfo-Info'>{totalTime}</div>
            </div>
            <div className='TicketDetail-Title-body-itemInfo'>
              <div className='TicketDetail-Title-body-itemInfo-title'>Schedule:</div>
              <div className='TicketDetail-Title-body-itemInfo-Info'>{schedule}</div>
            </div>
            <div className='TicketDetail-Title-body-itemInfo-price'>{price}/1</div>
          </div>
        </div>
        
      </div>

      <div className='TicketDetail-myName'>
        <div className='TicketDetail-myName-name'>Paradise</div>
        <div className='TicketDetail-myName-contact'>Hotline: 0123456789</div>
      </div>
      </div>
      <div className='TicketDetail-orderTicket'>
        <div className='TicketDetail-Title'>Order here</div>
        <center className='TicketDetail-orderTicket-orderBody'>
            <div className='TicketDetail-orderTicket-orderBody-infor'>
            <div className='TicketDetail-orderTicket-orderBody-item'>
                <div className='TicketDetail-orderTicket-orderBody-item-title'>Name: </div>
                <input type='text' className='TicketDetail-orderTicket-orderBody-item-input' onChange={(event)=>{setUserName(event.target.value)}}/>
              </div>
              <div className='TicketDetail-orderTicket-orderBody-item'>
                <div className='TicketDetail-orderTicket-orderBody-item-title'>Email: </div>
                <input type='text' className='TicketDetail-orderTicket-orderBody-item-input'onChange={(event)=>{setEmail(event.target.value)}}/>
              </div>
              <div className='TicketDetail-orderTicket-orderBody-item'>
                <div className='TicketDetail-orderTicket-orderBody-item-title'>Phone number: </div>
                <input type='text' className='TicketDetail-orderTicket-orderBody-item-input'onChange={(event)=>{setPhoneNumber(event.target.value)}}/>
              </div>
              <div className='TicketDetail-orderTicket-orderBody-item'>
                <div className='TicketDetail-orderTicket-orderBody-item-title'>Address: </div>
                <input type='text' className='TicketDetail-orderTicket-orderBody-item-input'onChange={(event)=>{setAddress(event.target.value)}}/>
              </div>
              <div className='TicketDetail-orderTicket-orderBody-item'>
                <div className='TicketDetail-orderTicket-orderBody-item-title'>Amount: </div>
                <input  type={"number"} className='TicketDetail-orderTicket-orderBody-item-input2'onChange={(event)=>{setAmount(event.target.value)}}/>
              </div>
              <button className='TicketDetail-orderTicket-orderBody-btnBuy' onClick={(e)=>submitHandler(e)}>Buy</button>
              
              </div>
            
        </center>

      </div>
    </div>


  )
}
export default TicketDetail

