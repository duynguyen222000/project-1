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
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import logo from "../../assets/img/logo.png";
export const Header = () => {
  const { listProduct, total } = useSelector((state) => state.ProductReducer);
  const [showNavNoTogglerSecond, setShowNavNoTogglerSecond] = useState(false);
  const [clearToken, setClearToken] = useState(false);
  const [valueSearch, setValueSearch] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const handleClearToken = () => {
    console.log("1");
    clearTokenFunc();
    setClearToken(!clearToken);
  };
  const [listSearch, setListSearch] = useState([]);

  useEffect(() => {
    let searchList = listProduct.filter((item) => {
      return (
        item.name?.toLowerCase().includes(valueSearch?.toLowerCase()) &&
        item.id !== ""
      );
    });
    if (valueSearch === "") {
      setListSearch([]);
    } else {
      setListSearch(searchList);
    }
  }, [valueSearch]);
  const renderListSearch = () => {
    return listSearch.map((item, index) => {
      return (
        <Link
          to={`/product/${item.id}`}
          className="search-item"
          style={{ padding: "6px 12px" }}
          key={index}
        >
          <img style={{ width: "50px" }} src={item.img} alt="" />
          <div className="result-content">
            <span>{item.name}</span>
            <span>{Number(item.price).toLocaleString()} VND</span>
          </div>
          <Link
            to={`/product/${item.id}`}
            className="btn btn-primary view-detail"
          >
            Detail
          </Link>
        </Link>
      );
    });
  };
  const clearTokenFunc = () => {
    localStorage.clear();
  };
  const onChangeSearch = (e) => {
    console.log(e.target.value);
    setValueSearch(e.target.value);
  };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    });
    return window.removeEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    });
  }, []);
  return (
    <>
      <MDBNavbar
        className={scrolled ? `scrolled sticky-top` : "sticky-top"}
        expand="lg"
        light
        bgColor="light"
      >
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
                  active="true"
                  aria-current="page"
                  className="nav-link"
                  to="home"
                >
                  Home
                </NavLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <NavLink
                  active="true"
                  aria-current="page"
                  className="nav-link"
                  to="product"
                >
                  Product
                </NavLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <NavLink
                  active="true"
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
            <MDBInputGroup
              tag="form"
              className="d-flex  mb-3 form-search-header"
            >
              <input
                className="form-control"
                placeholder="Enter your text"
                aria-label="Search"
                type="Search"
                onChange={onChangeSearch}
              />
              <MDBBtn outline>Search</MDBBtn>
              <div className="result-search">{renderListSearch()}</div>
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
            {/* <img
              // style={{ width: "0px" }}
              src={localStorage.getItem("avatar")}
              alt=""
            /> */}
          </MDBCollapse>
          <Link to="cart">
            {" "}
            ({" "}
            {localStorage.getItem("total")
              ? localStorage.getItem("total")
              : "0"}{" "}
            )
            <FaShoppingCart />
          </Link>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
};
