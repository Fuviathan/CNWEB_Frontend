import React from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form'
import { updateOrderStatus } from '@/state/Admin/Action';

const ChangeOrderStatus = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      image: [],
      title: '',
    }
  })
  const dispatch = useDispatch();
  const onSubmit = (data) => {
    data.id = props.data
    dispatch(updateOrderStatus(data))
  }
  if (props.open) return (
    <div className='absolute w-3/5 px-10 py-5 mt-4 -translate-x-1/2 -translate-y-1/2 bg-white min-w-fit top-1/2 left-1/2 rounded-xl'>
      <h3 className="mb-4 text-xl font-semibold tracking-wide">Sửa trạng thái đơn hàng</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label className='block'>Chọn trạng thái của đơn hàng</label>
        <select className='w-full p-2 mt-2 border border-gray-300 rounded-lg' {...register('status', { required: true })} >
          <option value='Ordered'>
            Ordered
          </option>
          <option value='Delivery'>
            Delivery
          </option>
          <option value='Success'>
            Success
          </option>
        </select>
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

export default ChangeOrderStatus;