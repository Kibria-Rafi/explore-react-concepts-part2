import { useEffect, useState } from 'react'
import './Firends.css'
import frnd from './Frnd'

export default function Friends(){
     const [friends,setfriends]=useState([])
    
     useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data=>setfriends(data))
     },[])



    return (
        <div className='box'>
            <h3>Friends:{friends.length}</h3>
            {
                friends.map(frnd => <frnd></frnd>)
            }
        </div>
    )
}
