import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomeTemplate } from "./templates/HomeTemplate/HomeTemplate";
import { NotFound } from "./templates/NotFound/NotFound";
import { Home } from "./pages/Home/Home";
import { About } from "./pages/About/About";
import { Product } from "./pages/Product/Product";
import { AdminTemplate } from "./templates/Admin/AdminTemplate";
import { LoginFrom } from "./pages/Login/LoginForm";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomeTemplate />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="product" element={<Product />} />
            <Route path="*" element={<NotFound />} />
          </Route>
          <Route path="/admin" element={<AdminTemplate />}></Route>
          <Route path="/login" element={<LoginFrom />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
