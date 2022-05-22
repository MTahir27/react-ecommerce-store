import React from "react";
import { FloatingLabel, Form } from "react-bootstrap";

export const TextAreaField = (props) => {
  return (
    <FloatingLabel controlId={props.id} {...props}>
      <Form.Control
        as="textarea"
        placeholder={props.placeholder}
        value={props.value}
        style={{ height: "100px" }}
      />
    </FloatingLabel>
  );
};
