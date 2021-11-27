import './App.css';
// import Categories from './components/categories/Categories';
// import Hero from './components/hero/Hero';
// import Nav from './components/nav/Nav';
// import Newsletters from './components/newsletter/Newsletter';
// import TopProducts from './components/topProducts/TopProducts';
// import Footer from './components/footer/Footer';

import Home from './pages/Home';
import { Nav, Newsletter, Footer } from './components';

function App() {
  return (
    <>
      <Nav />
      <Home />
      <Newsletter />
      <Footer />
    </>

  );
}

export default App;
