import * as React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { signupUser } from '../../../redux/auth/auth.operations';
//  import { useFormik } from 'formik';
import {
  FormContainer,
  Form,
  Title,
  Label,
  Input,
  Button,
} from './RegisterForm.styled';
export const RegisterForm = () => {
    // const formik = useFormik({
    //   initialValues: {
    //     name: '',
    //     email: '',
    //     password: '',
    //   },
    //   onSubmit: values => {
    //     alert(JSON.stringify(values, null, 2));
    //   },
    // });
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(signupUser({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit} autoComplete="on">
        <Title>Sign Up</Title>
        <Label>
          Name
          <Input
            name="name"
            type="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            placeholder="Enter your name"
            value={name}
            onChange={handleChange}
          />
        </Label>

        <Label>
          Email
          <Input
            name="email"
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={handleChange}
          />
        </Label>

        <Label>
          Password
          <Input
            name="password"
            type="password"
            required
            autoComplete="off"
            placeholder="Enter password"
            value={password}
            onChange={handleChange}
          />
        </Label>

        <Button type="submit">Sign Up</Button>
      </Form>
      <Link to="/login">Log in</Link>
    </FormContainer>
  );
}
