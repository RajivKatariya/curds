import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Registgor() {


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


const mynewrecord = async(e)=>
{
  e.preventDefault();
  const {fullname,email,phone,pass} = sv;
  
  const res = await fetch("http://localhost:8000/regs",{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify({
      fullname,email,phone,pass
    })
  })

  const data = await res.json();
  console.log(data);
  
}




  return (
    <div className="container-fluid bg-light border p-5 shadow" style={{width:'500px'}} >
        <div className='row'>
          <div className='col-12'>
            <h1>Registor Page</h1>
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
            <Link className='btn btn-warning me-2' to="/">Login</Link>
                <button type='button' className='btn btn-success' onClick={mynewrecord}>submit</button>
            </div>
        </div>
    </div>
  )
}

export default Registgor