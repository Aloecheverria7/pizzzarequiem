import React from 'react';
import Alert from '@material-ui/lab/Alert';
import DialogContentText from "@material-ui/core/DialogContentText";
import styled from "styled-components";

const OrderContainer = styled.div`
  padding: 10px 0px;
  border-bottom: 1px solid grey;
  ${({ editable }) =>
    editable
      ? `
    &:hover {
      cursor: pointer;
      background-color: #e7e7e7;
    }
  `
      : `
    pointer-events: none; 
  `}
`;

export function AlertDialog() {

  return (
<OrderContainer>
<DialogContentText> <div>
      <Alert severity="success">This is a success alert — check it out!</Alert>
     </div></DialogContentText>
</OrderContainer>
  );
}