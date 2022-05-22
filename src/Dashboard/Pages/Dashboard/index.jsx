import React, { useState, useEffect } from "react";
import { Container, Table, Spinner } from "react-bootstrap";
import { collection, getDocs } from "firebase/firestore/lite";
import { firestore } from "../../../Config/firebase";

export const Dashboard = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const collectionName = "Products";
  const docsCollectionRef = collection(firestore, collectionName);

  const readDocs = async () => {
    let array = [];

    const querySnapshot = await getDocs(docsCollectionRef);
    querySnapshot.forEach((doc) => {
      array.push({ ...doc.data(), id: doc.id });
    });

    setProducts(array);
    setIsLoading(false);
  };

  useEffect(() => {
    readDocs();
  }, []);
  return (
    <>
      {isLoading === true ? (
        <div className="d-flex justify-content-center align-items-center vh-100 w-100 position-fixed top-0 start-0 bg-light z-index-10">
          <Spinner animation="grow" variant="primary" />
        </div>
      ) : (
        <div className="my-5">
          <Container>
            <Table responsive bordered className="align-middle">
              <thead>
                <tr>
                  <th>Sr No</th>
                  <th>Image</th>
                  <th>Product Name</th>
                  <th style={{ maxWidth: "250px" }}>Product Description</th>
                  <th>Price</th>
                  <th>Stock</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product, index) => {
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>
                        <img
                          src={product.image}
                          alt={product.title}
                          width="50px"
                          height="50px"
                          className="img-fit-cover img-position-center ratio-1x1 img-fluid border"
                        />
                      </td>
                      <td>{product.title}</td>
                      <td style={{ maxWidth: "250px" }}>
                        {product.description}
                      </td>
                      <td>{product.price}</td>
                      <td>{product.stock}</td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </Container>
        </div>
      )}
    </>
  );
};
