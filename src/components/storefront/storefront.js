import ActiveCategory from "../ActiveCategory/ActiveCategory";
import Categories from "./categories";
import Products from "./products";
import Simplecart from "../cart/simplecart";

export default function StoreFront(){
 return(
     <>
     <Categories/>
     <ActiveCategory/>
     <Products/>
     <Simplecart/>
     </>
 )   
}