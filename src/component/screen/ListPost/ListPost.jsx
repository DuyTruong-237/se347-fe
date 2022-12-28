import React,{useState} from 'react'
import './ListPost.css'
import Post from './Post'

export default function () {
  const [query, setQuery] = useState("")
  return (
    <div className='ListPost'>
       
        <div className='PostList'>
           
                <Post/>
           
           
           
           

        </div>
    </div>
  )
}
