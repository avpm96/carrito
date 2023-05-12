import { useState,useContext } from "react";
import { products } from "../data";
import { ProductContext } from "../context/ProductContext";
export const ProductList = ({
  allProducts,
  setAllProducts,
  countProducts,
  setCountProducts,
  total,
  setTotal,
  stock,
  setStock,
}) => {
 
  const { productList, setProductList } = useContext(ProductContext);
  const onAddProduct = (product) => {
    if (allProducts.find((item) => item.id === product.id)) {
      const products = allProducts.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );

      if (product.amount > 0) {
        setTotal(total + product.price * product.quantity);
        setCountProducts(countProducts + product.quantity);
        setStock(product.amount--);
    
      }

      return setAllProducts([...products]);
    }
    if (product.amount > 0) {
      setTotal(total + product.price * product.quantity);
      setCountProducts(countProducts + product.quantity);
      setStock(product.amount--);
      setAllProducts([...allProducts, product]);
    }
  };
  const onMinusProduct = (product) => {
    if (allProducts.find((item) => item.id === product.id)) {
      const products = allProducts.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
      );
      if (total > 0) {
        setTotal(total - product.price * product.quantity);
        setCountProducts(countProducts - product.quantity);
        setStock(product.amount++);
     
        return setAllProducts([...products]);
      }
    }
    if (total > 0) {
      setTotal(total - product.price * product.quantity);
      setCountProducts(countProducts - product.quantity);
      setStock(product.amount++);
      setInCart(false);
      setAllProducts([...allProducts, product]);
    }
  };

  return (
    <div className="container-cards">
      {productList.map((product) => (
        <div className="card" key={product.id}>
          <figure>
            <img src={product.img} alt={product.nameProduct} />
          </figure>
          <div className="title-card">
            <h2>{product.name}</h2>
            <p className="price">Price ${product.price}</p>
            <p className="title-stock">Quantity in stock: {product.amount}</p>
            <button className="btnForm" onClick={() => onAddProduct(product)}>
              Add to cart 
            </button>
            <button
                className="btnForm"
                onClick={() => onMinusProduct(product)}
              >
                Remove to cart
              </button>
          </div>
        </div>
      ))}
    </div>
  );
};
