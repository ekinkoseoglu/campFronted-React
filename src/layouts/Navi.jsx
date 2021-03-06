import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";
import { Container, Menu } from "semantic-ui-react";
import CartSummary from "./CartSummary";
import SignedIn from "./SignedIn";
import SignedOut from "./SignedOut";

const Navi = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const location = useLocation();

  useEffect(() => {}, [location]);

  const handleSignOut = () => {
    setIsAuthenticated(false);
    console.log("Çıkış Yapıldı");
  };

  const handleSignIn = () => {
    setIsAuthenticated(true);
    console.log("Giriş Yapıldı");
  };

  return (
    <div>
      <Menu inverted>
        <Container>
          <Menu.Item name="home" />
          <Menu.Item name="messages" />
          {!isAuthenticated && (
            <Menu.Item as={NavLink} to="/products/add">
              Add Product
            </Menu.Item>
          )}

          <Menu.Menu position="right">
            {cartItems.length > 0 && <CartSummary />}
            {isAuthenticated && <SignedIn signOut={handleSignOut} />}
            {!isAuthenticated && <SignedOut signIn={handleSignIn} />}
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
};

export default Navi;
