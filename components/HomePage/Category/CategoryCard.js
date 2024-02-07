import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
// import { getAllProducts } from '../../features/products/productSlice';
const CategoryCard = (props) => {
  const dispatch = useDispatch();
//   const handleClick = () => {
//     navigate(`/product?category=${props.title}`);
//     dispatch(getAllProducts({ category: props.title }));
//   };
  return (
    <div
      className="d-flex align-items-center category-item"
    //   onClick={handleClick}
    >
      <div>
        <h6>{props.title}</h6>
        <p>{props.quantity} Items</p>
      </div>
      <img src={props.src} alt={props.alt} />
    </div>
  );
};

export default CategoryCard;