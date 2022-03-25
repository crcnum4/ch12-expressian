import React, { useState, useContext } from 'react';
import {useNavigate} from 'react-router-dom'
import axios from 'axios';
import LoginForm from './LoginForm';
import Container from '../common/Container';
import Splash from '../common/Splash';
import RegSplash from '../../assets/RegSplash.jpg';
import { apiHostUrl } from '../../config'
import {AuthContext} from '../Providers/AuthProvider'

const Login = (props) => {
  const [newLogin, setNewLogin] = useState({
    username: '',
    password: '',
  });

  const [auth, setAuth] = useContext(AuthContext);
  const navigate = useNavigate();

  const updateForm = (field, value) => {
    setNewLogin({
      ...newLogin,
      [field]: value
    })
  }

  const onSubmit = () => {
    const data = newLogin;
    login(data);
  }

  const login = async (data) => {
    try {
      const res = await axios.post(`${apiHostUrl}/api/auth/signin`, data);
      setAuth({
        token: res.data.token,
        profile: {},
        roles: res.data.roles,
      })
      navigate("/");
    } catch (err) {
      console.error(err.response ? err.response.data : err.message);
    }
  }

  return (
    <Container>
      <Splash image={RegSplash} style={{
        height: '20vh',
        color: '#F1F1F1'
      }}>
        <h1>Login</h1>
      </Splash>
      <LoginForm 
        newLogin={newLogin}
        onChange={updateForm}
        onSubmit={onSubmit}
      />
    </Container>
  )
}

export default Login;