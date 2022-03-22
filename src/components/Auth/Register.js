import React, {useState} from 'react';
import axios from 'axios';
import NewUserForm from './NewUserForm';
import Container from '../common/Container';
import Splash from '../common/Splash';
import RegSplash from '../../assets/RegSplash.jpg'
import { apiHostUrl } from '../../config'

const Register = (props) => {
  const [newUser, setNewUser] = useState({
    email: '',
    password: '',
    fName: '',
    lName: '',
    isMember: false,
    licenseNumber: ''
  })

  const updateForm = (field, value) => {
    setNewUser({
      ...newUser,
      [field]: value
    })
  }

  const onSubmit = () => {
    const data = newUser;
    data.name = `${data.fName} ${data.lName}`;
    data.username = data.email;

    // create user, login, create customer
    createUser(data);
  };

  const createUser = async (data) => {
    try {
      const res = await axios.post(`${apiHostUrl}/api/auth/signup`, data);
      console.log(res.data)
    } catch (err) {
      console.error(err.response.data);
    }
  }

  const login = (data) => {

  }

  const createCustomer = (data, token) => {

  }

  return (
    <Container>
      <Splash image={RegSplash} style={{
        height: '20vh',
        color: '#F1F1F1'
      }}>
        <h1>Register</h1>
      </Splash>
      <NewUserForm 
        newUser={newUser} 
        onChange={updateForm} 
        onSubmit={onSubmit}
      />
    </Container>
  )
}

export default Register;