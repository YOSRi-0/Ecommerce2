import "./App.css";

import Home from "./pages/Home";
import ProductsPage from "./pages/ProductsPage";
import { Nav, Newsletter, Footer, SingleProduct, Cart } from "./components";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:id" element={<SingleProduct />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
      <Newsletter />
      <Footer />
    </>
  );
}

export default App;
