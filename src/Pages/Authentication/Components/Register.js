import React, { useContext, useState } from 'react';
import { RegisterWrapper } from '../Authencation.style';
import AuthenticationContext from '../Context/Context';

const Register = () => {
   const store = useContext(AuthenticationContext);
  const { login: { setIsLoginActive }, register: { setIsRegisterActive }} = store;

  const goToLoginPageHandler = () => {
    setIsLoginActive(true);
  }
  return (
    <RegisterWrapper>
      <button type="button" onClick={goToLoginPageHandler} > Login </button>
    </RegisterWrapper>
  )
}

export default Register