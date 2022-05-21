import React from "react";
import { NavLink } from "react-router-dom";
import { Dropdown, Menu } from "semantic-ui-react";

const CartSummary = () => {
  return (
    <div>
      <Menu.Item>
        <Dropdown item text="Cart">
          <Dropdown.Menu>
            <Dropdown.Item>Acer Laptop</Dropdown.Item>
            <Dropdown.Item>Asus Laptop</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item as={NavLink} to="/cart">
              Cart
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>
    </div>
  );
};

export default CartSummary;
