import React, {useState} from 'react';
import NewUserForm from './NewUserForm';
import Container from '../common/Container';
import Splash from '../common/Splash';
import RegSplash from '../../assets/RegSplash.jpg'

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

  const onSubmit = () => {};

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