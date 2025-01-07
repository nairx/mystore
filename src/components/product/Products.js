import React, { useState } from "react";
import { useContext } from "react";
import { AppContext } from "../../App";
import "./Products.css";
export default function Products() {
  const PATH = process.env.REACT_APP_PATH;
  const { products, cartItems, setCartItems } = useContext(AppContext);
  const addToCart = (id) => {
    setCartItems((prev) => ({ ...prev, [id]: (prev[id] ?? 0) + 1 }));
  };
  const updateCart = (id, qty) => {
    setCartItems((prev) => ({ ...prev, [id]: qty }));
  };
  return (
    <div className="Product-container">
      {products &&
        products.map((value) => (
          <div key={value.id} className="Product-items">
            <div>
              <img
                className="Product-img"
                src={`${PATH}${value.image}`}
                alt={value.name}
              />
            </div>
            <h3>{value.name}</h3>
            <p style={{ textAlign: "justify", padding: "10px" }}>
              {value.desc}
            </p>
            <div className="priceTxt">
              ₹{value.price}
            </div>
            <div>
              {!cartItems[value.id] ? (
                <div>
                  <button
                    className="AddButton-button"
                    onClick={() => addToCart(value.id)}
                  >
                    Add
                  </button>
                </div>
              ) : (
                <div>
                  <button
                    className="Plusminus-button"
                    onClick={() =>
                      updateCart(value.id, cartItems[value.id] - 1)
                    }
                  >
                    -
                  </button>
                  <input
                    disabled
                    type="text"
                    className="Txtbox"
                    value={cartItems[value.id]}
                  ></input>
                  <button
                    className="Plusminus-button"
                    onClick={() =>
                      updateCart(value.id, cartItems[value.id] + 1)
                    }
                  >
                    +
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
    </div>
  );
}
