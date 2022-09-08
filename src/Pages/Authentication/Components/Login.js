import { useFormik } from 'formik';
import React, { useContext, useEffect, useState } from 'react';
import { CustomButton } from '../../../Components/Button/Button.style';
import TextInput from '../../../Components/Inputs/TextInput';
import { LoginRegisterWrapper } from '../Authencation.style';
import AuthenticationContext from '../Context/Context';

const validate = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = 'Required!';
  } else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(values.email))) {
    errors.email = 'Please enter a valid email!';
  }

  if (!values.password) {
    errors.password = 'Required!';
  } else if (values.password.length < 6) {
    errors.password = 'Please enter a password with at least 6 characters';
  }

  return errors;
};

const Login = () => {
  const [isDisabledLoginButton, setIsDisabledLoginButton] = useState(false);
  const store = useContext(AuthenticationContext);
  const { setIsLoginActive } = store;
  const formik = useFormik({
    validate,
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values) => {
      console.log(values, ' values');
    }
 });

  const goToRegisterPageHandler = () => {
    setIsLoginActive(false);
  }

  useEffect(() => {
    const bool = formik.submitCount !== 0 && Object.keys(formik.errors).length > 0;
    setIsDisabledLoginButton(bool);
  }, [formik.submitCount, formik.errors]);

  return (
    <LoginRegisterWrapper>
      <div className="content">
        <h1 className="content__title"> LOGIN </h1>
        <TextInput
          label="Email"
          name="email"
          formik={formik}
        />
        <TextInput
          label="Password"
          name="password"
          formik={formik}
          type="password"
        />
        <CustomButton
          disabled={isDisabledLoginButton} 
          onClick={() => formik.handleSubmit()}
        > 
          Login 
        </CustomButton>

        <div className="content__footer">
          <span>Don't you have an account ?</span> 
          <span onClick={goToRegisterPageHandler}>Click here</span> 
        </div>
      </div>
    </LoginRegisterWrapper>
  )
}

export default Login