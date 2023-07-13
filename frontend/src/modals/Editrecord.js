import React,{useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom';

function Editrecord() {
const {id} =useParams("");

const [sv,sf]=useState({
    fullname:'',
    email:'',
    phone:'',
    pass:''
  });
  
  
  const getdata = (e)=>{
    console.log(e.target.value);
    const {name, value}=e.target;
    sf((abc)=>{
      return{
        ...abc,
        [name]:value
      }
    });
  
  }

  const editrecord = async(e)=>{
    const res = await fetch(`http://localhost:8000/view/${id}`,{
      method:"GET",
      headers:{"Content-Type":"application/json"}
    })
    const data = await res.json();
    console.log(data);
    sf(data)
  }

  useEffect(()=>{
    editrecord();

  },[]);




  const updaterecords = async(e)=>{
    e.preventDefault();
    const {fullname,email,phone,pass} = sv;
    
    const res = await fetch(`http://localhost:8000/updaterecord/${id}`,{
      method:"PATCH",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({
        fullname,email,phone,pass
      })
    })
    
    const data1 = await res.json();
    console.log(data1);
    if(res.status=='201')
    {
        alert("update success fully");
    }
        
    // alert("update success fully");
    window.location=`http://localhost:3000/landing`;
  
  }

  




    return (
        <div className="container-fluid bg-light border p-5 shadow" style={{width:'500px'}} >
            <div className='row'>
              <div className='col-12'>
                <h1>Edit Record page</h1>
              </div>
            </div>
            <div className="row">
                <div className="col-12 mt-2">
                    <label className="form-label">Full Name</label>
                    <input type="text" className="form-control" value={sv.fullname}  name="fullname" onInput={getdata}/>
                </div>
                <div className="col-12 mt-2">
                    <label className="form-label">Email id</label>
                    <input type="email" className="form-control" value={sv.email} name="email" onInput={getdata}/>
                </div>
                <div className="col-12 mt-2">
                    <label className="form-label">Phone No</label>
                    <input type="text" className="form-control" value={sv.phone} name="phone" onInput={getdata}/>
                </div>
                <div className="col-12 mt-2">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control" value={sv.pass} name="pass" onInput={getdata}/>
                </div>
                <div className="col-12 mt-2 text-center">
               
                    <button type='button' className='btn btn-success' onClick={updaterecords}>Update</button>
                </div>
            </div>
        </div>
      )
}

export default Editrecord