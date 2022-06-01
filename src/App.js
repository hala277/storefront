
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Categories from './components/storefront/categories';
import Products from './components/storefront/products';
import ActiveCategory from './components/ActiveCategory/ActiveCategory';
import Cart from './components/cart/simplecart';
function App() {
  return (
    <>
      <Header />
      <Cart/>
       <ActiveCategory/>
       <Categories />
      <Products />  
      <Footer />
    </>
  );
}

export default App;
