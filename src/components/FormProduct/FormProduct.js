import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux/es/exports";
import { addProductAction } from "../../redux/actions/productAction";
export const FormProduct = () => {
  const dispatch = useDispatch();
  const [productData, setProductData] = useState({
    // id: "",
    // name: "",
    // price: "",
    // img: "",
    // description: "",
    // type: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addProductAction(productData));
  };
  const handleChangeValue = (e) => {
    let { value, name } = e.target;
    setProductData({ ...productData, [name]: value });
  };

  return (
    <>
      {" "}
      <Form style={{ maxWidth: "50%" }}>
        <p>Form Add Product</p>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>ID</Form.Label>
          <Form.Control
            name="id"
            onChange={handleChangeValue}
            type="text"
            placeholder="ID"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            name="name"
            onChange={handleChangeValue}
            type="text"
            placeholder="Name"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Price</Form.Label>
          <Form.Control
            name="price"
            onChange={handleChangeValue}
            type="text"
            placeholder="Enter price"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>img</Form.Label>
          <Form.Control
            name="img"
            onChange={handleChangeValue}
            type="text"
            placeholder="Enter img"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>description</Form.Label>
          <Form.Control
            name="description"
            onChange={handleChangeValue}
            type="text"
            placeholder="Enter description"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>type</Form.Label>
          {/* <Form.Control
            name="type"
            onChange={handleChangeValue}
            type="text"
            placeholder="Enter type"
          /> */}
          <Form.Select
            name="type"
            onChange={handleChangeValue}
            aria-label="Default select example"
          >
            <option>Open this select menu</option>
            <option value="mobile">Mobile</option>
            <option value="laptop">Laptop</option>
          </Form.Select>
        </Form.Group>

        <Button onClick={handleSubmit} variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};
