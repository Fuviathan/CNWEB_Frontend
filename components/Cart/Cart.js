import React from "react";
import CartItem from "./CartItem";
import PriceDetail from "./PriceDetail";

const Cart = () => {
  return (
    <div>
      <div className="grid grid-cols-3 px-[8rem] my-[5rem]">
        <div className="col-span-2">
          <CartItem></CartItem>
          <CartItem></CartItem>
          <CartItem></CartItem>
        </div>
        <div className="col-span-1">
          <PriceDetail></PriceDetail>
        </div>
      </div>
    </div>
  );
};

export default Cart;
