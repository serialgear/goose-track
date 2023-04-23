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
  TitleAvatar,
  TextAvatar
} from './UserForm.styled';
import { format } from 'date-fns';
import defaultAvatar from '../../../images/avatar_default.png';

export const UserForm = () => {
  const [image, setImage] = useState(null);

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

  const handleFileInputChange = event => {
    const file = event.target.files[0];
    const imageUrl = URL.createObjectURL(file);
    setImage(imageUrl);
  };

  const handleUpload = async () => {
    if (!setImage) {
      alert('Please select a file');
      return true;
    }
  };

  const today = new Date();
  const formattedDate = format(today, 'yyyy-MM-dd');

  return (

    <Form onSubmit={formik.handleSubmit}>
      {image ? ( <LabelAva for="ava">
        <LabelImg
          alt="Мое изображение"
          src={`${image}`}
          width="48"
          height="48"/>
      </LabelAva> ) : (
        <LabelAva for="ava">
          <LabelImg
            alt=""
            src={`${defaultAvatar}`}
            width="48"
            height="48"/>
        </LabelAva>
      )
      }

        <InputAva
          type="file"
          id="ava"
          name="ava"
          onChange={handleFileInputChange}
        />
        <ButtonPlus onClick={handleUpload}><span>+</span></ButtonPlus>
        <TitleAvatar>Name user</TitleAvatar>
        <TextAvatar>User</TextAvatar>

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
          type="date"
          onChange={formik.handleChange}
          value={formattedDate}
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
