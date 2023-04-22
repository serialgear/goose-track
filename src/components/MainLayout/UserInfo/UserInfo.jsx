import React, { useState } from 'react';
import { useFormik } from 'formik';
import {
  Form,
  Input,
  Label,
  Button,
  InputAva,
  ButtonPlus,
  LabelImg,
  LabelAva,
  ContainerAva,
  TitleAvatar, TextAvatar,
} from './UserInfo.styled';


export const UserInfo = () => {
  const [selectedFile,setSelectedFile] = useState(null);


  const formik = useFormik({
    initialValues: {
      userName: '',
      birthday: '',
      email: '',
      phone: '',
      telegram: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const handleFileInputChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      alert('Please select a file');
      return true;
    }
  };

  return (
    <>
      <ContainerAva>
        <LabelAva for='ava'>
          <LabelImg alt='' src='/goose-track/avatar_default.png' width='48' height='48' />
        </LabelAva>
        <InputAva type='file' id='ava' name='ava' onChange={handleFileInputChange}/>
        <ButtonPlus onClick={handleUpload}>
          +
        </ButtonPlus>
        <TitleAvatar>Name user</TitleAvatar>
        <TextAvatar>User</TextAvatar>
      </ContainerAva>


      <Form onSubmit={formik.handleSubmit}>

        <Label htmlFor='userName'>User Name</Label>
        <Input
          id='userName'
          name='userName'
          type='text'
          onChange={formik.handleChange}
          value={formik.values.userName}
        />
        <Label htmlFor='birthday'>Birthday</Label>
        <Input
          id='birthday'
          name='birthday'
          type='text'
          onChange={formik.handleChange}
          value={formik.values.birthday}
        />
        <Label htmlFor='email'>Email Address</Label>
        <Input
          id='email'
          name='email'
          type='email'
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <Label htmlFor='phone'>Phone</Label>
        <Input
          id='phone'
          name='phone'
          type='phone'
          onChange={formik.handleChange}
          value={formik.values.phone}
        />
        <Label htmlFor='telegram'>Telegram</Label>
        <Input
          id='telegram'
          name='telegram'
          type='telegram'
          onChange={formik.handleChange}
          value={formik.values.telegram}
        />
        <Button type='submit'>Save changes</Button>
      </Form>

    </>

  );
};

