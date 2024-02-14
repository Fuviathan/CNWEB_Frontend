import { useForm } from "react-hook-form";
import React from "react";
import { useDispatch } from "react-redux";
import { updateRole } from "@/state/Admin/Action";

const UpdateRole = (props) => {
    const dispatch = useDispatch();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            role: props.role
        }
    })

    const onSubmit = (data) => {
        data.id = props.data
        dispatch(updateRole(data))
    };
    if (props.open) return (
        <div className="absolute w-2/6 px-10 py-5 mt-4 -translate-x-1/2 -translate-y-1/2 bg-white top-1/2 left-1/2 rounded-xl">
            <div className="text-xl font-semibold ">Sửa vai trò</div>
            <form className="mt-2" onSubmit={handleSubmit(onSubmit)}>
                <select className='w-full p-2 mt-2 border border-gray-300 rounded-lg' {...register('role', { required: true })} >
                    <option value='user'>user</option>
                    <option value='subadmin'>subadmin</option>

                </select>
                {errors.category && <div className='mt-2 text-sm italic text-red-400 text-italic'>*Không được để trống tên danh mục</div>}
                <div className="flex flex-row-reverse gap-5 mt-5">
                    <button
                        className="p-2 px-6 bg-white border-2 text-dark-purple hover:bg-dark-purple hover:text-white border-dark-purple rounded-2xl"
                        type='submit'
                    >
                        Lưu
                    </button>
                    <button
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

export default UpdateRole;
