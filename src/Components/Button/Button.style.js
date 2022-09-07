import styled from "@emotion/styled";
import { Button } from "@mui/material";

export const CustomButton = styled(Button)`
   background-color: #731896;
   color: #FFFFFF;
   transition: scale 300ms;

   &:hover {
      background-color: #731896;
   }

   &:active {
      scale: 0.9;
   }
`;