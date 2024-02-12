import React from "react";

const OrderItemDetail = (props) => {
  console.log(props.data);
  return (
    <div className="grid grid-cols-5 shadow-md border-t-2 bg-[#f8f2ea] border-white">
      <div className=" flex items-center justify-center border-r-2 border-white">
        <div>{props.index + 1}</div>
      </div>
      <div className="col-span-2">
        <div className="flex items-center border-r-2 border-white p-2">
          <img
            className="w-24 h-24 rounded-xl"
            src={props.data?.product?.images[0]?.url}
          ></img>
          <div className="pl-4">{props.data?.product?.title}</div>
        </div>
      </div>
      <div className="flex items-center border-r-2 border-white justify-center">
        <div className="">{props.data?.price}$</div>
      </div>
      <div className="flex items-center justify-center">
        {props.data?.count}
      </div>
    </div>
  );
};

export default OrderItemDetail;
