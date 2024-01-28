import {
  getCart,
  removeProductFromCart,
  updateProductInCart,
} from "@/state/Cart/Action";
import { Delete, Remove } from "@mui/icons-material";
import AddIcon from "@mui/icons-material/Add";

import { IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const CartItem = ({ data }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <div className="w-full flex shadow-lg border-t-2  rounded-xl">
        <div className="w-[9rem] h-[9rem] flex justify-center mr-4">
          <img
            className="object-contain"
            src={data?.product?.images[0].url}
          ></img>
        </div>
        <div className="flex flex-col ">
          <div
            className="text-black text-2xl font-semibold pt-5 text-ellipsis text-nowrap w-[20rem] overflow-hidden"
            title={data?.title}
          >
            {data?.title}
          </div>
          {/* <div className=" text-xl font-semibold text-gray-500">
            Color: Black
          </div> */}
          <div className="text-xl font-semibold text-black mt-6 pt-6 flex flex-row gap-5">
            <div>
              {data?.price - (data?.price * data?.product?.discount) / 100}$
            </div>
            <div className="text-gray-500 line-through">
              {(data?.price * data?.product?.discount) / 100}$
            </div>
            <div className="text-green-500">{data?.product?.discount}%</div>
          </div>
        </div>
        <div className="flex items-center ml-auto gap-2">
          <div className="place-self-center font-semibold text-black text-xl">
            Quantity:
          </div>

          <IconButton
            className="p-0 w-fit h-fit"
            onClick={() => {
              dispatch(
                updateProductInCart({
                  id: data?.product?._id,
                  quantity: data?.count - 1,
                })
              );
            }}
            disabled={data?.cout < 2}
            aria-label="delete"
            size="large"
          >
            <Remove />
          </IconButton>
          <div className="place-self-center text-black font-semibold">
            {data?.count}
          </div>
          <IconButton
            className="p-0 w-fit h-fit"
            onClick={() => {
              dispatch(
                updateProductInCart({
                  id: data?.product?._id,
                  quantity: data?.count + 1,
                })
              );
            }}
            aria-label="delete"
            size="large"
          >
            <AddIcon></AddIcon>
          </IconButton>
        </div>
        <IconButton
          className="p-0 w-fit h-fit ml-auto my-auto px-5"
          // onClick={() => setQuantity(quantity + 1)}
          aria-label="delete"
          size="large"
        >
          <Delete
            className="text-red-500"
            onClick={() => {
              dispatch(removeProductFromCart(data.product._id));
            }}
          ></Delete>
        </IconButton>
      </div>
    </div>
  );
};

export default CartItem;
