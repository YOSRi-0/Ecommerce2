import './App.css';
import Categories from './components/categories/Categories';
import Hero from './components/hero/Hero';
import Nav from './components/nav/Nav';
import TopProducts from './components/topProducts/TopProducts';

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <TopProducts />
      <Categories />
    </>

  );
}

export default App;
