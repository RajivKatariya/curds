import React ,{useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Loginpage() {

  const [sv,sf]= useState({
    email:"",
    pass:"",
  });


  const setdata = (e)=>{
    console.log(e.target.value);
    const {name,value} = e.target;
    sf((preval)=>{
      return{
        ...preval,
        [name]:value
      }
    })
  }


  const his = useNavigate();
  const loginuser = async(e)=>{
    e.preventDefault();
    const {email,pass} = sv;
    
    const mydata = await fetch("http://localhost:8000/login",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({
        email,pass
      })
    })
  
    const res = await mydata.json();
    console.log(res);
    if(res.status === 201)
    {
      localStorage.setItem("userdatatoken",res.result.token);
        his("/landing");
      sf({...sv,email:"",pass:""});

    }
  
  }


  return (
    <div className="container-fluid bg-light border p-5 shadow" style={{width:'500px'}} >
        <div className='row'>
          <div className='col-12'>
            <h1>Login Page</h1>
          </div>
        </div>
        <div className="row">
            <div className="col-12 mt-2">
                <label className="form-label">Email id</label>
                <input type="email" className="form-control" value={sv.email} onChange={setdata} name="email" />
            </div>
           
            <div className="col-12 mt-2">
                <label className="form-label">Password</label>
                <input type="password" className="form-control" value={sv.pass} onChange={setdata} name="pass"/>
            </div>
            <div className="col-12 mt-2 text-center">
                <button type='button' className='btn btn-success ms-3' onClick={loginuser}>Login</button>
                <Link className='btn btn-warning ms-3' to="reg">Registor Now</Link>
            </div>
        </div>
    </div>
  )
}

export default Loginpage