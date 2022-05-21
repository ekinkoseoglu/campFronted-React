import React from "react";
import { Button, Menu } from "semantic-ui-react";

const SignedOut = ({ signIn }) => {
  return (
    <Menu.Item>
      <Button onClick={signIn} primary>
        Sign In
      </Button>
      <Button primary style={{ marginLeft: "0.5em" }}>
        Sign Up
      </Button>
    </Menu.Item>
  );
};

export default SignedOut;
