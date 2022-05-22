import React from "react";
import { FloatingLabel, Form } from "react-bootstrap";

export const InputField = (props) => {
  return (
    <FloatingLabel controlId={props.id} {...props}>
      <Form.Control type={props.type} placeholder={props.placeholder} />
    </FloatingLabel>
  );
};
