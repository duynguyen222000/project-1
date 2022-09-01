import React from "react";
import "./CartPage.scss";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import { useSelector, useDispatch } from "react-redux";
import { deleteToCart } from "../../redux/actions/productAction";
export const CartPage = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.ProductReducer);
  console.log(JSON.parse(localStorage.getItem("cart")));
  const renderCart = () => {
    if (JSON.parse(localStorage.getItem("cart"))) {
      return JSON.parse(localStorage.getItem("cart")).map((item, index) => {
        return (
          <tr key={index}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.amount}</td>
            <td>{(item.price * item.amount)?.toLocaleString()}</td>
            <td>
              <button
                onClick={() => {
                  dispatch(deleteToCart(item));
                }}
                className="btn btn-danger"
              >
                Xóa
              </button>
            </td>
          </tr>
        );
      });
    } else {
      return "";
    }
  };
  const total = () => {
    return JSON.parse(localStorage.getItem("cart"))?.reduce((a, b) => {
      return a + Number(b.amount) * b.price;
    }, 0);
  };
  return (
    <Container>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Amount</th>
            <th>Price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {renderCart()}
          <tr>
            <td>3</td>
            <td colSpan={3}>Total</td>
            <td>{total()?.toLocaleString()} VND</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};
