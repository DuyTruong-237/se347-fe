import React,{useState} from 'react'
import "./AddPost.css"
import add_post_img from "./add_post_img.png"
import Axios from 'axios'
import { useNavigate } from 'react-router-dom';
import Header from '../../Header/Header';
import store from '../../../redux/store';

function AddPost() {
    
    const [title , setTitle] = useState();
    const [des , setDes] = useState();
    const [img,setImg] = useState();
    const [owner] = useState(store.getState().auth.login.currentUser._id);
    const [showImg , setShowImg] = useState([])
    const [show , setShow] = useState(false)
    const formData = new FormData();
    const navigate = useNavigate();
    formData.append('title', title);
    formData.append('des', des);
    formData.append('imgURLs', img)
    formData.append('owner', owner)
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
        Axios.post("https://api-nodejs-daax.onrender.com/v1/post/addPost", 
            formData
        )
        navigate("/")
       
        
        // window.location.reload()
        //load lại là mất user

    }
    console.log(formData.get('imgURLs'));
    console.log(formData)
    console.log([...formData])
  return (
    <div className='add_post'>
        <Header/>
        <div className='title'>Tiêu đề:</div>
        {/* <input type='text' className='input_title' onChange={(event)=>{setTitle(event.target.value)}}/> */}
        <textarea type='text' className='input_title' cols="10" rows="10" onChange={(event)=>{setTitle(event.target.value)}}></textarea>
        <div className='title'>Viết blog:</div>
        {/* <input multiple type='text' className='input_des' onChange={(event) => { setDes(event.target.value) }}/> */}
        <textarea type='text' className='input_des' cols="30" rows="10" onChange={(event) => { setDes(event.target.value)}}></textarea>
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
        <div className='add_post_btn' onClick={(e)=>{  submitHandler(e)}}>
            Đăng bài
        </div>
    </div>
  )
}

export default AddPost
