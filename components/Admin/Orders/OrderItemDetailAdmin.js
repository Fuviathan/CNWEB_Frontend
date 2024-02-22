import React from "react";
import { useForm } from "react-hook-form";

const OrderItemDetailAdmin = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstname: props?.data?.shippingInfor.firstname,
      lastname: props?.data?.shippingInfor.lastname,
      address: props?.data?.shippingInfor.address,
      email: props?.data?.shippingInfor.email,
      methodPayment: props?.data?.shippingInfor.methodPayment,
    },
  });
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div id="root">
      <div className="absolute w-3/5 px-10 py-5 mt-4 overflow-y-auto -translate-x-1/2 -translate-y-1/2 bg-white min-h-fit h-3/4 min-w-fit top-1/2 left-1/2 rounded-xl">
        <h3 className="mb-4 text-xl font-semibold tracking-wide">
          Chi tiết đơn đặt hàng
        </h3>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="p-6 border border-gray-200 rounded-lg"
        >
          <div className="flex items-center">
            <div className="w-1/2 mr-8">
              <label className="block mt-2">Họ và tên đệm</label>
              <input
                className="w-full p-2 mt-2 border border-gray-300 rounded-lg"
                disabled
                {...register("lastname", { required: true })}
              />
            </div>
            <div className="w-1/2 ml-8">
              <label className="block mt-2">Tên</label>
              <input
                className="w-full p-2 mt-2 border border-gray-300 rounded-lg"
                disabled
                {...register("firstname", { required: true })}
              />
            </div>
          </div>
          <label className="block mt-2">Địa chỉ</label>
          <input
            className="w-full p-2 mt-2 border border-gray-300 rounded-lg"
            disabled
            {...register("address", { required: true })}
          />
          <div className="flex justify-between mt-2">
            <div className="flex flex-col w-1/2 mr-8">
              <label className="block ">Email</label>
              <input
                className="w-full p-2 mt-2 border border-gray-300 rounded-lg"
                disabled
                {...register("email", { required: true })}
              />
            </div>
            <div className="flex flex-col w-1/2 ml-8">
              <label className="block">Phương thức thanh toán</label>
              <input
                className="w-full p-2 mt-2 border border-gray-300 rounded-lg"
                disabled
                {...register("methodPayment", { required: true })}
              ></input>
            </div>
          </div>
          <div className="block mt-4 text-lg font-semibold">
            Chi tiết đơn hàng:
          </div>
          <div className="w-full px-2 py-2 mt-4 border border-gray-200 rounded-lg min-h-fit">
            <div className="flex border-b-2 border-gray-200">
              <div className="w-2/4 mb-1 text-lg font-medium">Tên sản phẩm</div>
              <div className="w-1/4 mb-1 text-lg font-medium">Số lượng</div>
              <div className="w-1/4 mb-1 text-lg font-medium">Giá tiền</div>
            </div>
            {props?.data?.orderItems.map((item, index) => {
              return (
                <div key={index} className="flex my-2 ">
                  <div className="flex w-2/4">
                    <img
                      src={item?.product?.images[0].url}
                      className="max-w-[50px] max-h-[50px] mr-4"
                    />
                    <div className="font-medium text-black ">
                      {item.product.title}
                    </div>
                  </div>
                  <div className="w-1/4 ml-2 font-medium text-black">
                    {item.count}
                  </div>
                  <div className="w-1/4 font-medium text-black">
                    {item.count * item.price}
                  </div>
                </div>
              );
            })}
            <div className="flex items-center pt-2 border-t-2 border-gray-200">
              <div className="w-3/4 text-lg font-medium text-black ">
                Tổng số tiền
              </div>
              <div className="text-lg font-medium text-black">
                ${props?.data?.totalPrice}
              </div>
            </div>
          </div>
          <div className="flex flex-row-reverse gap-5 mt-5">
            <button
              onClick={props.onClose}
              type="button"
              className="p-2 px-6 bg-white border-2 text-dark-purple hover:bg-dark-purple hover:text-white border-dark-purple rounded-2xl"
            >
              Đóng
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OrderItemDetailAdmin;