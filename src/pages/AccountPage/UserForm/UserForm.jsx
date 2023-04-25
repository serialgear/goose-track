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
  TextAvatar,
  DefaultSvg, FlexInput, AvatarBlock, FlexChield,
} from './UserForm.styled';
import { format } from 'date-fns';
import defaultAvatar from '../../../images/sprite.svg';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectUserAvatarURL,
  selectUserBirthday,
  selectUserEmail,
  selectUserName,
  selectUserPhone,
  selectUserTelegram,
} from '../../../redux/auth/auth.selectors';

import { userForm } from '../../../redux/auth/auth.operations';

export const UserForm = () => {
  const [image, setImage] = useState(null);
  const filePicker = useRef(null);
  const dispatch = useDispatch();

  const name = useSelector(selectUserName);
  const email = useSelector(selectUserEmail);
  const phone = useSelector(selectUserPhone);
  const telegram = useSelector(selectUserTelegram);
  const avatarURL = useSelector(selectUserAvatarURL);
  const birthday = useSelector(selectUserBirthday) || Date.now();

  const formattedDate = format(new Date(birthday), 'yyyy-MM-dd');

  const formik = useFormik({
    initialValues: {
      avatarURL: avatarURL,
      name: name,
      birthday: formattedDate,
      email: email,
      phone: phone,
      telegram: telegram,
    },
    onSubmit: values => {
      console.log('values ', values);
      dispatch(
        userForm({
          name: values.name,
          birthday: values.birthday,
          email: values.email,
          phone: values.phone,
          telegram: values.telegram,
        })
      );

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

    // dispatch(userForm({name: values.name ,email:values.email, phone:values.phone,telegram:values.telegram}));
    // const formData = new FormData();
    // console.log(formData);

    //   formData.append('name','email','phone', 'avatarURL','birthday', 'telegram',  setImage);
    //
    //
    //   await axios.patch('https://goose-track-api-3uhn.onrender.com/api/user/info',
    //     formData).then(console.log).catch(console.error);
    //
  };

  const handlePick = () => {
    filePicker.current.click();
  };

  // const today = new Date();
  // const formattedDate =  format(today, 'yyyy-MM-dd');

  return (
    <Form onSubmit={formik.handleSubmit}>
      <AvatarBlock>
        {image ? (
          <LabelAva htmlFor="avatarURL">
            <LabelImg alt="Мое изображение" src={image} width="48" height="48" />
          </LabelAva>
        ) : (
          <LabelAva htmlFor="avatarURL">
            <DefaultSvg>
              <use xlinkHref={`${defaultAvatar}#${'profile-avatar-f'}`} />
            </DefaultSvg>
          </LabelAva>
        )}

        <InputAva
          ref={filePicker}
          type="file"
          id="avatarURL"
          name="avatarURL"
          onChange={handleFileInputChange}
        />
        <ButtonPlus onClick={handlePick}>
          <span>+</span>
        </ButtonPlus>
        <TitleAvatar>{name}</TitleAvatar>
        <TextAvatar>User</TextAvatar>
      </AvatarBlock>

<FlexInput>
  <FlexChield>
    <Label htmlFor="name">User Name</Label>
    <Input
      id="name"
      name="name"
      type="text"
      placeholder="name"
      onChange={formik.handleChange}
      value={formik.values.name}
    />
  </FlexChield>
  <FlexChield>
    <Label htmlFor="birthday">Birthday</Label>
    <Input
      id="birthday"
      name="birthday"
      type="date"
      onChange={formik.handleChange}
      value={formik.values.birthday === '' || !formik.values.birthday
        ? ''
        : formik.values.birthday}
    />
  </FlexChield>
  <FlexChield>
    <Label htmlFor="email">Email Address</Label>
    <Input
      id="email"
      name="email"
      type="email"
      placeholder="email"
      onChange={formik.handleChange}
      value={formik.values.email}
    />
  </FlexChield>
  <FlexChield>
    <Label htmlFor="phone">Phone</Label>
    <Input
      id="phone"
      name="phone"
      type="phone"
      onChange={formik.handleChange}
      placeholder="phone number"
      value={
        formik.values.phone === '' || !formik.values.phone
          ? ''
          : formik.values.phone
      }
    />
  </FlexChield>
 <FlexChield>
   <Label htmlFor="telegram">Telegram</Label>
   <Input
     id="telegram"
     name="telegram"
     type="telegram"
     onChange={formik.handleChange}
     placeholder="telegram"
     value={
       formik.values.telegram === '' || !formik.values.telegram
         ? ''
         : formik.values.telegram
     }
   />
 </FlexChield>

</FlexInput>

      <Button onSubmit={handleUpload} type="submit">
        Save changes
      </Button>
    </Form>
  );
};
