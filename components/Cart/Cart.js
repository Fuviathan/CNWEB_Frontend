import React, { useEffect, useState } from "react";
import CartItem from "./CartItem";
import PriceDetail from "./PriceDetail";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "@/state/Cart/Action";

const Cart = () => {
  const [auth, setAuth] = useState();
  const dispatch = useDispatch();
  const cart = useSelector((store) => store?.cart?.cart);
  const cartItem = useSelector((store) => store?.cart?.cartItem);
  console.log(cartItem);
  console.log(cart);
  useEffect(() => {
    let value;
    // Get the value from local storage if it exists
    value = localStorage.getItem("token") || "";
    setAuth(value);
    console.log(auth);
    dispatch(getCart());
  }, []);

  return (
    <div className="h-full my-4">
      <div className="flex justify-between mx-auto max-w-[1320px]">
        <div className="w-4/6 mr-8">
          {cart?.products.map((item) => (
            <CartItem key={item._id} data={item}></CartItem>
          ))}
        </div>
        <div className="w-1/3">
          <PriceDetail cart={cart}></PriceDetail>
        </div>
      </div>
    </div>
  );
};

export default Cart;
