
import React from 'react';
import { useFormik } from 'formik';
import { Form, Input, Label, Button } from './UserInfo.styled';



export const UserInfo = () => {
  const formik = useFormik({
    initialValues: {
      userName: '',
      birthday:'',
      email: '',
      phone: '' ,
      telegram: ''
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (

    <Form onSubmit={formik.handleSubmit}>
      <Label > <img alt='' src='/assets/UserInfo/Logo.png'/></Label>
      <input type='file' accept="image/png,image/gif,image/jpeg"/>
      <button type='submit'>+</button>
     <h3>Name user</h3>
      <p>User</p>
      <Label htmlFor="userName">User Name</Label>
      <Input
        id="userName"
        name="userName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.userName}
      />
      <Label htmlFor="birthday">Birthday</Label>
      <Input
        id="birthday"
        name="birthday"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.birthday}
      />
      <Label htmlFor="email">Email Address</Label>
      <Input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      <Label htmlFor="phone">Phone</Label>
      <Input
        id="phone"
        name="phone"
        type="phone"
        onChange={formik.handleChange}
        value={formik.values.phone}
      />
      <Label htmlFor="telegram">Telegram</Label>
      <Input
        id="telegram"
        name="telegram"
        type="telegram"
        onChange={formik.handleChange}
        value={formik.values.telegram}
      />
      <Button type="submit">Save changes</Button>
    </Form>

  );
};

