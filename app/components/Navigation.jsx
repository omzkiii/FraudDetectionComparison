import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";



export default function Navigation() {
  return (
    <Navbar>
      <NavbarBrand>
        <p className="font-bold text-inherit">Spam Classifier</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="end">
        <NavbarItem>
          <Link color="foreground" href="/">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem >
          <Link color="foreground" href="/train">
            Train and Compare
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/detect">
            Detect
          </Link>
        </NavbarItem>
      </NavbarContent>
      
    </Navbar>
  );
}
