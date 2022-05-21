import React from "react";
import { Dropdown, Image, Menu } from "semantic-ui-react";

const SignedIn = ({ signOut }) => {
  return (
    <Menu.Item>
      <Image
        avatar
        spaced="right"
        src="https://pbs.twimg.com/profile_images/1503410280642064386/gfH8F4HQ_400x400.jpg"
      ></Image>
      <Dropdown pointing="top left" text="Ekin">
        <Dropdown.Menu>
          <Dropdown.Item text="Profile Details" icon="info"></Dropdown.Item>
          <Dropdown.Item
            onClick={signOut}
            text="Sign Out"
            icon="sign-out"
          ></Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Menu.Item>
  );
};

export default SignedIn;
