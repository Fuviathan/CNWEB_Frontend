import React from "react";

const OrderItemDetail = () => {
  return (
    <div className="grid grid-cols-5 shadow-md border-t-2 bg-[#f8f2ea] border-white">
      <div className=" flex items-center justify-center border-r-2 border-white">
        <div>1</div>
      </div>
      <div className="col-span-2">
        <div className="flex items-center border-r-2 border-white p-2">
          <img
            className="w-24 h-24 rounded-xl"
            src="https://clickbuy.com.vn/uploads/images/2021/10/avt-samsung-a23-xanh.png"
          ></img>
          <div className="pl-4">XIAOMI REMINOTE 13</div>
        </div>
      </div>
      <div className="flex items-center border-r-2 border-white justify-center">
        <div className="">200$</div>
      </div>
      <div className="flex items-center justify-center">1</div>
    </div>
  );
};

export default OrderItemDetail;
