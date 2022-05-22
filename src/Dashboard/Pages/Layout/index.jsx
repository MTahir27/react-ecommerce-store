import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { Navbar, Nav, Container, Button } from "react-bootstrap";

export const AdminLayout = () => {
  const [authStatus, setAuthStatus] = useState(true);
  return (
    <>
      <Navbar bg="light" className="navbar">
        <Container>
          <Navbar.Brand>
            <Link to={"/"}>Admin Dashboard</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            {authStatus === true ? (
              <Nav className="ms-auto my-2 my-lg-0 gap-3 align-items-center">
                <Link to={"/products"} className="paragraph">
                  Add Products
                </Link>
                <Button
                  variant="link"
                  type="button"
                  className="text-decoration-none text-color"
                  // onClick={logout}
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
