// src/components/LoginRegister.tsx
import React, { useState } from 'react';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom'; // import useHistory

const Login = () => {
  const [username, setUsename] = useState("")
  const [password, setPassword] = useState("")
  
  const history = useHistory();

  const login = () => {
    axios.post('http://localhost:3001/Login', {
      username: username, 
      password: password
    })
    .then((response) => {
      console.log(response)
      if (response.data.length > 0) { // check if login is successful
        history.push('/Table'); // redirect to tables component
      }
    })
    .catch((error) => {
      console.log(error);
    });
  };
  return (
    <div className="container">
      <h2>Login</h2>
      <div>
        <div>
          <input type="text" placeholder="Username" className="form-control" onChange={(e) => setUsename(e.target.value)} name='username' />
        </div>
        <div>
          <input type="password" placeholder="Password" className="form-control" onChange={(e) => setPassword(e.target.value)}  name='password'/>
        </div>
        <div>
          <button className="btn btn-primary" onClick={login} type='submit'>Login</button>
          <Link to="/Register" className='btn btn-default border w-100 bg-light rounded-0'>Register</Link>
        </div>
      </div>
    </div>
    
  );
};

export default Login;
