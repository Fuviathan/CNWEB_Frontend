import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form'
import { getCart } from '@/state/Cart/Action';
import { For } from 'react-haiku';
import { useDispatch, useSelector } from 'react-redux';

const ConfirmOrderModal = (props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstname: '',
      lastname: '',
      address: '',
      email: '',
      methodPayment: '',
      orderItems: [],
      totalPrice: '',
    }
  })
  const dispatch = useDispatch();
  const cart = useSelector((store) => store?.cart?.cart);
  useEffect(() => {
    dispatch(getCart());
  }, []);
  const productList = cart?.products
  console.log(productList)
  const onSubmit = (data) => {
    data.totalPrice = cart.cartTotal
    console.log(data)
  }
  if (!cart) return <></>
  else if (props.open && cart) return (
    // <div className='relative z-30 flex items-center justify-center w-screen h-screen bg-black bg-opacity-30'>
    <div className='absolute w-3/5 px-10 py-5 mt-4 overflow-y-auto -translate-x-1/2 -translate-y-1/2 bg-white min-h-fit h-3/4 min-w-fit top-1/2 left-1/2 rounded-xl'>
      <h3 className="mb-4 text-xl font-semibold tracking-wide">Hoàn thành đơn đặt hàng</h3>
      <form onSubmit={handleSubmit(onSubmit)} className='p-6 border border-gray-200 rounded-lg'>
        <div className='flex items-center'>
          <div className='w-1/2 mr-8'>
            <label className='block mt-2'>Họ và tên đệm</label>
            <input className='w-full p-2 mt-2 border border-gray-300 rounded-lg' {...register('lastname', { required: true })} />
            {errors.lastname && <div className='mt-2 text-sm italic text-red-400 text-italic'>*Không được để trống họ và tên đệm</div>}
          </div>
          <div className='w-1/2 ml-8'>
            <label className='block mt-2'>Tên</label>
            <input className='w-full p-2 mt-2 border border-gray-300 rounded-lg' {...register('firstname', { required: true })} />
            {errors.firstname && <div className='mt-2 text-sm italic text-red-400 text-italic'>*Không được để trống tên </div>}
          </div>
        </div>
        <label className='block mt-2'>Địa chỉ</label>
        <input className='w-full p-2 mt-2 border border-gray-300 rounded-lg' {...register('address', { required: true })} />
        {errors.address && <div className='mt-2 text-sm italic text-red-400 text-italic'>*Không được để trống địa chỉ</div>}
        <div className='flex justify-between mt-2'>
          <div className='flex flex-col w-1/2 mr-8'>
            <label className='block '>Email</label>
            <input className='w-full p-2 mt-2 border border-gray-300 rounded-lg' {...register('email', { required: true })} />
            {errors.email && <div className='mt-2 text-sm italic text-red-400 text-italic'>*Không được để trống email</div>}
          </div>
          <div className='flex flex-col w-1/2 ml-8'>
            <label className='block'>Phương thức thanh toán</label>
            <select className='w-full p-2 mt-2 border border-gray-300 rounded-lg' {...register('methodPayment', { required: true })} >
              <option value={"tien mat"}>
                Tiền mặt
              </option>
              <option value={"chuyen khoan"}>
                Thẻ ngân hàng
              </option>
            </select>
            {errors.methodPayment && <div className='mt-2 text-sm italic text-red-400 text-italic'>*Không được để trống phương thức thanh toán</div>}
          </div>
        </div>
        <div className='block mt-4 text-lg font-semibold'>Chi tiết đơn hàng:</div>
        <div className='w-full px-2 py-2 mt-4 border border-gray-200 rounded-lg min-h-fit'>
          <div className='flex border-b-2 border-gray-200'>
            <div className='w-2/4 mb-1 text-lg font-medium'>Tên sản phẩm</div>
            <div className='w-1/4 mb-1 text-lg font-medium'>Số lượng</div>
            <div className='w-1/4 mb-1 text-lg font-medium'>Giá tiền</div>
          </div>
          {productList && productList.map((item) => {
            return (
              <div className='flex my-2 '>
                <div className='flex w-2/4'>
                  <img src={item?.product.images[0].url} className='max-w-[50px] max-h-[50px] mr-4' />
                  <div className='font-medium text-black '>{item.title}</div>
                </div>
                <div className='w-1/4 ml-2 font-medium text-black'>{item.count}</div>
                <div className='w-1/4 font-medium text-black'>{item.count * item.price}</div>
              </div>
            )
          })}
          <div className='flex items-center pt-2 border-t-2 border-gray-200'>
            <div className='w-3/4 text-lg font-medium text-black '>Tổng số tiền</div>
            <div className='text-lg font-medium text-black'>${cart.cartTotal}</div>
          </div>

        </div>
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
    // </div>
  )
  else return <></>
};

export default ConfirmOrderModal;