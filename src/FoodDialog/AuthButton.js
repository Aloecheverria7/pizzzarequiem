import { Alert } from '@material-ui/lab';
import React from "react";

const AuthButton = props => {
  let { isLoggedIn } = props;
  switch (isLoggedIn) {
    case true:
      return <Alert variant="filled" severity="success">
      This is a success alert — check it out!
    </Alert>;
      break;
    case false:
      return <Alert variant="filled" severity="error">
      This is an error alert — check it out!
    </Alert>
      break;
    default:
      return null;
  }
};
export default AuthButton;