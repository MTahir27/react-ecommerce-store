import React from "react";
import { Container, Table, Button } from "react-bootstrap";
import productImage from "../../Assets/images/products/product-4.png";
import { FiTrash2 } from "react-icons/fi";

export const Checkout = () => {
  return (
    <div className="my-5">
      <Container>
        <Table responsive bordered className="align-middle">
          <thead>
            <tr>
              <th>Sr No</th>
              <th>Image</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>
                <img
                  src={productImage}
                  alt="Product Image"
                  width="50px"
                  height="50px"
                  className="img-fit-cover img-position-center ratio-1x1 img-fluid border"
                />
              </td>
              <td>Product Name</td>
              <td>1200</td>
              <td>
                <Button
                  variant="outline-danger"
                  className="d-flex justify-content-center p-2"
                >
                  <FiTrash2 />
                </Button>
              </td>
            </tr>

            <tr>
              <td>1</td>
              <td>
                <img
                  src={productImage}
                  alt="Product Image"
                  width="50px"
                  height="50px"
                  className="img-fit-cover img-position-center ratio-1x1 img-fluid border"
                />
              </td>
              <td>Product Name</td>
              <td>1200</td>
              <td>
                <Button
                  variant="outline-danger"
                  className="d-flex justify-content-center p-2"
                >
                  <FiTrash2 />
                </Button>
              </td>
            </tr>
          </tbody>
        </Table>
        <div className="text-end">
          <Button varient="primary">Checkout Products</Button>
        </div>
      </Container>
    </div>
  );
};
