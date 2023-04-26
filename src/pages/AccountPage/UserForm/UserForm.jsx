import React, { useRef, useState } from 'react';
import { Formik } from 'formik';
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
  DefaultSvg, FlexInput, AvatarBlock, FlexChild,
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
import * as Yup from 'yup';



export const UserForm = () => {
  const [image, setImage] = useState(null);
  const filePicker = useRef(null);
  const dispatch = useDispatch();

  const name = useSelector(selectUserName);
  const email = useSelector(selectUserEmail);
  const phone = useSelector(selectUserPhone);
  const telegram = useSelector(selectUserTelegram);
  const avatar = useSelector(selectUserAvatarURL);
  const birthday = useSelector(selectUserBirthday) || Date.now();

  const formattedDate = format(new Date(birthday), 'yyyy-MM-dd');


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

  const handlePick = () => {
    filePicker.current.click();
  };


  return (
    <Formik
      initialValues={{avatar, name, birthday:formattedDate , email, phone, telegram}}
      validationSchema={Yup.object({
        name: Yup.string()
          .max(16, 'Максимальная длина имени пользователя - 16 символов')
          .required('Имя пользователя обязательно'),
        email: Yup.string().email('Неверный формат электронной почты').required('Электронная почта обязательна'),
        birthday: Yup.date().required('Дата рождения обязательна').nullable(),
        phone: Yup.string()
          .matches(/^\+380\d{9}$/, 'Номер телефона должен быть в формате +380XXXXXXXXX')
          .required('Номер телефона обязателен'),
        telegram: Yup.string().max(16, 'Максимальная длина telegram - 16 символов'),
      })}

      onSubmit={async (values, { setSubmitting }) => {
        await dispatch(
          userForm({
            name: values.name,
            birthday: values.birthday,
            email: values.email,
            phone: values.phone,
            telegram: values.telegram,
          }),
        ).unwrap();
        setSubmitting(false);
      }}
    >
      {formik => (
        <Form onSubmit={formik.handleSubmit}>
          <AvatarBlock>
            {image ? (
              <LabelAva htmlFor='avatar'>
                <LabelImg alt='Мое изображение' src={image} width='48' height='48' />
              </LabelAva>
            ) : (
              <LabelAva htmlFor='avatar'>
                <DefaultSvg>
                  <use xlinkHref={`${defaultAvatar}#${'profile-avatar-f'}`} />
                </DefaultSvg>
              </LabelAva>
            )}

            <InputAva
              ref={filePicker}
              type='file'
              id='avatar'
              name='avatar'
              onChange={handleFileInputChange}
            />
            {/*{formik.touched.avatar && formik.errors.avatar ? (*/}
            {/*  <div>{formik.errors.avatar}</div>*/}
            {/*) : null}*/}
            <ButtonPlus onClick={handlePick}>
              <span>+</span>
            </ButtonPlus>
            <TitleAvatar>{name}</TitleAvatar>
            <TextAvatar>User</TextAvatar>
          </AvatarBlock>

          <FlexInput>
            <FlexChild>
              <Label htmlFor='name'>User Name</Label>
              <Input
                id='name'
                name='name'
                type='text'
                placeholder='name'
                onChange={formik.handleChange}
                value={formik.values.name}
                {...formik.getFieldProps('name')}
              />
              {formik.touched.name && formik.errors.name ? (
                <div>{formik.errors.name}</div>
              ) : null}
            </FlexChild>
            <FlexChild>
              <Label htmlFor='birthday'>Birthday</Label>
              <Input
                id='birthday'
                name='birthday'
                type='date'
                onChange={formik.handleChange}
                value={formik.values.birthday === '' || !formik.values.birthday
                  ? ''
                  : formik.values.birthday}
                {...formik.getFieldProps('birthday')}
              />
              {formik.touched.birthday && formik.errors.birthday ? (
                <div>{formik.errors.birthday}</div>
              ) : null}
            </FlexChild>
            <FlexChild>
              <Label htmlFor='email'>Email Address</Label>
              <Input
                id='email'
                name='email'
                type='email'
                placeholder='email'
                onChange={formik.handleChange}
                value={formik.values.email}
                {...formik.getFieldProps('email')}
              />
              {formik.touched.email && formik.errors.email ? (
                <div>{formik.errors.email}</div>
              ) : null}
            </FlexChild>
            <FlexChild>
              <Label htmlFor='phone'>Phone</Label>
              <Input
                id='phone'
                name='phone'
                type='phone'
                onChange={formik.handleChange}
                placeholder='phone number'
                value={
                  formik.values.phone === '' || !formik.values.phone
                    ? ''
                    : formik.values.phone
                }
                {...formik.getFieldProps('phone')}
              />
              {formik.touched.phone && formik.errors.phone ? (
                <div>{formik.errors.phone}</div>
              ) : null}
            </FlexChild>
            <FlexChild>
              <Label htmlFor='telegram'>Telegram</Label>
              <Input
                id='telegram'
                name='telegram'
                type='telegram'
                onChange={formik.handleChange}
                placeholder='telegram'
                value={
                  formik.values.telegram === '' || !formik.values.telegram
                    ? ''
                    : formik.values.telegram
                }
                {...formik.getFieldProps('telegram')}
              />
              {formik.touched.telegram && formik.errors.telegram ? (
                <div>{formik.errors.telegram}</div>
              ) : null}
            </FlexChild>

          </FlexInput>

          <Button onSubmit={handleUpload} type='submit' disabled={formik.isSubmitting}>
            Save changes
          </Button>
        </Form>
      )}
    </Formik>
  );
};
