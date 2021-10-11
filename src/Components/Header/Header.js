import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import boxlogo from "../images/box.png";
import user from "../images/user.png";
import "./Header.css";

const Header = () => {
  return (
    <Container>
      <Navbar
        className="p-3"
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
      >
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <NavLink className="ms-3 me-3" to="/logo">
            <img src={boxlogo} alt="" />
          </NavLink>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <NavLink
                activeClassName="navs-active"
                className="navs ms-3 me-3  text-decoration-none"
                to="/home"
              >
                Home
              </NavLink>
              <NavLink
                activeClassName="navs-active"
                className="navs ms-3 me-3  text-decoration-none"
                to="/about"
              >
                About
              </NavLink>
              <NavLink
                activeClassName="navs-active"
                className="navs ms-3 me-3  text-decoration-none"
                to="/features"
              >
                Features
              </NavLink>
              <NavLink
                activeClassName="navs-active"
                className="navs ms-3 me-3  text-decoration-none"
                to="/terms"
              >
                Terms
              </NavLink>
            </Nav>
            <Nav>
              <NavLink to="/user">
                <img width={24} height={24} src={user} alt="" />
              </NavLink>
              <NavLink
                activeClassName="navs-active"
                className="navs ms-3 me-3  text-decoration-none"
                to="/deets"
              >
                User
              </NavLink>
              <NavLink
                activeClassName="navs-active"
                className="navs ms-3 me-3  text-decoration-none"
                to="/signin"
              >
                Sign In
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default Header;
