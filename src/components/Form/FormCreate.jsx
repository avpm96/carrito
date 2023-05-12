import React from "react";
import style from "./FormCreate.scss";
import { useContext, useState } from "react";
import { ProductContext } from "../../context/ProductContext";
import { useForm } from "../../hooks/useForm";
import { Link } from "react-router-dom";
export const FormCreate = ({}) => {
  const { productList, setProductList } = useContext(ProductContext);

  const [formValues, handleInputChange, reset] = useForm({
    name: "",
    price: "",
    img: "",
    amount: "",
    quantity: "1",
  });
  const { name, price, img, amount, quantity } = formValues;
  const handleSend = (e) => {
    e.preventDefault();
    const templateParams = [
      {
        name,
        price: parseInt(price),
        amount: parseInt(amount),
        img,
        quantity: parseInt(quantity),
        id: productList.length + 1,
      },
    ];

    const newProductList = [...templateParams, ...productList];

    setProductList(newProductList);
    alert("Producto creado con exito!");
    reset();
  };
  return (
    <>
      <div className="link-title">
        <Link to="/">Back to Home</Link>
      </div>

      <div className="contenedor">
        <form onSubmit={handleSend}>
          <div className="form-group">
            <h3 className="title">Create a new product</h3>
            <label htmlFor="name">Name</label>
            <input
              className="imput-group"
              type="text"
              id="name"
              name="name"
              placeholder="Enter the product name"
              required
              value={name}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="price">Price</label>
            <input
              className="imput-group"
              type="number"
              id="price"
              name="price"
              placeholder="Enter the price of the product"
              min="0"
              step="0.01"
              required
              value={price}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="image">Image</label>
            <input
              className="imput-group"
              type="text"
              id="img"
              name="img"
              placeholder="Enter the url of the image"
              required
              value={img}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="amount">Stock</label>
            <input
              className="imput-group"
              type="number"
              id="amount"
              name="amount"
              placeholder="Enter the number of products available"
              min="0"
              required
              value={amount}
              onChange={handleInputChange}
            />
          </div>

          <button type="submit" className="button">
          Create
          </button>
        </form>
      </div>
    </>
  );
};
