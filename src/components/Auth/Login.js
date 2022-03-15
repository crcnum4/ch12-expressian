import React from 'react';
import LoginForm from './LoginForm';
import Container from '../common/Container'

const Login = (props) => {
  return (
    <Container>
      <h1>Login</h1>
      <LoginForm />
    </Container>
  )
}

export default Login;