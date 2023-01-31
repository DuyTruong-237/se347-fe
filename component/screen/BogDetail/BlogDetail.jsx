import React, { useEffect, useState } from 'react'
import './BlogDetail.css'

import { useLocation, useNavigate } from 'react-router-dom'
import store from '../../../redux/store';
import axios from 'axios';
import Header from '../../Header/Header';

export default function DetailPost(props) {
    const navigate = useNavigate();
    const {idPost} = useLocation().state;
    const {title} = useLocation().state;
    const {des} = useLocation().state;
    const {imgURLs} = useLocation().state;
    const {owner} = useLocation().state;
    let [userList, setUserList] = useState([])
    const getUser = async () => {
        try {
            const res = await axios.get('https://api-nodejs-daax.onrender.com/v1/user/getuser')
            setUserList(res.data)
            userList = res.data;
        }
        catch (error) {
            console.log(error.message)
        }
    }
    useEffect(() => {
        getUser()
    }, [])

    let [ownername,] = useState()
    const find = (e) => {
        for (let i = 0; i < userList.length; i++) {
            if (e === userList[i]._id) ownername = userList[i].userName; 
        }
    }
    const submitHandler = async () => {
        if (document.getElementById('descript').value === ''
            || document.getElementById('title').value === '') {
            alert('Vui lòng nhập thông tin chỉnh sửa')
            return
        }
        const answer = window.confirm("Bạn có chắc chắn sửa",);
        if (answer) {
            try {
                await axios.post('https://api-nodejs-daax.onrender.com/v1/post/updatePost/'
                    + idPost, {
                    des: document.getElementById('des').value,
                    title: document.getElementById('title').value
                })
                alert("Sửa thành công")
                navigate('/')
            }
            catch (error) {
                console.log(error.message)
            }
        }
    }
    const submitHandler1 = async () => {
        const answer = window.confirm("Bạn có chắc chắn xóa",);
        if (answer) {
            try {
                console.log("des",idPost)
                await axios.delete('https://api-nodejs-daax.onrender.com/v1/post/deletePost/'+ idPost)
                alert("Xóa thành công")
                navigate('/')
            }
            catch (error) {
                console.log("lỗi",error.message)
            }
        }
    }
    const renderAdmin =()=>{
        return(
            <div>
                <Header/>
                <div className='DetailPost__Image'>
                    <img className='DetailPost__Image--imgMain' src={imgURLs} alt={title}/>
                </div>
                <div className='DetailPost__content'>
                    <input className='DetailPost__content--title' id='title' defaultValue={title} ></input>
                    <textarea className='DetailPost__content--description' id='des'>{des === "undefined" ? "" : des}</textarea>
                </div>
                <button className='btnsua' onClick={()=> submitHandler()}>Sửa </button>
                <button className='btnxoa' onClick={()=> submitHandler1()}>Xóa</button>
                <div>{idPost}</div>
            </div>
        )
    }
    const renderUser =()=>{
        return(
            <div>
                <div className='DetailPost__Image'>
                    <img className='DetailPost__Image--imgMain' src={imgURLs} alt='Header_icProfile'/>
                </div>
                <div className='DetailPost__content'>
                    <h3 className='DetailPost__content--title'>{title}</h3>
                    <textarea disabled className='DetailPost__content--description1'>{des}</textarea>
                </div>
            </div>
        )
    }
  return (
    <div className='DetailPost'>
       
        {find(owner)}
        <div className='DetailPost__body'>
            <div className='DetailPost__User'>
                <img className='DetailPost__User--icProfile' src={process.env.PUBLIC_URL + '/image/username-removebg-preview.png'} alt='Header_icProfile'/>
                <h3>{ownername}</h3>
            </div>
            <div className="">
                {
                    (store.getState().auth.login.currentUser == null || store.getState().auth.login.currentUser._id !=owner) ?
                    renderUser() : renderAdmin()
                }
            </div>
        </div>
    </div>
  )
}
