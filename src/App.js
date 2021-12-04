import './App.css';
import Products from './components/products/Products';
import SingleProduct from './components/products/singleProduct/SingleProduct';
import Cart from './components/cart/Cart';

import Home from './pages/Home';
import {Nav, Newsletter, Footer} from './components';
import {
  Routes,
  Route,
  BrowserRouter as Router,
} from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
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
