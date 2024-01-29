import React, { useState } from "react";
import OrderItemDetail from "./OrderItemDetail";
import OrderOverview from "./OrderOverview";

const OrderDetail = () => {
  const [selectedOrder, setSelectedOrder] = useState(null);

  function handleShowOrderItem(index) {
    setSelectedOrder((prevSelectedOrder) =>
      prevSelectedOrder === index ? null : index
    );
  }

  return (
    <div className="grid grid-cols-5 mx-20 border-2 font-sans font-semibold bg-[#baaf9d]">
      <div className="text-center border-r-2 border-gray-200 text-white">
        Order Id
      </div>
      <div className="col-span-2 text-center border-r-2 border-gray-200 text-white">
        Detail
      </div>
      <div className="border-r-2 text-center border-gray-200 text-white">
        Total Amount
      </div>
      <div className="text-center text-white">Status</div>
      {[1, 1, 1, 1].map((_, index) => (
        <div key={index} className="grid grid-cols-5 col-span-5">
          <div
            onClick={() => handleShowOrderItem(index)}
            className={`col-span-5 orderItem ${
              selectedOrder === index ? "selected" : ""
            }`}
          >
            <OrderOverview></OrderOverview>
          </div>
          <div
            className={`text-center col-span-1 detail-order border-r-2 border-white bg-[#f8f2ea] ${
              selectedOrder === index ? "" : "hidden"
            }`}
          >
            Number
          </div>
          <div
            className={`col-span-2 detail-order text-center border-r-2 border-gray-200 bg-[#f8f2ea] ${
              selectedOrder === index ? "" : "hidden"
            }`}
          >
            Information
          </div>
          <div
            className={`text-center detail-order border-r-2 border-white bg-[#f8f2ea] ${
              selectedOrder === index ? "" : "hidden"
            }`}
          >
            Price
          </div>
          <div
            className={`text-center detail-order border-r-2 border-white bg-[#f8f2ea] ${
              selectedOrder === index ? "" : "hidden"
            }`}
          >
            Quantity
          </div>
          <div
            className={`col-span-5 detail-order ${
              selectedOrder === index ? "" : "hidden"
            }`}
          >
            {[1, 1].map((i, index) => (
              <div key={index} className="col-span-5">
                <OrderItemDetail></OrderItemDetail>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default OrderDetail;
