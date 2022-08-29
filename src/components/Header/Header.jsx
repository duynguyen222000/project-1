import React, { useEffect, useState } from "react";
import "./header.scss";
import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
  MDBBtn,
  MDBIcon,
  MDBNavbarNav,
  MDBInputGroup,
} from "mdb-react-ui-kit";
import { useSelector } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import logo from "../../assets/img/logo.png";
export const Header = () => {
  const listProduct = useSelector((state) => state.ProductReducer.listProduct);
  const [showNavNoTogglerSecond, setShowNavNoTogglerSecond] = useState(false);
  const [clearToken, setClearToken] = useState(false);
  const [valueSearch, setValueSearch] = useState("");
  const handleClearToken = () => {
    console.log("1");
    clearTokenFunc();
    setClearToken(!clearToken);
  };
  useEffect(() => {
    console.log(valueSearch.split(""));
    listProduct.filter((item) => item.name == valueSearch);
  }, [valueSearch]);
  const clearTokenFunc = () => {
    console.log("2");
    localStorage.clear();
  };
  const onChangeSearch = (e) => {
    setValueSearch(e.target.value);
  };
  return (
    <>
      <MDBNavbar expand="lg" light bgColor="light">
        <MDBContainer>
          <MDBNavbarBrand href="#">
            <Link to="home">
              <img src={logo} style={{ width: "100px" }} />
            </Link>
          </MDBNavbarBrand>
          <MDBNavbarToggler
            type="button"
            data-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setShowNavNoTogglerSecond(!showNavNoTogglerSecond)}
          >
            <MDBIcon icon="bars" fas />
          </MDBNavbarToggler>
          <MDBCollapse navbar show={showNavNoTogglerSecond}>
            <MDBNavbarNav className="mr-auto mb-2 mb-lg-0">
              <MDBNavbarItem>
                <NavLink
                  active
                  aria-current="page"
                  className="nav-link"
                  to="home"
                >
                  Home
                </NavLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <NavLink
                  active
                  aria-current="page"
                  className="nav-link"
                  to="product"
                >
                  Product
                </NavLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <NavLink
                  active
                  aria-current="page"
                  className="nav-link"
                  to="about"
                >
                  About
                </NavLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink
                  disabled
                  href="#"
                  tabIndex={-1}
                  aria-disabled="true"
                >
                  Feature
                </MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
            <MDBInputGroup tag="form" className="d-flex  mb-3">
              <input
                className="form-control"
                placeholder="Enter your text"
                aria-label="Search"
                type="Search"
                onChange={onChangeSearch}
              />
              <MDBBtn outline>Search</MDBBtn>
            </MDBInputGroup>
            <div className="btn-group ms-2 mb-3">
              {!localStorage.getItem("access_token") ? (
                <Link to="login" className="btn btn-outline-primary">
                  Login
                </Link>
              ) : (
                <button
                  onClick={() => {
                    handleClearToken();
                  }}
                  className="btn btn-primary"
                >
                  LogOut
                </button>
              )}
            </div>{" "}
            <img
              // style={{ width: "30px" }}
              src={localStorage.getItem("avatar")}
              alt=""
            />
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
};
