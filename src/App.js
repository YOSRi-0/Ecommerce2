import "./App.css";

import Home from "./pages/Home";
import ProductsPage from "./pages/ProductsPage";
import { Nav, Newsletter, Footer, SingleProduct, Cart } from "./components";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import CartState from "./context/cart-context/CartState";
import Api from './helpers/api-product'

function App() {
  const api = new Api()
  return (
    <>
      <CartState>
        <Router>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductsPage fetchProducts={api.getAllProducts}/>} />
            <Route path="/products/:id" element={<SingleProduct />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
        <Newsletter />
        <Footer />
      </CartState>
    </>
  );
}

export default App;
