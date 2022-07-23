import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { Dropdown, Label, Menu } from "semantic-ui-react";

const CartSummary = () => {
  const { cartItems } = useSelector((state) => state.cart);

  return (
    <div>
      <Menu.Item>
        <Dropdown item text="Cart">
          <Dropdown.Menu>
            {cartItems.map((item) => (
              <Dropdown.Item key={item.product.productId}>
                {item.product.productName}
                <Label key={item.productId}>{item.quantity}</Label>
              </Dropdown.Item>
            ))}
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
