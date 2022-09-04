import React, { useContext } from 'react';
import { LoginWrapper } from '../Authencation.style';
import AuthenticationContext from '../Context/Context';

const Login = () => {
  const store = useContext(AuthenticationContext);
  const { login: { setIsLoginActive }, register: { setIsRegisterActive }} = store;

  const goToRegisterPageHandler = () => {
    setIsLoginActive(false);
  }

  return (
    <LoginWrapper>
      <button type="button" onClick={goToRegisterPageHandler}> Register </button>
    </LoginWrapper>
  )
}

export default Login