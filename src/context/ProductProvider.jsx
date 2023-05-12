import {ProductContext} from "./ProductContext";
import { products } from "../data";
import { useState } from "react";
export const ProductProvider = ({children}) => {

  
  const [productList, setProductList] = useState(products)
  return (
    <ProductContext.Provider value={{ productList,setProductList }}>
      {children}
    </ProductContext.Provider>
  );
};
