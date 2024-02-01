import { Button } from "@mui/material";
import React from "react";

const PriceDetail = ({ cart }) => {
  console.log(cart);
  return (
    <div className="">
      <div className="items-center px-16 py-4 border rounded-lg shadow-xl ">
        <div className="mb-4 text-3xl font-bold text-center text-gray-700">
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
          <div className="flex justify-between pt-3 mb-4">
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
