import React from "react";

const OrderOverview = () => {
  return (
    <div className="grid grid-cols-5  border-t-2  bg-light-brown border-white ">
      <div className=" flex items-center justify-center border-r-2 border-gray-100 ">
        <div>1</div>
      </div>
      <div className="col-span-2 border-r-2 border-gray-100">
        <div className="flex items-center p-2 ">
          <img
            className="w-24 h-24 rounded-xl  object-contain"
            src="https://clickbuy.com.vn/uploads/images/2021/10/avt-samsung-a23-xanh.png"
          ></img>
          <div className="pl-6">XIAOMI REMINOTE 13</div>
        </div>
      </div>
      <div className="flex items-center border-r-2 border-gray-100 justify-center">
        <div className="">400$</div>
      </div>
      <div className="flex items-center justify-center ">Confirm</div>
    </div>
  );
};

export default OrderOverview;
