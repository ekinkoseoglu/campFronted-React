import React from "react";
import { Button, Menu } from "semantic-ui-react";

const SignedOut = (props) => {
  return (
    <div>
      <Menu.Item>
        <Button onClick={props.signIn} primary>
          Sign In
        </Button>
        <Button primary style={{ marginLeft: "0.5em" }}>
          Sign Up
        </Button>
      </Menu.Item>
    </div>
  );
};

export default SignedOut;
