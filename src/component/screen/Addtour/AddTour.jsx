import './AddTour.css'
import React,{useState} from 'react'
import Header from '../../Header/Header'
import add_post_img from "./add_post_img.png"
import Axios from 'axios'
import { useNavigate } from 'react-router-dom';


function AddTour() {
    const [location , setLocation] = useState();
    const [totalTime , setTotalTime] = useState();
    const [checkin , setCheckIn] = useState();
    const [checkout , setCheckOut] = useState();
    const [price , setprice] = useState();
    const [schedule , setSchedule] = useState();
   
    const [img,setImg] = useState();
    const [showImg , setShowImg] = useState([])
    const [show , setShow] = useState(false)
    const formData = new FormData();
    const navigate = useNavigate()
    formData.append('location', location);
    formData.append('totalTime', totalTime);
    formData.append('checkin', checkin);
    formData.append('checkout', checkout);
    formData.append('price', price);
    formData.append('schedule', schedule);
    

    formData.append('imgURLs', img)
    const onSelectedFile = (e)=>{
        setImg(e.target.files[0]);
        const selectedFile = e.target.files;
        const selectedFileArray = Array.from(selectedFile);
        const imgUrl = selectedFileArray.map((file)=>{
            return URL.createObjectURL(file)
        })
        console.log(imgUrl);
        setShow(true)
        setShowImg(imgUrl);
    }
    const submitHandler = ()=>{
        Axios.post("https://api-nodejs-daax.onrender.com/v1/tour/addTour", 
            formData
        )
       
        navigate("/"
        )

    }
    console.log(formData.get('imgURLs'));
    console.log(formData)
    console.log([...formData])
  return (
    <div className='add_tour'>
        <Header/>
        <div className='title'>Location:</div>
        <input type='text' className='input_title' onChange={(event)=>{setLocation(event.target.value)}}/>
        <div className='title'>Total time:</div>
        <input type='text' className='input_title' onChange={(event)=>{setTotalTime(event.target.value)}}/>
        <div className='title'>Checkin:</div>
        <input type='text' className='input_title' onChange={(event)=>{setCheckIn(event.target.value)}}/>
        <div className='title'>Check out:</div>
        <input type='text' className='input_title' onChange={(event)=>{setCheckOut(event.target.value)}}/>
        <div className='title'>Price:</div>
        <input type='text' className='input_title' onChange={(event)=>{setprice(event.target.value)}}/>
        <div className='title'>Schedule:</div>
        <input type='text' className='input_title' onChange={(event)=>{setSchedule(event.target.value)}}/>
       
        <div className='show_img_container'>
            <section>
                <label>
                    <img className='add_post_img' src={add_post_img} alt='' />
                    <input
                        className='input_add_img'
                        type='file'
                        name='images'
                        onChange={onSelectedFile}
                        multiple
                        accept='image/png , image/jpeg '
                    />
                </label>
            </section>
            {show ? showImg?.map((value, key) => {
                return <img className='show_img' key={key} src={value} />
            }) : ""}
        </div>
        <div className='add_tour_btn' onClick={(e)=>submitHandler(e)}>
            Đăng bài
        </div>
    </div>
  )
}

export default AddTour
