import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector, Provider } from "react-redux";
import { UserIcon } from '@heroicons/react/24/outline';
import { getCart } from '@/state/Cart/Action';

export default function AdminHeader() {
    const [auth, setAuth] = useState();
    const user = useSelector((store) => store?.auth?.user);
    console.log(user)
    const dispatch = useDispatch();
    useEffect(() => {
        // Get the value from local storage if it exists
    
        dispatch(getCart());
      }, [user, auth]);

    return (
        <div className='flex justify-end w-full px-8 py-4 bg-white '>
            <div className='flex items-center hover:cursor-pointer hover:opacity-70'>
                <UserIcon className='w-6 h-6 font-medium' />
                <div className='ml-3 text-xl tracking-wide'>
                    ABCD@gmail.com
                </div>
            </div>
        </div>
    )
}
