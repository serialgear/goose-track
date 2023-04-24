import React, { useRef, useState } from 'react';
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
  TextAvatar, DefaultSvg,
} from './UserForm.styled';
import { format } from 'date-fns';
import defaultAvatar from '../../../images/sprite.svg';




export const UserForm = () => {

  const [image, setImage] = useState(null);
  const filePicker = useRef(null);

  const formik = useFormik({
    initialValues: {
      userName: '',
      birthday: '',
      email: '',
      phone: '',
      telegram: '',
    },
    onSubmit: values => {
      console.log(values);

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
    const formData = new FormData();
    formData.append('name',setImage);
    formData.append('email',setImage);
    formData.append('phone',setImage);
    formData.append('avatarURL',setImage);
    formData.append('telegram',setImage);
    formData.append('birthday',setImage);

    const response = await fetch('https://goose-track-api-3uhn.onrender.com/api', {
      method:'PATCH',
      body: formData,
    });
    const data = await response.json();
    console.log(data);

  };

  const handlePick = () => {
    filePicker.current.click();
  }

  const today = new Date();
  const formattedDate = format(today, 'yyyy-MM-dd');

  return (

    <Form onSubmit={formik.handleSubmit}>
      {image ? ( <LabelAva hmlFor="ava">
        <LabelImg
          alt="Мое изображение"
          src={image}
          width="48"
          height="48"/>
      </LabelAva> ) : (
        <LabelAva htmlFor="ava">
          <DefaultSvg>
            <use
              xlinkHref={`${defaultAvatar}#${
              'profile-avatar-f'
              }`}
            />
          </DefaultSvg>
        </LabelAva>
      )
      }

        <InputAva
          ref={filePicker}
          type="file"
          id="ava"
          name="ava"
          onChange={handleFileInputChange}

        />
        <ButtonPlus  onClick={handlePick}><span>+</span></ButtonPlus>
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
        <Button onChange={handleUpload} type="submit">Save changes</Button>
      </Form>

  );
};
