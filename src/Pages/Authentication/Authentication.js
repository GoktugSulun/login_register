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
  ), [isLoginActive]);

  useEffect(() => {
      if (isLoginActive) {
         setRightClassName("right right__active");
         setLeftClassName("left left__inactive");
         setImageClassName("image image__left");

         const value = JSON.stringify({
            isLoginActive: true,
            rightClassName: "right right__active",
            leftClassName: "left left__inactive",
            imageClassName: "image image__left",
         });
         localStorage.setItem("authenticationClasses", value);
      }

      if (isLoginActive === false) {
         setRightClassName("right right__inactive");
         setLeftClassName("left left__active");
         setImageClassName("image image__right");

         const value = JSON.stringify({
            isLoginActive: false,
            rightClassName: "right right__inactive",
            leftClassName: "left left__active",
            imageClassName: "image image__right",
         });
         localStorage.setItem("authenticationClasses", value);
      }
  }, [isLoginActive]);

  useEffect(() => {
   const authenticationClasses = JSON.parse(localStorage.getItem("authenticationClasses"));
   setIsLoginActive(authenticationClasses.isLoginActive);
   setRightClassName(authenticationClasses.rightClassName);
   setLeftClassName(authenticationClasses.leftClassName);
   setImageClassName(authenticationClasses.imageClassName);
  }, []);

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