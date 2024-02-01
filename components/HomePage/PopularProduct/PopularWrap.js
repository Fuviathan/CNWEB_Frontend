import { getProductByCategory } from '@/state/Products/Action'
import React, { createContext, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useDispatch, useSelector } from 'react-redux'


export default function PopularWrap() {
    const notIconAdd = true
    const productState = useSlecctor((state => state?.product?.product))
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProductByCategory())
    }, [])
    const productCateGory = useSelector((state) => state?.product?.productCateGory)
    return (
        <div>PopularWrap</div>
    )
}
