import React, { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Container, Menu } from "semantic-ui-react";
import CartSummary from "./CartSummary";
import SignedIn from "./SignedIn";
import SignedOut from "./SignedOut";

const Navi = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const history = useHistory();

  const handleSignOut = () => {
    setIsAuthenticated(false);
    console.log("Çıkış Yapıldı");
    history.push("/");
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
