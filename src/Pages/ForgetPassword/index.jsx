import React, { useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { InputField } from "../../Components/InputField";
import { auth } from "../../Config/firebase";
import { sendPasswordResetEmail } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  let navigate = useNavigate();
  const forgetPassword = (e) => {
    e.preventDefault();
    if (email) {
      sendPasswordResetEmail(auth, email)
        .then(() => {
          toast.success("Password Reset Code Sent", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          navigate("/login");
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
    } else {
      toast.error("Enter Email", {
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
        <Col md={9} lg={7} xl={6} className="mx-auto">
          <Form
            className="border p-4 rounded-3 bg-light"
            onSubmit={forgetPassword}
          >
            <p className="mb-3">Enter Email to get password reset code</p>
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
                <Button
                  variant="primary"
                  type="submit"
                  className="w-100 py-2 text-uppercase fw-bold"
                >
                  Send
                </Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </section>
    </div>
  );
};
