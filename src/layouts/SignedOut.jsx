import React from "react";
import { Link } from "react-router-dom";
import { Button, Menu } from "semantic-ui-react";

const SignedOut = (props) => {
  return (
    <Menu.Item>
      <Link to={"/products"}>
        <Button onClick={props.signIn} primary>
          Sign In
        </Button>
      </Link>

      <Button primary style={{ marginLeft: "0.5em" }}>
        Sign Up
      </Button>
    </Menu.Item>
  );
};

export default SignedOut;
