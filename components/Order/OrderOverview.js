import React from "react";

const OrderOverview = (props) => {
  console.log(props.data);
  return (
    <div className="grid grid-cols-5  border-t-2  bg-light-brown border-white ">
      <div className=" flex items-center justify-center border-r-2 border-gray-100 ">
        <div>{props.index + 1}</div>
      </div>
      <div className="col-span-2 border-r-2 border-gray-100">
        <div className="flex items-center p-2 ">
          <img
            className="w-24 h-24 rounded-xl  object-contain"
            src={props?.data?.orderItems[0]?.product?.images[0]?.url}
          ></img>
          <div className="pl-6">
            {props?.data?.orderItems[0]?.product?.title}
          </div>
        </div>
      </div>
      <div className="flex items-center border-r-2 border-gray-100 justify-center">
        <div className="">{props?.data?.totalPrice}$</div>
      </div>
      <div className="flex items-center justify-center ">
        {props?.data?.orderStatus}
      </div>
    </div>
  );
};

export default OrderOverview;
