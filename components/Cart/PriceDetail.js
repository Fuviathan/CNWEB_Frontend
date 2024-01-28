import { Button } from "@mui/material";
import React from "react";

const PriceDetail = ({ cart }) => {
  console.log(cart);
  return (
    <div className="px-[4rem]">
      <div className="items-center gap-4 border-2 shadow-2xl rounded-lg ">
        <div className="text-gray-700 text-center text-3xl font-bold">
          Price details
        </div>
        <hr></hr>
        <div className="px-4 text-xl font-medium text-black">
          <div className="flex justify-between pt-3">
            <div>Price</div>
            <div>{cart?.cartTotal}$</div>
          </div>
          <div className="flex justify-between pt-3">
            <div>Discount</div>
            <div className="text-green-600">0$</div>
          </div>
          <div className="flex justify-between pt-3">
            <div>Delivery Charge</div>
            <div className="text-green-600">Free</div>
          </div>
          <hr></hr>
          <div className="flex justify-between pt-3">
            <div>Total amount</div>
            <div className="text-green-600">{cart?.cartTotal}$</div>
          </div>
        </div>
        <Button
          variant="contained"
          className="w-full mt-3 bg-[#baaf9d]  hover:bg-[#baaf9d] text-xl font-semibold text-white"
        >
          CHECKOUT
        </Button>
      </div>
    </div>
  );
};

export default PriceDetail;
