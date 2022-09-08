import { useFormik } from 'formik';
import React, { useContext, useEffect, useState } from 'react';
import { CustomButton } from '../../../Components/Button/Button.style';
import TextInput from '../../../Components/Inputs/TextInput';
import { LoginRegisterWrapper } from '../Authencation.style';
import AuthenticationContext from '../Context/Context';

const validate = (values) => {
  const errors = {};

  if (!values.userFullname) {
    errors.userFullname = 'Boş bırakılamaz!';
  }

  if (!values.userEmail) {
    errors.userEmail = 'Boş bırakılamaz!';
  } else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(values.userEmail))) {
    errors.userEmail = 'Lütfen geçerli bir email giriniz!';
  }

  if (!values.userPassword) {
    errors.userPassword = 'Boş bırakılamaz!';
  } else if (values.userPassword.length < 6) {
    errors.userPassword = 'Lütfen en az 6 haneli bir şifre giriniz!';
  }

  if (!values.userRPassword) {
    errors.userRPassword = 'Boş bırakılamaz!';
  } else if (values.userRPassword.length < 6) {
    errors.userRPassword = 'Lütfen en az 6 haneli bir şifre giriniz!';
  } else if (values.userRPassword !== values.userPassword) {
    errors.userRPassword = 'Şifreler uyuşmuyor!';
  }

  return errors;
};

const Register = () => {
  const [isDisabledRegisterButton, setIsDisabledRegisterButton] = useState(false);
  const store = useContext(AuthenticationContext);
  const { setIsLoginActive } = store;
  const formik = useFormik({
    validate,
    initialValues: {
      userFullname: '',
      userEmail: '',
      userPassword: '',
      userRPassword: '',
    },
    onSubmit: (values) => {
      console.log(values, ' values');
    }
 });

  const goToLoginPageHandler = () => {
    setIsLoginActive(true);
  }

  useEffect(() => {
    const bool = formik.submitCount !== 0 && Object.keys(formik.errors).length > 0;
    setIsDisabledRegisterButton(bool);
  }, [formik.submitCount, formik.errors]);

  return (
    <LoginRegisterWrapper>
      <div className="content">
        <h1 className="content__title"> REGISTER </h1>
        <TextInput
          label="Fullname"
          name="userFullname"
          formik={formik}
        />
        <TextInput
          label="Email"
          name="userEmail"
          formik={formik}
        />
        <TextInput
          label="Password"
          name="userPassword"
          formik={formik}
          type="password"
        />
        <TextInput
          label="R-Password"
          name="userRPassword"
          formik={formik}
          type="password"
        />
        <CustomButton
          disabled={isDisabledRegisterButton} 
          onClick={() => formik.handleSubmit()}
        > 
          Login 
        </CustomButton>

        <div className="content__footer">
          <p> 
            Don't you have an account ? 
            <span onClick={goToLoginPageHandler}>Click here</span> 
          </p>
        </div>
      </div>
    </LoginRegisterWrapper>
  )
}

export default Register;