import React from "react";
import { Row, Col, Button, Form } from "react-bootstrap";
import { InputField } from "../../../Components/InputField";
import { TextAreaField } from "../../../Components/TextAreaField";

export const AddProduct = () => {
  // const []
  return (
    <div className="container">
      <section className="d-flex justify-content-center align-item-center py-5">
        <Row>
          <Col md={9} lg={8} xl={7} className="mx-auto">
            <Form
              className="border p-4 rounded-3 bg-light"
              // onSubmit={AdminLogin}
            >
              <h3 className="mb-4 text-dark">Add Product</h3>
              <Row className="g-4">
                <Col xs={12}>
                  <InputField
                    label="Title"
                    id="Title"
                    placeholder="Title"
                    type="text"
                    // onChange={(e) => {
                    //   setEmail(e.target.value);
                    // }}
                  />
                </Col>

                <Col xs={6}>
                  <InputField
                    label="Price"
                    id="Price"
                    placeholder="Price"
                    type="number"
                    // onChange={(e) => {
                    //   setEmail(e.target.value);
                    // }}
                  />
                </Col>

                <Col xs={6}>
                  <InputField
                    label="In Stock"
                    id="In Stock"
                    placeholder="In Stock"
                    type="number"
                    // onChange={(e) => {
                    //   setEmail(e.target.value);
                    // }}
                  />
                </Col>

                <Col xs={12}>
                  <TextAreaField
                    label="Description"
                    placeholder="Description"
                    id="Description"
                  />
                </Col>

                <Col xs={12}>
                  <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>Profile Image</Form.Label>
                    <Form.Control type="file" accept="image/*" />
                  </Form.Group>
                </Col>

                <Col xs={12}>
                  <Button
                    variant="primary"
                    type="submit"
                    className="w-100 py-2 text-uppercase fw-bold"
                  >
                    Add Product
                  </Button>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </section>
    </div>
  );
};
