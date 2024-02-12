import React, { useEffect, useState } from "react";
import OrderItemDetail from "./OrderItemDetail";
import OrderOverview from "./OrderOverview";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrderHistory } from "@/state/Cart/Action";

const OrderDetail = () => {
  const dispatch = useDispatch();
  const orderHistory = useSelector((store) => store?.cart?.orderHistory);
  console.log(orderHistory);
  const [selectedOrder, setSelectedOrder] = useState(null);

  function handleShowOrderItem(index) {
    setSelectedOrder((prevSelectedOrder) =>
      prevSelectedOrder === index ? null : index
    );
  }

  useEffect(() => {
    dispatch(getAllOrderHistory());
  }, []);

  return (
    <div className="grid grid-cols-5 mx-20 border-2 font-sans font-semibold bg-[#baaf9d]">
      <div className="py-2 text-center text-white border-r-2 border-gray-200">
        Order Id
      </div>
      <div className="col-span-2 py-2 text-center text-white border-r-2 border-gray-200">
        Detail
      </div>
      <div className="py-2 text-center text-white border-r-2 border-gray-200">
        Total Amount
      </div>
      <div className="py-2 text-center text-white">Status</div>
      {orderHistory?.map((orderI, index) => (
        <div key={index} className="grid grid-cols-5 col-span-5">
          <div
            onClick={() => handleShowOrderItem(index)}
            className={`col-span-5 orderItem ${
              selectedOrder === index ? "selected" : ""
            }`}
          >
            <OrderOverview index={index} data={orderI}></OrderOverview>
          </div>
          <div
            className={`text-center col-span-1 py-2  detail-order border-r-2 border-white bg-[#f8f2ea] ${
              selectedOrder === index ? "" : "hidden"
            }`}
          >
            Number
          </div>
          <div
            className={` py-2 col-span-2 detail-order text-center border-r-2 border-gray-200 bg-[#f8f2ea] ${
              selectedOrder === index ? "" : "hidden"
            }`}
          >
            Information
          </div>
          <div
            className={` py-2 text-center detail-order border-r-2 border-white bg-[#f8f2ea] ${
              selectedOrder === index ? "" : "hidden"
            }`}
          >
            Price
          </div>
          <div
            className={` py-2 text-center detail-order border-r-2 border-white bg-[#f8f2ea] ${
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
            {orderI?.orderItems?.map((item, index) => (
              <div key={index} className="col-span-5">
                <OrderItemDetail index={index} data={item}></OrderItemDetail>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default OrderDetail;
