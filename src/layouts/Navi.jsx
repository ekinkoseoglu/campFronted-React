import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Container, Menu } from "semantic-ui-react";
import AddProduct from "../pages/AddProduct";
import CartSummary from "./CartSummary";
import SignedIn from "./SignedIn";
import SignedOut from "./SignedOut";

const Navi = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const location = useLocation();

  const handleSignOut = () => {
    setIsAuthenticated(false);
    console.log("Çıkış Yapıldı");
  };

  const handleSignIn = () => {
    setIsAuthenticated(true);
    console.log("Giriş Yapıldı");
  };

  const handleAddProduct = () => {
    location.push("/products/add");
  };

  return (
    <div>
      <Menu inverted>
        <Container>
          <Menu.Item name="home" />
          <Menu.Item name="messages" />
          {isAuthenticated && (
            <Menu.Item as={NavLink} to="/products/add">
              {" "}
              Add Product
            </Menu.Item>
          )}
          <Menu.Menu position="right">
            <CartSummary />
            {isAuthenticated && <SignedIn signOut={handleSignOut} />}
            {!isAuthenticated && <SignedOut signIn={handleSignIn} />}
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
};

export default Navi;
