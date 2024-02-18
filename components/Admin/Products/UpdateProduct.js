import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateProduct, handleSetImagesToNull } from "@/state/Admin/Action";
import Dropzone from "react-dropzone";
import { uploadImg } from "../../../state/Admin/Action";
import { useForm } from "react-hook-form";
import { XMarkIcon } from "@heroicons/react/24/outline";
import {
  getProductByBrand,
  getProductByCategory,
  getProducts,
} from "@/state/Products/Action";

const UpdateProduct = (props) => {
  const [img, setImg] = useState(props?.data?.images);
  let images = useSelector((state) => state?.admin?.image);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductByBrand());
    dispatch(getProductByCategory());
  }, []);
  useEffect(() => {
    if (images) {
      setImg([...img, ...images]);
      dispatch(handleSetImagesToNull());
    }
  }, [images]);
  const categoryList = useSelector((store) => store?.product?.category);
  const brandList = useSelector((store) => store?.product?.brand);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: props.data?.title,
      brand: props.data?.brand,
      category: props.data?.category,
      quantity: props.data?.quantity,
      price: props.data?.price,
      description: props.data?.description,
    },
  });
  const onSubmit = (data) => {
    data.ID = props.data._id;
    data.images = img;
    data.price = Number(data.price);
    data.quantity = Number(data.quantity);
    dispatch(updateProduct(data));
    setTimeout(() => {
      dispatch(getProducts(), 500);
    });
  };
  if (categoryList && brandList && props.open)
    return (
      <div className="absolute w-3/5 px-10 py-5 mt-4 overflow-y-auto -translate-x-1/2 -translate-y-1/2 bg-white min-h-fit h-3/4 min-w-fit top-1/2 left-1/2 rounded-xl">
        <h3 className="mb-4 text-xl font-semibold tracking-wide">
          Sửa thông tin sản phẩm
        </h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className="block">Tên sản phẩm</label>
          <input
            className="w-full p-2 mt-2 border border-gray-300 rounded-lg"
            {...register("title", { required: true })}
          />
          {errors.title && (
            <div className="mt-2 text-sm italic text-red-400 text-italic">
              *Không được để trống tên danh mục
            </div>
          )}
          <div className="flex w-full mt-2">
            <div className="w-1/2 mr-8">
              <label className="block">Nhãn hàng</label>
              <select
                className="w-full p-2 mt-2 border border-gray-300 rounded-lg"
                {...register("brand", { required: true })}
              >
                {brandList.map((item, index) => (
                  <option key={index} value={item.title}>
                    {item.title}
                  </option>
                ))}
              </select>
              {errors.brand && (
                <div className="mt-2 text-sm italic text-red-400 text-italic">
                  *Không được để trống tên danh mục
                </div>
              )}
            </div>
            <div className="w-1/2 ml-8">
              <label className="block">Danh mục</label>
              <select
                className="w-full p-2 mt-2 border border-gray-300 rounded-lg"
                {...register("category", { required: true })}
              >
                {categoryList.map((item, index) => (
                  <option key={index} value={item.title}>
                    {item.title}
                  </option>
                ))}
              </select>
              {errors.category && (
                <div className="mt-2 text-sm italic text-red-400 text-italic">
                  *Không được để trống tên danh mục
                </div>
              )}
            </div>
          </div>
          <div className="flex w-full mt-2">
            <div className="w-1/2 mr-8">
              <label className="block">Số lượng</label>
              <input
                type="number"
                className="w-full p-2 mt-2 border border-gray-300 rounded-lg"
                {...register("quantity", { required: true })}
              />
              {errors.brand && (
                <div className="mt-2 text-sm italic text-red-400 text-italic">
                  *Không được để trống tên danh mục
                </div>
              )}
            </div>
            <div className="w-1/2 ml-8">
              <label className="block">Giá tiền</label>
              <input
                type="number"
                className="w-full p-2 mt-2 border border-gray-300 rounded-lg"
                {...register("price", { required: true })}
              />
              {errors.price && (
                <div className="mt-2 text-sm italic text-red-400 text-italic">
                  *Không được để trống tên danh mục
                </div>
              )}
            </div>
          </div>
          <label className="block mt-2">Mô tả sản phẩm</label>
          <textarea
            className="w-full min-h-[100px] focus:opacity-100 overflow-y-auto p-2 mt-2 border border-gray-300 rounded-lg"
            {...register("description", { required: true })}
          />
          {errors.description && (
            <div className="mt-2 text-sm italic text-red-400 text-italic">
              *Không được để trống thông tin sản phẩm
            </div>
          )}
          <div className="p-5 mt-6 text-center bg-white border border-gray-400 rounded-lg cursor-pointer">
            <Dropzone
              onDrop={(acceptedFiles) => {
                dispatch(uploadImg(acceptedFiles));
              }}
            >
              {({ getRootProps, getInputProps }) => (
                <section>
                  <div {...getRootProps()}>
                    <input {...getInputProps()} />
                    <p>Kéo và thả ảnh vào đây, hoặc bấm vào để chọn ảnh</p>
                  </div>
                </section>
              )}
            </Dropzone>
          </div>
          <div className="flex flex-wrap gap-3 mt-3 ">
            {img?.map((item, index) => {
              if (item !== "null") {
                return (
                  <div key={index} className="relative">
                    {item?._id || item?.puclicId ? (
                      <button
                        onClick={() => {
                          setImg(
                            img.filter(
                              (i) =>
                                i._id !== item._id ||
                                i.puclicId !== item.puclicId
                            )
                          );
                        }}
                        className="absolute z-10 cursor-pointer w-10 h-10 top-2.5 right-2.5"
                        type="button"
                      >
                        <XMarkIcon className="w-6 h-6 text-red-400" />
                      </button>
                    ) : (
                      <></>
                    )}
                    {item?._id || item?.puclicId ? (
                      <img
                        src={item?.url}
                        alt=""
                        className="w-[350px] h-[350px]"
                      />
                    ) : (
                      <></>
                    )}
                  </div>
                );
              } else {
                return <></>;
              }
            })}
          </div>
          <div className="flex flex-row-reverse gap-5 mt-5">
            <button
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

export default UpdateProduct;
