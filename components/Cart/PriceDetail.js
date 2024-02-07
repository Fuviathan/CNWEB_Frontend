import { Button } from "@mui/material";
import React from "react";

const PriceDetail = ({ cart }) => {
  return (
    <div className="">
      <div className="items-center px-16 py-4 border rounded-lg shadow-xl ">
        <div className="mb-4 text-3xl font-bold text-center text-gray-700">
          Giá cả chi tiết
        </div>
        <hr></hr>
        <div className="px-4 text-xl font-medium text-black">
          <div className="flex justify-between pt-3">
            <div>Tổng tiền thanh toán</div>
            <div>{cart?.cartTotal}$</div>
          </div>
          <div className="flex justify-between pt-3">
            <div>Giảm giá</div>
            <div className="text-green-600">0$</div>
          </div>
          <div className="flex justify-between pt-3 mb-4">
            <div>Phí vận chuyển</div>
            <div className="text-green-600">Miễn phí</div>
          </div>
          <hr></hr>
          <div className="flex justify-between pt-3">
            <div>Tổng số tiền</div>
            <div className="text-green-600">{cart?.cartTotal}$</div>
          </div>
        </div>
        <Button
          variant="contained"
          className="w-full mt-3 bg-[#baaf9d]  hover:bg-[#baaf9d] text-xl font-semibold text-white"
        >
          Xác nhận thanh toán
        </Button>
      </div>
    </div>
  );
};

export default PriceDetail;
