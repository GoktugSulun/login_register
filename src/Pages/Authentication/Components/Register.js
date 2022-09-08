import { useFormik } from 'formik';
import React, { useContext, useEffect, useState } from 'react';
import { CustomButton } from '../../../Components/Button/Button.style';
import TextInput from '../../../Components/Inputs/TextInput';
import { LoginRegisterWrapper } from '../Authencation.style';
import AuthenticationContext from '../Context/Context';

const validate = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = 'Boş bırakılamaz!';
  } else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(values.email))) {
    errors.email = 'Lütfen geçerli bir email giriniz!';
  }

  if (!values.password) {
    errors.password = 'Boş bırakılamaz!';
  } else if (values.password.length < 6) {
    errors.password = 'Lütfen en az 6 haneli bir şifre giriniz!';
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
      userEmail: '',
      userPassword: '',
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