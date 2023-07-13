import React , {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';

function MyDetailspage() {

const {id} =useParams("");

    const [singleuser,singledata]= useState([]);

    const getsingleuser = async()=>{
        const res = await fetch(`http://localhost:8000/userdetail/${id}`,{
          method:"GET",
          headers:{"Content-Type":"application/json"}
        })
        const data = await res.json();
        console.log(data);
        singledata(data)
      }

    useEffect(()=>{
        getsingleuser();
    },[]);
     

  return (
    <div>
        <h1>{singleuser._id}</h1>
        <h1>{singleuser.fullname}</h1>
        <h1>{singleuser.email}</h1>
        <h1>{singleuser.phone}</h1>
        <h1>{singleuser.pass}</h1>
    </div>
  )
}

export default MyDetailspage