import React,{useState,useEffect} from 'react'
import "./Post.css"
import like from "./like.png";
import Delete from "./delete.png"
import Axios from 'axios';
import { Link } from 'react-router-dom';
import Loading from '../../Loading/Loading'
import { useSelector } from 'react-redux';

import axios from 'axios';

function Post() {
    const [postList,setPostList] = useState([])
    const user= useSelector((state)=> state.auth.login?.currentUser);
    const a=false;
    const submitHandler1 = async (e,owner) => {
        const answer = window.confirm("Bạn có chắc chắn xóa",);
        if (answer) {
            try {
                await axios.delete('https://api-nodejs-daax.onrender.com/v1/post/deletePost/'+ e)
                
                alert("Xóa thành công")
            }
            catch (error) {
                console.log(error.message)
            }
        }
    }
    const [loading , setLoading] = useState(false)
    useEffect(()=>{
        Axios.get(`https://api-nodejs-daax.onrender.com/v1/post/readPost`).then((respone) => {setPostList(respone.data) ; setLoading(true)})
    },[])
    
    const likeHandle = (id)=>{
        window.location.reload()
        Axios.put('https://api-nodejs-daax.onrender.com/v1/post/likePost',{
            _id : id
        })
    }
    const [query, setQuery] = useState("")
  return (
    <div>
       <div className='search_container search-post'>
        <div className='Listpost-findTicketBody-search'>
                    <div className='ListTiket-findTicketBody-search-body'>
                        <div className='ListTiket-findTicketBody-Title'>Find tickets</div>
                        <input className='ListTiket-findTicketBody-inputSearch' onChange={e => setQuery(e.target.value)} />
                        <img className='ListTiket-findTicketBody-btnSearch' src={process.env.PUBLIC_URL + '/image/iconsearchheart.png'} alt="" />
                        
                    </div>
                    
                </div>
          
        </div>
        
        <div className='grid'>
              {loading?postList.filter((post) =>
                  post.title.toLowerCase().includes(query)
              ).map((post, key) => {
                const text = post.des
                const post_title = post.title
                
                const imgList = post.imgURLs.split(",")[0];
                const img_url = "https://api-nodejs-daax.onrender.com/" + imgList;
                return <div className='post' key={key}>
                    <img className='post_img' src={img_url} alt='' />
                    <div className='post_title'>{(post.title).length > 15 ? (post.title).slice(0,15) + '...' : post.title}</div>
                    {/* cần chỉnh lại do nếu để nội dung dài sẽ bị tràn ra ngoài post */}
                    {/* đã chỉnh xong */}
                    <div className='post_content'>{text === "undefined" ? "" : text.slice(0,100)} <Link to="/readblog" state={{idPost:post._id, title:post.title,des:post.des,imgURLs:img_url,owner:post.owner}}><strong className='read_more'>...read more</strong> </Link></div>
                    <div className='post_react_flex'>
                        <div className='post_icon_like'>
                            <img className='img_like' onClick={() => likeHandle(post._id)} src={like} alt='' />
                            <div className='text_like_flex'>
                                <div className='text_like'>Like</div>
                                <div className='text_like'>{post.like}</div>
                            </div>

                        </div>
                        {user?.admin ? 
                        <div className='post_icon_like' onClick={()=> submitHandler1(post._id,post.owner)}>
                            <img src={Delete} alt='' />
                            <div className='text_like1'>Delete</div>
                        </div>
                        :""}
                    </div>
                </div>
            }):<Loading/>}
            { user?
            <Link to={"/addpost"}>
                <div className='btnAddport'>
                    <img className='iconAddPost' src={process.env.PUBLIC_URL + '/image/iconAddPost.png'} alt={"AddPost"} />
                </div>
            </Link>
            :""}
        </div>
    </div>
    
    
  )
}

export default Post
