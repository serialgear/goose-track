import { Formik } from 'formik';
import { authLogin } from 'redux/auth/auth.operations';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import * as STC from './LoginForm.styled';
import logInIcon from '../../images/sprite.svg';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import loginRocketSvg from '../../images/Icons/login-rocket-goose.svg';

const LoginValidationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),

  password: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

export const LoginForm = () => {
  const dispatch = useDispatch();

  return (
    <>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={LoginValidationSchema}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          try {
            await dispatch(
              authLogin({
                email: values.email,
                password: values.password,
              })
            ).unwrap();
            setSubmitting(false);
            resetForm();
          } catch (error) {
            setSubmitting(false);
            toast.error(
              error ||
                'It seems like your goose flew in the wrong direction. Please try again.'
            );
          }
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <STC.Box>
            <STC.Container>
              <STC.Form onSubmit={handleSubmit}>
                <STC.Title>Log In</STC.Title>
                <STC.Label htmlFor="email">
                  <STC.Span>Email</STC.Span>
                  <STC.Input
                    type="email"
                    name="email"
                    id="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    placeholder="Enter your email"
                  />
                  <STC.Errors>
                    {errors.email && touched.email && errors.email}
                  </STC.Errors>
                </STC.Label>
                <STC.Label htmlFor="password">
                  <STC.Span>Password</STC.Span>
                  <STC.Input
                    type="password"
                    name="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    placeholder="Enter password"
                  />
                  <STC.Errors>
                    {errors.password && touched.password && errors.password}
                  </STC.Errors>
                </STC.Label>

                <STC.Button type="submit" disabled={isSubmitting}>
                  <STC.BtnSpan>Log in</STC.BtnSpan>
                  <STC.Svg>
                    <use href={`${logInIcon}#login-door-sf`} />
                  </STC.Svg>
                </STC.Button>
              </STC.Form>

              <Link to="/register">
                <STC.H2>Sign up</STC.H2>
              </Link>

              <STC.CloudSvg>
                <use href={`${logInIcon}#login-cloud`} />
              </STC.CloudSvg>
              <STC.ImgRocketSvg src={`${loginRocketSvg}`} alt="rocket" />
              <STC.GooseText>
                Quickly <STC.GooseTextAccent>come in</STC.GooseTextAccent> and{' '}
                {'\n'}write down your {'\n'}tasks for the day!
              </STC.GooseText>
            </STC.Container>
          </STC.Box>
        )}
      </Formik>
    </>
  );
};
