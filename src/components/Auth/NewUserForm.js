import React from 'react';
import Container from '../common/Container';
import Form from '../common/Form';
import InlineInputContainer from '../common/InlineInputContainer';
import Input from '../common/Input';
import Button from '../common/Button';

const NewUserForm = ({onSubmit, onChange, newUser}) => {
  // const {onSubmit, onChange, newUser} = props

  const handleChange = (e) => {
    onChange(e.target.id, e.target.value);
  }

  return (
    <Container>
      <Form onSubmit={onSubmit} style={{marginTop: '1em'}}>
        <InlineInputContainer>
          <Input
            name="fName" 
            id="fName" 
            value={newUser.fName}
            placeholder={"First Name"}
            onChange={handleChange}
            required
          />
          <Input
            name="lName" 
            id="lName" 
            value={newUser.lName}
            placeholder={"Last Name"}
            onChange={handleChange}
          />
        </InlineInputContainer>
        <InlineInputContainer>
          <Input
            name="email"
            id="email"
            value={newUser.email}
            placeholder={"Email Address"}
            onChange={handleChange}
            type="email"
            required
          />
        </InlineInputContainer>
        <InlineInputContainer>
          <Input
            name="password"
            id="password"
            value={newUser.password}
            placeholder={"Password"}
            onChange={handleChange}
            type="password"
            required
          />
        </InlineInputContainer>
        <InlineInputContainer>
          <Input
            name="licenseNumber"
            id="licenseNumber"
            value={newUser.licenseNumber}
            placeholder={"License Number"}
            onChange={handleChange}
            type="text"
          />
        </InlineInputContainer>
        <Button>Submit</Button>
      </Form>
    </Container>
  )
}

export default NewUserForm;