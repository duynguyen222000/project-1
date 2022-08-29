import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomeTemplate } from "./templates/HomeTemplate/HomeTemplate";
import { NotFound } from "./templates/NotFound/NotFound";
import { Home } from "./pages/Home/Home";
import { About } from "./pages/About/About";
import { Product } from "./pages/Product/Product";
import { AdminTemplate } from "./templates/Admin/AdminTemplate";
import { LoginFrom } from "./pages/Login/LoginForm";
import { Detail } from "./pages/DetailProduct/Detail";
import { FormProduct } from "./components/FormProduct/FormProduct";
import { DashBoard } from "./pages/DashBoard/DashBoard";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductAction } from "./redux/actions/productAction";
function App() {
  const dispatch = useDispatch();
  const getAllProductApi = () => {
    dispatch(getProductAction());
  };
  useEffect(() => {
    getAllProductApi();
  });
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomeTemplate />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="product" element={<Product />}></Route>
            <Route path="product/:productId" element={<Detail />} />
            <Route path="*" element={<NotFound />} />
          </Route>
          <Route path="admin" element={<AdminTemplate />}>
            <Route index element={<DashBoard />} />
            <Route path="dashboard" element={<DashBoard />} />
            <Route path="add-product" element={<FormProduct />} />
          </Route>
          <Route path="/login" element={<LoginFrom />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
