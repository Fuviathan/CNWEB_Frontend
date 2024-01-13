import { Delete, Remove } from "@mui/icons-material";
import AddIcon from "@mui/icons-material/Add";

import { IconButton } from "@mui/material";
import React, { useState } from "react";

const CartItem = () => {
  const [quantity, setQuantity] = useState(1);
  return (
    <div>
      <div className="w-full flex shadow-xl  mt-4 rounded-xl">
        <div className="w-[9rem] h-[9rem] ">
          <img
            className="object-contain"
            src="https://clickbuy.com.vn/uploads/images/2023/09/iphone-15-pro-max-xanh-1-1.png"
          ></img>
        </div>
        <div className="flex flex-col">
          <div className="text-black text-2xl font-semibold">
            Iphone 15 pro max
          </div>
          <div className=" text-xl font-semibold text-gray-500">
            Color: Black
          </div>
          <div className="text-xl font-semibold text-black mt-6 pt-6 flex flex-row gap-5">
            <div>2500$</div>
            <div className="text-gray-500 line-through">500$</div>
            <div className="text-green-500">20%</div>
          </div>
        </div>
        <div className="flex items-center ml-20 gap-2">
          <div className="place-self-center font-semibold text-black text-xl">
            Quantity:
          </div>

          <IconButton
            className="p-0 w-fit h-fit"
            onClick={() => setQuantity(quantity - 1)}
            disabled={quantity < 2}
            aria-label="delete"
            size="large"
          >
            <Remove />
          </IconButton>
          <div className="place-self-center text-black font-semibold">
            {quantity}
          </div>
          <IconButton
            className="p-0 w-fit h-fit"
            onClick={() => setQuantity(quantity + 1)}
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
          <Delete className="text-red-500"></Delete>
        </IconButton>
      </div>
    </div>
  );
};

export default CartItem;
