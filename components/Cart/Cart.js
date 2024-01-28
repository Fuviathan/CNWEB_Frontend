import React, { useEffect } from "react";
import CartItem from "./CartItem";
import PriceDetail from "./PriceDetail";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "@/state/Cart/Action";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((store) => store?.cart?.cart);
  const cartItem = useSelector((store) => store?.cart?.cartItem);
  console.log(cartItem);
  useEffect(() => {
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
