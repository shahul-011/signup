import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const Login = () => {
    const [formData,setFormData] = useState({
        email:'',password:'',
    });

    const handleChange = (event) => {
        const {name,value}=event.target;

        setFormData((prevData) => ({
            ...prevData,
            [name]:value,
        }));
    };
     const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
     };
  return (
    <div style={{ padding: '50px' }}><br/>
        <Typography variant='h3'>Login</Typography><br /><br />
        <form onSubmit={handleSubmit}>
    <div>
    <TextField required id={formData.email} label="Email"onChange={handleChange} variant="filled" /><br /><br />
    <TextField required id={formData.password} label="Password"onChange={handleChange} variant="filled" />
    </div>
   
    <Button type='Submit'>Login</Button>
    </form>
    </div>
  );
};

export default Login;