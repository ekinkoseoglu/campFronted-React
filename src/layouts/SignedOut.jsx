import React from "react";
import { Button, Menu } from "semantic-ui-react";

const SignedOut = () => {
  return (
    <div>
      <Menu.Item>
        <Button primary>Sign In</Button>
        <Button primary style={{ marginLeft: "0.5em" }}>
          Sign Up
        </Button>
      </Menu.Item>
    </div>
  );
};

export default SignedOut;
