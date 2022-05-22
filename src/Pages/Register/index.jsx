import React, { useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { InputField } from "../../Components/InputField";
import { auth } from "../../Config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";

export const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();
  const SigninUser = (e) => {
    e.preventDefault();
    if (email && password) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          toast.success("Account Successfully Created", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          navigate("/");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          toast.error((errorCode, errorMessage), {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        });
    } else if (email && !password) {
      toast.error("Enter Password", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else if (!email && password) {
      toast.error("Enter Email", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      toast.error("Enter Email & Password", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };
  return (
    <div className="container">
      <section className="d-flex justify-content-center align-item-center py-5">
        <Row>
          <Col md={9} lg={8} xl={7} className="mx-auto">
            <Form
              className="border p-4 rounded-3 bg-light"
              onSubmit={SigninUser}
            >
              <h3 className="mb-4 text-dark">Signup Form</h3>
              <Row className="g-4">
                <Col xs={12}>
                  <InputField
                    label="Email"
                    id="email"
                    placeholder="Email"
                    type="email"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </Col>

                <Col xs={12}>
                  <InputField
                    label="Password"
                    id="password"
                    placeholder="Password"
                    type="password"
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                </Col>

                <Col xs={12}>
                  <Button
                    variant="primary"
                    type="submit"
                    className="w-100 py-2 text-uppercase fw-bold"
                  >
                    Create Account
                  </Button>
                </Col>

                <Col>
                  <div className="d-flex gap-3">
                    <p>Already have an Account</p>
                    <Link
                      to="/login"
                      className="text-uppercase text-decoration-none fw-semibold"
                    >
                      Login
                    </Link>
                  </div>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </section>
    </div>
  );
};
