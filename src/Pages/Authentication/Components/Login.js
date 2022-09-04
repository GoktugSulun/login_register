import React, { useContext } from 'react';
import TextInput from '../../../Core/Inputs/TextInput';
import { LoginWrapper } from '../Authencation.style';
import AuthenticationContext from '../Context/Context';

const Login = () => {
  const store = useContext(AuthenticationContext);
  const { setIsLoginActive } = store;

  const goToRegisterPageHandler = () => {
    setIsLoginActive(false);
  }

  return (
    <LoginWrapper>
      <TextInput />
      <button type="button" onClick={goToRegisterPageHandler}> Register </button>
    </LoginWrapper>
  )
}

export default Login