import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import { useSelector, useDispatch } from "react-redux";
import { deleteProductAction } from "../../redux/actions/productAction";
export const DashBoard = () => {
  const { productUpdate } = useSelector((state) => state.ProductReducer);
  let [test, setTest] = useState({
    id: "",
    name: "",
    price: "",
    img: "",
    description: "",
    type: "",
  });
  const dispatch = useDispatch();
  const { listProduct } = useSelector((state) => state.ProductReducer);
  console.log("productUpdate", productUpdate);
  useEffect(() => {
    setTest(productUpdate);
  }, [productUpdate]);
  console.log("test", test);
  const handleChange = (e) => {
    let { name, value } = e.target;
    setTest({ ...test, [name]: value });
  };
  const handleSubmit = () => {
    dispatch({
      type: "test_api_update",
      id: productUpdate.id,
      data: test,
    });
  };
  const renderList = () => {
    return listProduct
      .filter((item) => item.id !== "")
      .map((item, index) => {
        return (
          <tr key={index}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.price}</td>
            <td>
              <img style={{ maxWidth: 50 }} src={item.img} alt="" />
            </td>
            <td>{item.description}</td>
            <td>{item.type}</td>
            <td>
              <div className="d-flex">
                <button
                  onClick={() => {
                    dispatch(deleteProductAction(item.id));
                  }}
                  className="btn btn-danger"
                >
                  Xóa
                </button>
                <button
                  onClick={() => {
                    dispatch({
                      type: "test_update",
                      payload: item.id,
                    });
                  }}
                  className="btn btn-warning"
                >
                  Update
                </button>
              </div>
            </td>
          </tr>
        );
      });
  };
  return (
    <div>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>Product's Name</th>
            <th> Price</th>
            <th>Img</th>
            <th>Desciption</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>{renderList()}</tbody>
      </Table>

      <form action="">
        <input
          onChange={handleChange}
          disabled
          placeholder="id"
          name="id"
          type="text"
          value={test.id}
        />
        <input
          onChange={handleChange}
          name="name"
          placeholder="name"
          type="text"
          value={test.name}
        />
        <input
          onChange={handleChange}
          name="price"
          placeholder="price"
          type="text"
          value={test.price}
        />
        <input
          onChange={handleChange}
          name="description"
          placeholder="desc"
          type="text"
          value={test.description}
        />
        <input
          onChange={handleChange}
          name="img"
          placeholder="img"
          type="text"
          value={test.img}
        />
        <input
          onChange={handleChange}
          name="type"
          placeholder="type"
          type="text"
          value={test.type}
        />
        <button type="button" onClick={handleSubmit}>
          submit
        </button>
      </form>
    </div>
  );
};
