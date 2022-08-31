import React, { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
// import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { useDispatch, useSelector } from "react-redux";
import { CardProduct } from "../../components/Card/CardProduct";
import { Col } from "react-bootstrap";
import { Outlet } from "react-router-dom";
export const Product = () => {
  const listProduct = useSelector((state) => state.ProductReducer.listProduct);
  const [key, setKey] = useState("home");
  const renderAll = () => {
    if (listProduct) {
      return listProduct
        .filter((item) => item.id !== "")
        .map((item, index) => {
          return (
            <Col key={index} md={4} xs={12}>
              <CardProduct item={item} />
            </Col>
          );
        });
    } else {
      console.log("error");
    }
  };
  const renderMobile = () => {
    return listProduct
      .filter((item) => item.type === "mobile" && item.id !== "")
      .map((item, index) => {
        return (
          <Col key={index} md={4} xs={12}>
            <CardProduct item={item} />
          </Col>
        );
      });
  };
  const renderLaptop = () => {
    return listProduct
      .filter((item) => item.type === "laptop")
      .map((item, index) => {
        return (
          <Col key={index} md={4} xs={12}>
            <CardProduct item={item} />
          </Col>
        );
      });
  };
  return (
    <>
      <div className="container">
        <h2 className="text-center">Product</h2>
        <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(k) => setKey(k)}
          className="mb-3"
        >
          {" "}
          <Tab eventKey="home" title="Tất cả sản phẩm">
            <Row gap={3}>{renderAll()}</Row>
          </Tab>
          <Tab eventKey="all" title="Điện thoại">
            <Row>{renderMobile()}</Row>
          </Tab>
          <Tab eventKey="profile" title="Laptop">
            <Row>{renderLaptop()}</Row>
          </Tab>
          <Tab eventKey="contact" title="Contact" disabled>
            13
          </Tab>
        </Tabs>{" "}
      </div>
    </>
  );
};
