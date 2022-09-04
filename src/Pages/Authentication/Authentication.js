import React, { useContext, useEffect, useMemo, useState } from 'react'
import { AuthenticationWrapper } from './Authencation.style';
import { AuthenticationImage } from '../../Icons/icons';
import Register from './Components/Register';
import Login from './Components/Login';
import AuthenticationContext from './Context/Context';

const Authentication = () => {
   const [isLoginActive, setIsLoginActive] = useState(null);
   const [leftClassName, setLeftClassName] = useState("left");
   const [rightClassName, setRightClassName] = useState("right");
   const [imageClassName, setImageClassName] = useState("image");

  const store = useMemo(() => (
      {
         isLoginActive,
         setIsLoginActive
      }
  ), [isLoginActive])

  useEffect(() => {
   const { isLoginActive } = store;
   if (isLoginActive) {
      setIsLoginActive(true);
   }
  }, [store]);

  useEffect(() => {
      if (isLoginActive) {
         setRightClassName("right right__active");
         setLeftClassName("left left__inactive");
         setImageClassName("image image__left");
      }

      if (isLoginActive === false) {
         setRightClassName("right right__inactive");
         setLeftClassName("left left__active");
         setImageClassName("image image__right");
      }
  }, [isLoginActive]);

  return (
    <AuthenticationContext.Provider value={store}>
      <AuthenticationWrapper>
      <div className={imageClassName}>
         <AuthenticationImage />
      </div>
      <div className={leftClassName}>
         <Register />
      </div>
      <div className={rightClassName}>
         <Login />
      </div>
      </AuthenticationWrapper>
    </AuthenticationContext.Provider>
  )
}

export default Authentication