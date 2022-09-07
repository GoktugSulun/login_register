import React, { useContext } from 'react';
import { CustomButton } from '../../../Components/Button/Button.style';
import TextInput from '../../../Components/Inputs/TextInput';
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
      <div className="content">
        <h1 className="content__title"> LOGIN </h1>
        <TextInput
          label="Email"
        />
        <TextInput
          label="Password"
        />
        <CustomButton> Login </CustomButton>

        <div className="content__footer">
          <p> 
            Don't you have an account ? 
            <span onClick={goToRegisterPageHandler}>Click here</span> 
          </p>
        </div>
      </div>
    </LoginWrapper>
  )
}

export default Login