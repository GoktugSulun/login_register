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
      }
   }

   .image {
      position: absolute;
      top: 0;
      left: 0;
      width: 50%;
      height: 100%;
      z-index: 9999;
      background-color: #F6F6F6;
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
`;

export const LoginWrapper = styled.div`
   padding: 50px;
   width: 100%;
   height: 100%;
`;

export const RegisterWrapper = styled.div`

`;