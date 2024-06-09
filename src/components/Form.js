import React, { useState } from 'react'
import '../App.css';

const Form = () => {

const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  
  const [errors, setErrors] = useState({})

  const handleChange = (e) =>{
    const {name, value} = e.target;
    setFormData({
      ...formData, [name] : value
    })
  }

  const handlesubmit = (e) =>{
    e.preventDefault()
    const validationErrors = {}
    if(!formData.username.trim()){
      validationErrors.username = "username is Required!"
    }
    

    if(!formData.password.trim()){
      validationErrors.password = "Password is Required!"
    }else if(formData.password.length < 8){
      validationErrors.password = "Password Length Should be least 8 characters"
    }

    setErrors(validationErrors)

    if(Object.keys(validationErrors).length === 0){
      alert("Form Submitted successfully")
      
    }
    console.log('username : ' + formData.username,'password : ' + formData.password);
  }
  
  return (

    <div className="main">
      <form onSubmit={handlesubmit}> 
        <input 
        className='input'
        type="text"
        name='username'
        placeholder="Full Name" 
        onChange={handleChange}
        />
        <p className='p'>{errors.username && <span>{errors.username}</span>}</p>
        <input 
        className='input'
        type="password"
        name='password'
        placeholder="Password" 
        onChange={handleChange}
        />
        <p className='p'>{errors.password && <span>{errors.password}</span>}</p>
        <button className="button" type="submit">Submit</button>
      </form>

    </div>
    
  )
}

export default Form
