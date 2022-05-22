import React, { useContext, useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import {
  Container,
  Navbar,
  Nav,
  Button,
  Badge,
  Spinner,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { AuthContext } from "../../Context/AuthContext";
import { auth } from "../../Config/firebase";
import { signOut } from "firebase/auth";
import { toast } from "react-toastify";

export const Layout = () => {
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
        navigate("/");
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
      {isLoading === true ? (
        <div className="d-flex justify-content-center align-items-center vh-100 w-100 position-fixed top-0 start-0 bg-light z-index-10">
          <Spinner animation="grow" variant="primary" />
        </div>
      ) : (
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
                      onClick={logout}
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
      )}
    </>
  );
};
