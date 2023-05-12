import { useState } from "react";
import { Header } from "../components/Header";
import { ProductList } from "../components/ProductList";
import { Link } from "react-router-dom";
export const Home = ({}) => {
  const [allProducts, setAllProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [countProducts, setCountProducts] = useState(0);
  const [stock, setStock] = useState([]);

  return (
    <>
      <Header
        allProducts={allProducts}
        setAllProducts={setAllProducts}
        total={total}
        setTotal={setTotal}
        countProducts={countProducts}
        setCountProducts={setCountProducts}
        stock={stock}
        setStock={setStock}
      />
      <div className="link">
        <Link  to="create">
          Create a new product
        </Link>
      </div>

      <ProductList
        allProducts={allProducts}
        setAllProducts={setAllProducts}
        total={total}
        setTotal={setTotal}
        countProducts={countProducts}
        setCountProducts={setCountProducts}
        stock={stock}
        setStock={setStock}
      />
    </>
  );
};
