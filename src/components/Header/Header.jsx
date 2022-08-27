import React, { useState } from "react";
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
import { NavLink, Link } from "react-router-dom";
import logo from "../../assets/img/logo.png";
export const Header = () => {
  const [showNavNoTogglerSecond, setShowNavNoTogglerSecond] = useState(false);

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
            <MDBInputGroup tag="form" className="d-flex w-auto mb-3">
              <input
                className="form-control"
                placeholder="Enter your text"
                aria-label="Search"
                type="Search"
              />
              <MDBBtn outline>Search</MDBBtn>
            </MDBInputGroup>{" "}
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
};
