import React, { useState } from "react";
import { Row, Col, Button, Form, FloatingLabel } from "react-bootstrap";
import { InputField } from "../../../Components/InputField";
import { TextAreaField } from "../../../Components/TextAreaField";
import { storage } from "../../../Config/firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { toast } from "react-toastify";

export const AddProduct = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [catagory, setCatagory] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [progress, setProgress] = useState();

  const uploadImage = (e) => {
    let file = e.target.files[0];
    const fileRef = ref(storage, "images/products/" + file.name);
    const uploadTask = uploadBytesResumable(fileRef, file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      (error) => {
        toast.error(error, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImage(downloadURL);
        });
      }
    );
  };
  const uploadProduct = (e) => {};
  return (
    <div className="container">
      <section className="d-flex justify-content-center align-item-center py-5">
        <Row>
          <Col md={9} lg={8} xl={7} className="mx-auto">
            <Form
              className="border p-4 rounded-3 bg-light"
              onSubmit={uploadProduct}
            >
              <h3 className="mb-4 text-dark">Add Product</h3>
              <Row className="g-4">
                <Col xs={12}>
                  <InputField
                    label="Title"
                    id="Title"
                    placeholder="Title"
                    type="text"
                    onChange={(e) => {
                      setTitle(e.target.value);
                    }}
                  />
                </Col>

                <Col xs={12}>
                  <FloatingLabel controlId="Catagory" label="Catagory">
                    <Form.Select
                      aria-label="Catagory"
                      onChange={(e) => {
                        setCatagory(e.target.value);
                      }}
                    >
                      <option>Select Catagory</option>
                      <option value="watches">Watches</option>
                      <option value="clothing">Clothing</option>
                      <option value="shoes">Shoes</option>
                    </Form.Select>
                  </FloatingLabel>
                </Col>

                <Col xs={6}>
                  <InputField
                    label="Price"
                    id="Price"
                    placeholder="Price"
                    type="number"
                    onChange={(e) => {
                      setPrice(e.target.value);
                    }}
                  />
                </Col>

                <Col xs={6}>
                  <InputField
                    label="In Stock"
                    id="In Stock"
                    placeholder="In Stock"
                    type="number"
                    onChange={(e) => {
                      setStock(e.target.value);
                    }}
                  />
                </Col>

                <Col xs={12}>
                  <TextAreaField
                    label="Description"
                    placeholder="Description"
                    id="Description"
                    onChange={(e) => {
                      setDescription(e.target.value);
                    }}
                  />
                </Col>

                <Col xs={12}>
                  <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>Product Image</Form.Label>
                    <Form.Control
                      type="file"
                      accept="image/*"
                      onChange={uploadImage}
                    />
                  </Form.Group>
                  {((progress) => 0) && progress < 100
                    ? "Uploading Image"
                    : progress === 100
                    ? "Image Uploaded"
                    : ""}
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
