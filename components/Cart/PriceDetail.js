import { Button } from "@mui/material";
import React from "react";

const PriceDetail = () => {
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
            <div>2500$</div>
          </div>
          <div className="flex justify-between pt-3">
            <div>Discount</div>
            <div className="text-green-600">500$</div>
          </div>
          <div className="flex justify-between pt-3">
            <div>Delivery Charge</div>
            <div className="text-green-600">Free</div>
          </div>
          <hr></hr>
          <div className="flex justify-between pt-3">
            <div>Total amount</div>
            <div className="text-green-600">500$</div>
          </div>
        </div>
        <Button
          variant="contained"
          className="w-full mt-3 bg-[#facc15] hover:bg-[#fad815d1] text-xl font-semibold text-white"
        >
          CHECKOUT
        </Button>
      </div>
    </div>
  );
};

export default PriceDetail;
