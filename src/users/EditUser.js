import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

export default function EditUser() {

    let navigate = useNavigate()

    const {id} = useParams()

    const[user,setUser]=useState({
      name:"",
      username:"",
      email:""
    })

    const{name,username,email}=user

    const onInputChange =(e)=>{
        setUser({...user,[e.target.name]:e.target.value});
    }

    useEffect(()=>{
        loaduser();
    },[]);

    const loaduser = async()=>{
        const result = await axios.get(`http://localhost:8080/user/${id}`,user);
        setUser(result.data);
    }

   
    
    const onSubmit =async(e)=>{
      e.preventDefault();
      await axios.put(`http://localhost:8080/user/${id}`,user);
      navigate("/");
    }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Edit User</h2>
         
          <form onSubmit={(e)=>onSubmit(e)}>
          <div className="mb-3">
            <label htmlFor="Name" className="form-label">Name</label><br/>
            <input 
              type={"text"} 
              className="from-control"
              placeholder="Enter the name"
              name="name"
              value={name}
              onChange={(e)=>onInputChange(e)}>  
            </input>
          </div>

          <div className="mb-3">
            <label htmlFor="Email" className="form-label">UserName</label><br/>
            <input 
              type={"text"} 
              className="from-control"
              placeholder="Enter the Username"
              name="username"
              value={username}
              onChange={(e)=>onInputChange(e)}>  
            </input>
          </div>

          <div className="mb-3">
            <label htmlFor="Email" className="form-label">Email</label><br/>
            <input 
              type={"text"} 
              className="from-control"
              placeholder="Enter the email address"
              name="email"
              value={email}
              onChange={(e)=>onInputChange(e)}>  
            </input>
          </div>

          <button type="submit" className="btn btn-outline-primary">Submit</button>
          <Link type="submit" className="btn btn-outline-danger" to={("/")}>Cancel</Link>
          </form>
        </div>
      </div>  
    </div>
  )
} 
