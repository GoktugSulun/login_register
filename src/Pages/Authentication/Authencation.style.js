import styled from "@emotion/styled";

export const AuthenticationWrapper = styled.div`
   width: 100vw;
   height: 100vh;
   overflow: hidden;
   display: flex;
   position: relative;

   .left, .right {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: all 500ms;

      &__active {
         animation: grow 500ms;

         @keyframes grow {
            from {
               opacity: 0;
               visibility: hidden;
               scale: 0;
            }

            to {
               opacity: 1;
               visibility: visible;
               scale: 1;
            }
         }
      }
      
      &__inactive {
         opacity: 0;
         visibility: hidden;
         scale: 0;
         overflow: hidden;
      }
   }

   .image {
      position: absolute;
      top: 0;
      left: 0;
      width: 50%;
      height: 100%;
      z-index: 9999;
      background-color: #731896;
      display: flex;
      justify-content: center;
      transition: all 500ms;

      &__right {
         left: 50%;
      }

      &__left {
         left: 0;
      }

      svg {
         width: 90%;
         height: 100%;
      }
   }

   @media (max-width: 900px) {
      .image {
         &__right {
            left: 100%;
            width: 0;
         }

         &__left {
            left: -50%;
            width: 0;
         }
      }

      .left, .right {
         &__inactive {
            flex: 0;
         }
      }
   }
`;

export const LoginWrapper = styled.div`
   width: 70%;

   .content {
      border-radius: 10px;
      display: flex;
      flex-direction: column;
      gap: 20px;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      padding: 30px;

      &__title {
         color: #731896;
         margin-bottom: 20px;
      }

      .MuiInputBase-root.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
         border-color: #731896;
      }

      .MuiFormLabel-root.MuiInputLabel-root.Mui-focused {
         color: #731896;
      }

      .MuiButtonBase-root.MuiButton-root.Mui-disabled {
         background-color: #ccc;
      }

      &__footer {
         margin-top: 30px;

         p {
            color: #731896;

            span {
               display: inline-block;
               margin-left: 10px;
               text-decoration: underline;
               cursor: pointer;
               font-weight: bold;
            }
         }
      }
   }
`;

export const RegisterWrapper = styled.div`

`;