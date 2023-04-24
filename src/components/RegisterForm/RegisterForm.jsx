import * as React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { signupUser } from '../../redux/auth/auth.operations';
import { Formik } from 'formik';
import logInIcon from '../../images/logInIcon.svg';
import logInCloud from '../../images/sprite.svg';
import LoginGoose from '../../images/login-goose-.svg';
import * as STC from '../LoginForm/LoginForm.styled';
import { LoginImg, LoginImg2, Text, Span } from './RegisterForm.styled';

const RegisterValidationSchema = Yup.object().shape({
  name: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});
export const RegisterForm = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ name: '', email: '', password: '' }}
      validationSchema={RegisterValidationSchema}
      onSubmit={(values, {resetForm}) => {
        dispatch(
          signupUser({
            name: values.name,
            email: values.email,
            password: values.password,
          })
        ).then(() => {
          resetForm();
        });
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
      }) => (
        <STC.Box>
          <STC.Container>
            <STC.Form onSubmit={handleSubmit} autoComplete="on">
              <STC.Title>Sign Up</STC.Title>
              <STC.Label htmlFor="name">
                Name
                <STC.Input
                  id="name"
                  name="name"
                  type="text"
                  onBlur={handleBlur}
                  value={values.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                />
                <span>{errors.name && touched.name && errors.name}</span>
              </STC.Label>

              <STC.Label htmlFor="email">
                Email
                <STC.Input
                  id="email"
                  name="email"
                  type="email"
                  value={values.email}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="Enter email"
                />
                <span>{errors.email && touched.email && errors.email}</span>
              </STC.Label>

              <STC.Label htmlFor="password">
                Password
                <STC.Input
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="off"
                  placeholder="Enter password"
                  value={values.password}
                  onChange={handleChange}
                />
                <span>
                  {errors.password && touched.password && errors.password}
                </span>
              </STC.Label>

              <STC.Button type="submit">
                <STC.BtnSpan>Sign Up</STC.BtnSpan>
                <STC.Svg>
                  <use href={`${logInIcon}#log-in`} />
                </STC.Svg>
              </STC.Button>
            </STC.Form>
            <Link to="/login">
              <STC.H2>Log in</STC.H2>
            </Link>

            <LoginImg
              alt="LoginGoose"
              src={`${LoginGoose}`}
              width="353"
              height="330"
            />
            <LoginImg2 width="50" height="50">
              <use xlinkHref={`${logInCloud}#${'login-cloud'}`} />
            </LoginImg2>
            <Text>
              Quickly <Span>register</Span> and familiarize yourself with the
              application!
            </Text>
          </STC.Container>
        </STC.Box>
      )}
    </Formik>
  );
};
