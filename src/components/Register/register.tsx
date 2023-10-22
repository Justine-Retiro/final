import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Register = () => {
  const [usernameReg, setUsenameReg] = useState('')
  const [passwordReg, setPasswordReg] = useState('')
  const register = () => {
    axios.post('http://localhost:3001/Register', {
      username: usernameReg, 
      password: passwordReg
    })
    .then((response) => {
      console.log(response)
    })
    .catch((error) => {
      console.log(error);
    });
  };
  return (
    <div className="container">
      <h2>Register</h2>
      <div>
        <div>
          <input type="text" placeholder="Username" className="form-control" onChange={(e) => setUsenameReg(e.target.value)} name='username' />
        </div>
        <div>
          <input type="password" placeholder="Password" className="form-control" onChange={(e) => setPasswordReg(e.target.value)} name='password'/>
        </div>
        <div>
          <button className="btn btn-primary" onClick={register} type='submit'>Register</button>
          <Link to="/Login" className='btn btn-default border w-100 bg-light rounded-0'>Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Register;