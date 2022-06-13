import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'
import { ToastContainer } from 'react-toastify'
import {Buffer} from "buffer"
const Container=styled.div`
`
function SetAvatar() {
    const navigate=useNavigate()
    const avatarApi="https://api.multiavatar.com/456789"
    const [avatars,setavatars]=useState([])
    const [isLoading,setIsLoading]=useState(true)
    const [selectedAvatar,setSelectedAvatar]=useState(undefined)

    const toastOptions={
        position:"top-right",
        draggable:true,
        pauseOnHover:true,
        theme:"light",
        autoClose:8000
    }
    const setProfilePicture=async()=>{

    }
    useEffect( ()=>{
        const data=[];

        for(let i=0;i<4;i++){
            const image= axios.get(
                `${avatarApi}/${Math.round(Math.random()*1000)}`)
                .then((res)=> console.log(res.data))
                .catch(e=>console.log(e.message))
                
                const buffer= new Buffer(image.data)
                console.log(buffer);
                data.push(buffer.toString("base64"))
        }
        setavatars(data)
        setIsLoading(false)
    },[])
  return (
      <>
      <Container>
       <div>
           <h1>pick an avatar as your profile picture</h1>

       </div>
       <div>
           {avatars.map((avatar,index)=>{
               return(
                   <div >
                       <img src={`data.image/svg+xml;base64,${avatar}`} alt=""
                       onClick={()=>setSelectedAvatar(index)}></img>
                   </div>
               )
           })}
       </div>
    </Container>
    <ToastContainer />
      </>
    
    
  )
}

export default SetAvatar