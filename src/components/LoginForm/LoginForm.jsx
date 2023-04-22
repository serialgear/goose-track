import { Formik } from 'formik';
import * as Yup from 'yup';
import * as STC from './LoginForm.styled';

const LoginValidationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),

  password: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

export const LoginForm = () => {
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={LoginValidationSchema}
      onSubmit={values => {
        // same shape as initial values
        console.log(values);
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
              </STC.Label>
              {errors.email && touched.email && errors.email}
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
              </STC.Label>
              {errors.password && touched.password && errors.password}
              <STC.Button type="submit" disabled={isSubmitting}>
                <STC.BtnSpan>Log in</STC.BtnSpan>
                <STC.Svg>
                  <use href={`${icons}#icon-log-in`} />
                </STC.Svg>
              </STC.Button>
            </STC.Form>
          </STC.Container>
        </STC.Box>
      )}
    </Formik>
  );
};
