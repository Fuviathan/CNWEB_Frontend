import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewCategory } from "@/state/Admin/Action";
import Dropzone from "react-dropzone";
import { uploadImg, handleSetImagesToNull } from "../../../state/Admin/Action";
import { useForm } from "react-hook-form";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { toast } from "react-toastify";
import { getProductByCategory } from "@/state/Products/Action";

const AddCategory = (props) => {
  const dispatch = useDispatch();
  const images = useSelector((state) => state?.admin?.image);
  const [img, setImg] = useState([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      image: [],
      title: "",
    },
  });
  useEffect(() => {
    if (images) {
      setImg([...img, ...images]);
      dispatch(handleSetImagesToNull());
    }
  }, [images]);
  const onSubmit = (data) => {
    data.image = img;
    console.log(data);
    if (data.image.length > 1) toast.error("Không được thêm quá 1 ảnh!");
    else if (data.image.length < 1) toast.error("Không được thiếu ảnh!");
    else {
      dispatch(addNewCategory(data));
      setTimeout(() => {
        dispatch(getProductByCategory());
      }, 2000);
    }
  };
  if (props.open)
    return (
      <div id="root">
        <div className="absolute w-3/5 px-10 py-5 mt-4 -translate-x-1/2 -translate-y-1/2 bg-white min-w-fit top-1/2 left-1/2 rounded-xl">
          <h3 className="mb-4 text-xl font-semibold tracking-wide">
            Thêm danh mục mới
          </h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label className="block">Tên danh mục</label>
            <input
              className="w-full p-2 mt-2 border border-gray-300 rounded-lg"
              {...register("title", { required: true })}
            />
            {errors.title && (
              <div className="mt-2 text-sm italic text-red-400 text-italic">
                *Không được để trống tên danh mục
              </div>
            )}
            {/* {!images ? ( */}
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
            {/* ) : ( */}
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
            {/* )} */}
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
      </div>
    );
  else return <></>;
};

export default AddCategory;
