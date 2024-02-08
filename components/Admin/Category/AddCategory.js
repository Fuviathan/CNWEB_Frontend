import React, { useEffect } from 'react';
import { CustomTextField } from '@/components/Auth/CustomTextField';
import { useDispatch, useSelector } from 'react-redux';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { addNewCategory } from '@/state/Admin/Action';
import Dropzone from 'react-dropzone';
import { uploadImg } from '../../../state/Admin/Action';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form'

const AddCategory = (props) => {
  console.log(props)
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
  const images = useSelector((state) => state?.admin?.image);
  const onSubmit = (data) => {
    data.images = images
    console.log(data)
    dispatch(addNewCategory(data))
  }
  if (props.open) return (
    <div className='absolute w-3/5 px-10 py-5 mt-4 -translate-x-1/2 -translate-y-1/2 bg-white top-1/2 left-1/2 rounded-xl'>
      <h3 className="mb-4 text-xl font-semibold tracking-wide">Thêm danh mục mới</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label className='block'>Tên danh mục</label>
        <input className='w-full p-2 mt-2 border border-gray-300 rounded-lg' {...register('title', { required: true })} />
        {errors.title && <div className='mt-2 text-sm italic text-red-400 text-italic'>*Không được để trống tên danh mục</div>}
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
          <div className="flex flex-wrap gap-3 mt-3 images">
            {images?.map((item, index) => {
              if (item !== 'null') {
                return (
                  <div key={index} className="relative">
                    {item?.url ? (
                      <img src={item?.url} alt="" className='max-w-[500px] max-h-[500px]' />
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

export default AddCategory;