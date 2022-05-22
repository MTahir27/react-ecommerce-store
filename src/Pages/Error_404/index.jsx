import React from "react";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export const ERROR_404 = () => {
  return (
    <div className="bg-light">
      <Container>
        <div className="d-flex flex-column justify-content-center align-items-center gap-3 mh-100">
          <h1>Page Not Found</h1>
          <Link to={"/"}>
            <Button variant="primary" type="button">
              Go Back to Home Page
            </Button>
          </Link>
        </div>
      </Container>
    </div>
  );
};
