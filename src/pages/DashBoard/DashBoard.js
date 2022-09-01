import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import { useSelector, useDispatch } from "react-redux";
import { deleteProductAction } from "../../redux/actions/productAction";
import _ from "lodash";
export const DashBoard = () => {
  // modal
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // end modal
  const { productUpdate, listProduct } = useSelector(
    (state) => state.ProductReducer
  );
  let [test, setTest] = useState({
    id: "",
    name: "",
    price: "",
    img: "",
    description: "",
    type: "",
  });
  const dispatch = useDispatch();
  useEffect(() => {
    setTest(productUpdate);
  }, [productUpdate]);
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

  // console.log(newArr);
  // const arrSort = () => {
  //   let arrSortList = _.sortBy(listProduct, "name");
  //   setNewArr(arrSortList);
  // };
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
                    handleShow();
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
    <>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>ID</th>
            <th>Product's Name</th>
            <th> Price</th>
            <th>Img</th>
            <th>Desciption</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>{renderList()}</tbody>
      </Table>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form action="">
            <label htmlFor="">ID</label>
            <input
              onChange={handleChange}
              disabled
              placeholder="id"
              name="id"
              type="text"
              value={test.id}
              className="col-12"
            />
            <label htmlFor="">Name</label>

            <input
              onChange={handleChange}
              name="name"
              placeholder="name"
              type="text"
              className="col-12"
              value={test.name}
            />
            <label htmlFor="">Price</label>

            <input
              onChange={handleChange}
              name="price"
              placeholder="price"
              type="text"
              className="col-12"
              value={test.price}
            />
            <label htmlFor="">Description</label>

            <textarea
              onChange={handleChange}
              name="description"
              placeholder="desc"
              className="col-12"
              rows="4"
              cols="50"
              value={test.description}
            />
            <label htmlFor="">Link img</label>

            <input
              onChange={handleChange}
              name="img"
              placeholder="img"
              className="col-12"
              type="text"
              value={test.img}
            />
            <label htmlFor="">Type</label>

            <input
              onChange={handleChange}
              name="type"
              placeholder="type"
              className="col-12"
              type="text"
              value={test.type}
            />
            {/* <button type="button" onClick={handleSubmit}>
              submit
            </button> */}
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              handleClose();
              handleSubmit();
            }}
          >
            Confirm Update
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
