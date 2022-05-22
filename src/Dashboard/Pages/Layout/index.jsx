import React, { useState, useContext, useEffect } from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { AuthContext } from "../../../Context/AuthContext";
import { auth } from "../../../Config/firebase";
import { signOut } from "firebase/auth";
import { toast } from "react-toastify";

export const AdminLayout = () => {
  const [isLoading, setIsLoading] = useState(true);
  const user = useContext(AuthContext);
  const [authStatus, setAuthStatus] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    if (user.uid) {
      setAuthStatus(true);
    } else {
      setAuthStatus(false);
    }
    setIsLoading(false);
  }, [user]);

  const logout = (e) => {
    signOut(auth)
      .then(() => {
        navigate("/adminlogin");
      })
      .catch((error) => {
        toast.danger(error, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };
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
                  onClick={logout}
                >
                  Logout
                </Button>
              </Nav>
            ) : (
              <Nav className="ms-auto my-2 my-lg-0 gap-3">
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
