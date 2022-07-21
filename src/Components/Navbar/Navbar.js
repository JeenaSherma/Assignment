import React from "react";
import { Icon } from "@iconify/react";

/* using css */

import { Navinfo, Homediv, Logoutdiv, Buydiv, Wholediv } from "./NavbarStyles";

const Navbar = () => {
  return (
    <Wholediv>
      <Navinfo>
        <Homediv>
          <Icon className="icon" icon="arcticons:smart-home" />
          <span>Home</span>
        </Homediv>
        <Logoutdiv>
          <Icon className="icon" icon="bi:person-circle" />
          <span>Logout</span>
        </Logoutdiv>
      </Navinfo>
      <Buydiv>
        <span style={{ color: "rgb(217,41,42)" }}>
          DO YOU
          <b>
            {" "}
            <span style={{ color: "rgb(151,11,216)" }}>WANT</span>
          </b>{" "}
          TO BUY{" "}
          <b>
            {" "}
            <span style={{ color: "rgb(151,11,216)" }}>SOMETHING</span>
          </b>{" "}
          <br /> EXCITING?
        </span>
      </Buydiv>
    </Wholediv>
  );
};

export default Navbar;
