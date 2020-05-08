import React from 'react';
import Alert from '@material-ui/lab/Alert';
import DialogContentText from "@material-ui/core/DialogContentText";

export function AlertDialog() {

  return (
      <DialogContentText> <div>
      <Alert severity="success">This is a success alert — check it out!</Alert>
     </div></DialogContentText>
    
  );
}