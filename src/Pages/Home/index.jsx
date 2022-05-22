import React, { useState, useEffect } from "react";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import { ProductCard } from "../../Components/Products";
import productImage from "../../Assets/images/products/product-4.png";
import { collection, getDocs } from "firebase/firestore/lite";
import { firestore } from "../../Config/firebase";

export const Home = () => {
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
        <Container className="my-5">
          <Row className="g-4">
            <Col sm={12}>
              <h1 className="text-center text-sm-start">Products</h1>
            </Col>
            {products.map((product, index) => {
              return (
                <Col sm={6} md={6} lg={4} xl={3} key={index}>
                  <ProductCard
                    name={product.title}
                    description={product.description}
                    price={product.price}
                    items={product.stock}
                    imgUrl={product.image}
                  />
                </Col>
              );
            })}
          </Row>
        </Container>
      )}
    </>
  );
};
