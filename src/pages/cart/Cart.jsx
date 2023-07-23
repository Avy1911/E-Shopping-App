import React from "react";
import { PRODUCTS } from "../../Products";
import { useContext } from "react";
import Product from "../shop/Product";
import { ShopContext } from "../../context/shop-context";
import CartItem from "./CartItem";
import { useNavigate } from "react-router-dom";
import "./cart.css";

const Cart = () => {
  const { addToCart, cartItems, getTotalCartAmount } = useContext(ShopContext);
  const navigate = useNavigate();

  return (
    <div className="cart">
      <div className="CartItems">
        <h1><u>Your Cart Items</u> </h1>
      </div>
      <div className="cartItems">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] != 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>
      {getTotalCartAmount > 0 ? (
        <div className="checkout">
          <p>Subtotal : ${getTotalCartAmount()}</p>
          <button>Checkout</button>
        </div>
      ) : (
        <h1 className="emptyCart">Your Cart is Empty....Click on below Button to continue shopping online</h1>
        )}
        <button className="navBtn" onClick={() => navigate("/")}>Continue Shopping</button>
    </div>
  );
};

export default Cart;
