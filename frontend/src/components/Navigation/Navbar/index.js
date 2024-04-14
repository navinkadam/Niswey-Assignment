import React from "react";
import NavbarItem from "../NavbarItem";
import Logo from "../../Logo/";
import { commonRoutes } from "../../../constant/route";
import "./navbar.css";

export default function Navbar() {
  return (
    <header>
      <div className="nav-wrapper">
        <div className="nav-left">
          <Logo />
        </div>
        <div className="nav-right">
          <ul className="nav-ul">
            {commonRoutes.map((route, index) => (
              <NavbarItem
                key={`route-common-${index}`}
                to={route.to}
                label={route.label}
              />
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}
