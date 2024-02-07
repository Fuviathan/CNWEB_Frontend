import React, { useEffect } from 'react';
import CategoryCard from './CategoryCard';
import { useDispatch, useSelector } from 'react-redux';
import { getCategoryCount } from '@/state/Products/Action'

const CategoryWrapper = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategoryCount());
  }, []);
  const data = useSelector((state) => state);
  console.log(data)
  // const number = useSelector((state) => state.product?.categoryProductTotal);
  return (
    <div className="flex-wrap categories d-flex justify-content-between align-items-center">
      {/* {data?.map((item, index) => {
        return (
          <Category
            key={item && item['_id']}
            src={item?.image}
            title={item?.title}
            quantity={number && number[index]?.count}
            alt={item?.title}
          />
        );
      })} */}
    </div>
  );
};

export default CategoryWrapper;