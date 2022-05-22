import React from "react";
import { Button } from "react-bootstrap";

export const ProductCard = (props) => {
  return (
    <div className="border rounded-3 shadow-sm mx-350px mx-auto">
      <img
        src={props.imgUrl}
        alt="Profile Image"
        className="img-fluid border-bottom ratio-1x1 img-fit-cover img-position-center"
      />
      <div className="p-3">
        <h4 className="mb-2">{props.name}</h4>
        <p className="text-line-3 text-muted mb-2">{props.description}</p>
        <div className="d-flex justify-content-between align-items-center gap-2 mb-3">
          <p>
            <b>Price:</b> {props.price}
          </p>
          <p>
            <b>Stock:</b> {props.items}
          </p>
        </div>
        <Button variant="primary" className="w-100">
          Add to Cart
        </Button>
      </div>
    </div>
  );
};
