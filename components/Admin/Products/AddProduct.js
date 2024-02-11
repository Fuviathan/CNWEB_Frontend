import React, { useEffect, useState } from 'react';
import { CustomTextField } from '@/components/Auth/CustomTextField';
import { useDispatch, useSelector } from 'react-redux';
import { addNewProduct } from '@/state/Admin/Action';
import Dropzone from 'react-dropzone';
import { uploadImg, deleteImg } from '../../../state/Admin/Action';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form'
import { XMarkIcon } from '@heroicons/react/24/outline';
import { getProductByBrand, getProductByCategory } from '@/state/Products/Action';

const AddProduct = (props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      images: [],
      title: '',
    }
  })
  const dispatch = useDispatch();
  // const schema = yup.object({
  //   title: yup.string().required('Tên danh mục không được để trống'),
  //   images: yup.array().required('Phải có ít nhất một ảnh'),
  // });
  useEffect(() => {
    dispatch(getProductByBrand())
    dispatch(getProductByCategory())
  }, []);
  const brandList = useSelector((store) => store?.product?.brand)
  const categoryList = useSelector((store) => store?.product?.category)
  const images = useSelector((state) => state?.admin?.image);
  const onSubmit = (data) => {
    data.images = images
    data.price = Number(data.price)
    data.quantity = Number(data.quantity)
    dispatch(addNewProduct(data))
  }
  if (categoryList && brandList && props.open) return (
    <div className='absolute w-3/5 px-10 py-5 mt-4 overflow-y-auto -translate-x-1/2 -translate-y-1/2 bg-white min-h-fit h-3/4 min-w-fit top-1/2 left-1/2 rounded-xl'>
      <h3 className="mb-4 text-xl font-semibold tracking-wide">Thêm sản phẩm mới</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label className='block'>Tên sản phẩm</label>
        <input className='w-full p-2 mt-2 border border-gray-300 rounded-lg' {...register('title', { required: true })} />
        {errors.title && <div className='mt-2 text-sm italic text-red-400 text-italic'>*Không được để trống tên danh mục</div>}
        <div className='flex w-full mt-2'>
          <div className='w-1/2 mr-8'>
            <label className='block'>Nhãn hàng</label>
            <select className='w-full p-2 mt-2 border border-gray-300 rounded-lg' {...register('brand', { required: true })} >
              {brandList.map((item) =>
                <option value={item.title}>
                  {item.title}
                </option>
              )}
            </select>
            {errors.brand && <div className='mt-2 text-sm italic text-red-400 text-italic'>*Không được để trống tên danh mục</div>}
          </div>
          <div className='w-1/2 ml-8'>
            <label className='block'>Danh mục</label>
            <select className='w-full p-2 mt-2 border border-gray-300 rounded-lg' {...register('category', { required: true })} >
              {categoryList.map((item) =>
                <option value={item.title}>
                  {item.title}
                </option>
              )}
            </select>
            {errors.category && <div className='mt-2 text-sm italic text-red-400 text-italic'>*Không được để trống tên danh mục</div>}
          </div>
        </div>
        <div className='flex w-full mt-2'>
          <div className='w-1/2 mr-8'>
            <label className='block'>Số lượng</label>
            <input type='number' className='w-full p-2 mt-2 border border-gray-300 rounded-lg' {...register('quantity', { required: true })} />
            {errors.brand && <div className='mt-2 text-sm italic text-red-400 text-italic'>*Không được để trống tên danh mục</div>}
          </div>
          <div className='w-1/2 ml-8'>
            <label className='block'>Giá tiền</label>
            <input type='number' className='w-full p-2 mt-2 border border-gray-300 rounded-lg' {...register('price', { required: true })} />
            {errors.price && <div className='mt-2 text-sm italic text-red-400 text-italic'>*Không được để trống tên danh mục</div>}
          </div>
        </div>
        <label className='block mt-2'>Mô tả sản phẩm</label>
        <textarea className='w-full min-h-[100px] overflow-y-auto p-2 mt-2 border border-gray-300 rounded-lg' {...register('description', { required: true })} />
        {errors.description && <div className='mt-2 text-sm italic text-red-400 text-italic'>*Không được để trống thông tin sản phẩm</div>}
        {!images ? (
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
                    <p>
                      Kéo và thả ảnh vào đây, hoặc bấm vào để chọn ảnh
                    </p>
                  </div>
                </section>
              )}
            </Dropzone>
          </div>
        ) : (
          <div className="flex flex-wrap gap-3 mt-3 ">
            {images?.map((item, index) => {
              if (item !== 'null') {
                return (
                  // <div key={index} className="relative">
                  //   {item?.url ? (
                  //     <img src={item?.url} alt="" className='max-w-[500px] min-w-[200px] min-h-[200px] max-h-[500px]' />
                  //   ) : (
                  //     <></>
                  //   )}
                  // </div>
                  <div key={index} className="relative">
                    {item?.puclicId ? (
                      <button
                        onClick={() => {
                          dispatch(
                            deleteImg({ id: item.puclicId })
                          );
                        }}
                        className="absolute z-10 cursor-pointer w-10 h-10 top-2.5 right-2.5"
                        type="button"
                      >
                        <XMarkIcon className='w-6 h-6 text-red-400' />
                      </button>
                    ) : (
                      <></>
                    )}
                    {item?.puclicId ? (
                      <img src={item?.url} alt="" className='max-w-[600px] min-w-[400px] min-h-[400px] max-h-[600px]' />
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
        )}
        <div className="flex flex-row-reverse gap-5 mt-5">
          <button
            type='submit'
            className="p-2 px-6 bg-white border-2 text-dark-purple hover:bg-dark-purple hover:text-white border-dark-purple rounded-2xl"
          >
            Lưu
          </button>
          <button
            type='button'
            onClick={props.onClose}
            className="p-2 px-6 text-red-500 bg-white border-2 border-red-500 hover:text-white hover:bg-red-500 rounded-2xl"
          >
            Hủy
          </button>
        </div>
      </form>
    </div>
  )
  else return <></>
};

export default AddProduct;