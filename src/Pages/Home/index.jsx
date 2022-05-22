import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ProductCard } from "../../Components/Products";
import productImage from "../../Assets/images/products/product-4.png";

export const Home = () => {
  return (
    <Container className="my-5">
      <Row className="g-4">
        <Col sm={12}>
          <h1 className="text-center text-sm-start">Products</h1>
        </Col>
        <Col sm={6} md={6} lg={4} xl={3}>
          <ProductCard
            name="Product Name"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
          corporis quasi consequatur. Debitis iusto dignissimos repudiandae
          corrupti atque libero nostrum. Maiores veniam deleniti, non quo beatae
          quibusdam facilis sint qui?"
            price="1200"
            items="2"
            imgUrl={productImage}
          />
        </Col>

        <Col sm={6} md={6} lg={4} xl={3}>
          <ProductCard
            name="Product Name"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
          corporis quasi consequatur. Debitis iusto dignissimos repudiandae
          corrupti atque libero nostrum. Maiores veniam deleniti, non quo beatae
          quibusdam facilis sint qui?"
            price="1200"
            items="2"
            imgUrl={productImage}
          />
        </Col>

        <Col sm={6} md={6} lg={4} xl={3}>
          <ProductCard
            name="Product Name"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
          corporis quasi consequatur. Debitis iusto dignissimos repudiandae
          corrupti atque libero nostrum. Maiores veniam deleniti, non quo beatae
          quibusdam facilis sint qui?"
            price="1200"
            items="2"
            imgUrl={productImage}
          />
        </Col>

        <Col sm={6} md={6} lg={4} xl={3}>
          <ProductCard
            name="Product Name"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
          corporis quasi consequatur. Debitis iusto dignissimos repudiandae
          corrupti atque libero nostrum. Maiores veniam deleniti, non quo beatae
          quibusdam facilis sint qui?"
            price="1200"
            items="2"
            imgUrl={productImage}
          />
        </Col>

        <Col sm={6} md={6} lg={4} xl={3}>
          <ProductCard
            name="Product Name"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
          corporis quasi consequatur. Debitis iusto dignissimos repudiandae
          corrupti atque libero nostrum. Maiores veniam deleniti, non quo beatae
          quibusdam facilis sint qui?"
            price="1200"
            items="2"
            imgUrl={productImage}
          />
        </Col>

        <Col sm={6} md={6} lg={4} xl={3}>
          <ProductCard
            name="Product Name"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
          corporis quasi consequatur. Debitis iusto dignissimos repudiandae
          corrupti atque libero nostrum. Maiores veniam deleniti, non quo beatae
          quibusdam facilis sint qui?"
            price="1200"
            items="2"
            imgUrl={productImage}
          />
        </Col>

        <Col sm={6} md={6} lg={4} xl={3}>
          <ProductCard
            name="Product Name"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
          corporis quasi consequatur. Debitis iusto dignissimos repudiandae
          corrupti atque libero nostrum. Maiores veniam deleniti, non quo beatae
          quibusdam facilis sint qui?"
            price="1200"
            items="2"
            imgUrl={productImage}
          />
        </Col>
      </Row>
    </Container>
  );
};
