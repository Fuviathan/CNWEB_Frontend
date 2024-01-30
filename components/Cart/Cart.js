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
  }, [cartItem?.cartTotal]);

  return (
    <div>
      <div className="grid grid-cols-3 px-[8rem] my-[5rem]">
        <div className="col-span-2">
          {cart?.products.map((item) => (
            <CartItem key={item._id} data={item}></CartItem>
          ))}
        </div>
        <div className="col-span-1">
          <PriceDetail cart={cart}></PriceDetail>
        </div>
      </div>
    </div>
  );
};

export default Cart;
