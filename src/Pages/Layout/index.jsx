import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { Container, Navbar, Nav, Button, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";

export const Layout = () => {
  const [authStatus, setAuthStatus] = useState(false);

  return (
    <>
      <Navbar bg="light" className="navbar">
        <Container>
          <Navbar.Brand>
            <Link to={"/"}>Ecommerce Store</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            {authStatus === true ? (
              <Nav className="ms-auto my-2 my-lg-0 gap-3 align-items-center">
                <Link to={"/products"} className="paragraph">
                  Products
                </Link>
                <Link to={"/checkout"} className="paragraph">
                  <FiShoppingCart /> <Badge bg="secondary">0</Badge>
                  <span className="visually-hidden">unread messages</span>
                </Link>
                <Button
                  variant="link"
                  type="button"
                  className="text-decoration-none text-color"
                >
                  Logout
                </Button>
              </Nav>
            ) : (
              <Nav className="ms-auto my-2 my-lg-0 gap-3">
                <Link to={"/SignUp"}>
                  <Button
                    variant="primary"
                    type="button"
                    className="text-uppercase"
                  >
                    SignUp
                  </Button>
                </Link>
                <Link to={"/login"}>
                  <Button
                    variant="primary"
                    type="button"
                    className="text-uppercase"
                  >
                    login
                  </Button>
                </Link>
              </Nav>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
};
