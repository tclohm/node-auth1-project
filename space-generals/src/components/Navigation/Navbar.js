import React, { useState } from 'react';
import { Switch, Route, Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button
} from 'reactstrap';

import Home from "../Home/Home.js";
import { Register } from "../Auth";

export const Navigation = () => {
	  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar dark expand="md">
        <Link to="/">
        <NavbarBrand><i class="far fa-hand-spock"></i></NavbarBrand>
        </Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
                <Link to="/register">
                  <NavLink>
                	<Button color="success">
                		<i class="fas fa-cash-register"></i> / <i class="fas fa-sign-in-alt"></i>
                	</Button>
                  </NavLink>
                </Link>
            </NavItem>
            <NavItem>
            	<Button color="link">
            		<NavLink href="#"><i class="fas fa-sign-out-alt"></i></NavLink>
              	</Button>
            </NavItem>
            </Nav>
        </Collapse>
      </Navbar>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
    </div>
  );
};