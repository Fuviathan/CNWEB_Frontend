import React from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { updateBrand } from "@/state/Admin/Action";
import { getProductByBrand } from "@/state/Products/Action";

const UpdateBrand = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: props.brand,
    },
  });
  const dispatch = useDispatch();
  const onSubmit = (data) => {
    data.id = props.data;
    dispatch(updateBrand(data));
    setTimeout(() => {
      dispatch(getProductByBrand());
    }, 2000);
  };
  if (props.open)
    return (
      <div className="absolute w-2/5 px-10 py-5 mt-4 -translate-x-1/2 -translate-y-1/2 bg-white min-w-fit top-1/2 left-1/2 rounded-xl">
        <h3 className="mb-4 text-xl font-semibold tracking-wide">
          Sửa nhãn hàng
        </h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className="block">Tên nhãn hàng mới</label>
          <input
            className="w-full p-2 mt-2 border border-gray-300 rounded-lg"
            {...register("title", { required: true })}
          />
          {errors.title && (
            <div className="mt-2 text-sm italic text-red-400 text-italic">
              *Không được để trống tên nhãn hàng
            </div>
          )}

          <div className="flex flex-row-reverse gap-5 mt-5">
            <button
              onClick={() => {
                setTimeout(props.onClose, 200);
              }}
              type="submit"
              className="p-2 px-6 bg-white border-2 text-dark-purple hover:bg-dark-purple hover:text-white border-dark-purple rounded-2xl"
            >
              Lưu
            </button>
            <button
              type="button"
              onClick={props.onClose}
              className="p-2 px-6 text-red-500 bg-white border-2 border-red-500 hover:text-white hover:bg-red-500 rounded-2xl"
            >
              Hủy
            </button>
          </div>
        </form>
      </div>
    );
  else return <></>;
};

export default UpdateBrand;
