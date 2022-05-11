import React from "react";
import { Button, Container, Menu } from "semantic-ui-react";
import CartSummary from "./CartSummary";

const Navi = () => {
  return (
    <div>
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item name="home" />
          <Menu.Item name="messages" />

          <Menu.Menu inverted position="right">
            <CartSummary />
            <Menu.Item>
              <Button primary>Sign Up</Button>
            </Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
};

export default Navi;
