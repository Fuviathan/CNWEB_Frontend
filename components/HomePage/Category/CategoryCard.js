import { getProductByFilter } from "@/state/Products/Action";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { getAllProducts } from '../../features/products/productSlice';
const CategoryCard = (props) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const store = useSelector((store) => store);
  console.log(store);
  const handleClick = () => {
    // navigate(`/product?category=${props.title}`);
    router.push(`/product?category=${props.title}`);
    dispatch(getProductByFilter({ category: props.title }));
  };
  return (
    <div className="flex  px-4 w-1/5 border" onClick={handleClick}>
      <div className="flex flex-col my-auto w-4/6">
        <h6 className="text-2xl font-medium">{props?.title}</h6>
        <h6>{props?.quantity} sản phẩm</h6>
      </div>
      <img className="w-28 h-28 object-fit" src={props.src} alt={props.alt} />
    </div>
  );
};

export default CategoryCard;
