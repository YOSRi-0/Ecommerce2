import './App.css';
import Categories from './components/categories/Categories';
import Hero from './components/hero/Hero';
import Nav from './components/nav/Nav';
import Newsletters from './components/newsletter/Newsletter';
import TopProducts from './components/topProducts/TopProducts';

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <TopProducts />
      <Categories />
      <Newsletters />
    </>

  );
}

export default App;
