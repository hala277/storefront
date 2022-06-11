
import Header from './components/header/header';
import Footer from './components/footer/footer';
// import Categories from './components/storefront/categories';
import Products from './components/storefront/products';
// import ActiveCategory from './components/ActiveCategory/ActiveCategory';
import Cart from './components/cart/simplecart';
import StoreFront from './components/storefront/storefront';
import { Route ,BrowserRouter,Routes,} from "react-router-dom";
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Header />
      <main>
        <Route exact path="/" component={StoreFront}/>
        <Route exact path="/cart" component={Cart} />
        <Route path="/products/:id" component={Products} />
      </main>
      
       {/* <ActiveCategory/>
       <Categories />
      <Products />   */}
      <Footer />
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
