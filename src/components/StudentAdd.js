import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
export default function Student_add() {
    const[name,setName]=useState("")
    const[email,setEmail]=useState("")
    const[phone,setPhone]=useState("")
    const[enrollNum,setEnrollNum]=useState("")
    const[date,setDate]=useState()
    const navigate = useNavigate()
    const handleSubmit = (e)=>{
        e.preventDefault()
          axios.post('http://localhost:3001/student/post',{
            name,email,phone,enrollNum,date
          })
          .then(res=>{console.log(res)})
          .catch(err=>{console.log(err)})
          alert("student added successfully")
          navigate('/')
         
        }
        const handleCancel =()=>{
          navigate('/')
        }
  return (
    <div className='form-add'>
      
     
       
       <div className='form-box'>
         <h5>Add New Student</h5>
         
         
      
      <form onSubmit={handleSubmit} className='form-id'>
        
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder='Name'></input><br></br>
       
        <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Email'></input><br></br>
       
        <input type='text' value={phone} onChange={(e)=>setPhone(e.target.value)} placeholder='Phone'></input><br></br>
     
        <input type="text" value={enrollNum}onChange={(e)=>setEnrollNum(e.target.value)} placeholder='Enroll-number'></input><br></br>
        
        <input type="date"value={date} onChange={(e)=>setDate(e.target.value)} placeholder='Date of Admission'></input><br></br>
        <button type="submit" className='submit-btn'>Submit</button>
        <button onClick={handleCancel} className='cancel-btn'>Cancel</button>
      </form>
     
      </div>
         
          
          </div>  
     
  )
}
