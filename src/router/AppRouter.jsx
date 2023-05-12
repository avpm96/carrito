import React from "react";
import { Route, Routes } from "react-router-dom";
import { CreateProduct } from "../pages/CreateProduct";
import { Home } from "../pages/Home";
import { ProductProvider } from "../context/ProductProvider";
export const AppRouter = () => {
  return (
    <ProductProvider>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="create" element={<CreateProduct />}></Route>
      </Routes>
    </ProductProvider>
  );
};
