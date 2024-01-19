import {
  CheckBox,
  CompareArrows,
  CompareArrowsOutlined,
  Favorite,
  FavoriteBorder,
  ShoppingCart,
} from "@mui/icons-material";
import { Button, Checkbox, Rating } from "@mui/material";
import React from "react";
import { pink } from "@mui/material/colors";
import Image from "next/image";

const ProductCard = ({ grid }) => {
  const item = {
    description: `Chuột không dây Logitech Pop được thiết kế giúp tối ưu hiệ suất
  làm việc của bạn trên máy tính PC lẫn laptop. Thiết kế n Chuột
  không dây Logitech Pop được thiết kế giúp tối ưu hiệ suất làm
  việc của bạn trên máy tính PC lẫn laptop. Thiết kế n Chuột không
  dây Logitech Pop được thiết kế giúp tối ưu hiệ suất làm việc của
  bạn trên máy tính PC lẫn laptop. Thiết kế nChuột không dây Chuột`,
  };
  return (
    <div>
      <div
        class={`flex w-full overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md h-fit${
          grid === 6 ? " flex-row justify-start" : " flex-col"
        } `}
      >
        <div
          class={`relative block mr-0 mx-3 mt-3 flex h-60 overflow-hidden rounded-xl w-max-full ${
            grid === 6 ? " w-[40%] " : " "
          } `}
        >
          <div className="w-[full] h-[11rem] ">
            <img
              className="object-contain w-full h-full "
              src="http://res.cloudinary.com/des2cvikr/image/upload/v1684594653/rdlwx7vepfuyzntrrnab.jpg"
            />

            <img
              className="absolute top-0 object-contain w-full h-full hover:opacity-0"
              src="https://res.cloudinary.com/des2cvikr/image/upload/v1684831369/knekthojbz0de2kbw6gk.jpg"
            />
          </div>
          <span class="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
            39% OFF
          </span>
          <div className="absolute top-0 right-0 flex flex-col">
            <Checkbox
              // {...label}
              sx={{
                color: pink[500],
                "&.Mui-checked": {
                  color: pink[500],
                },
              }}
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite />}
            />

            <Checkbox
              // {...label}
              sx={{
                color: pink[500],
                "&.Mui-checked": {
                  color: pink[500],
                },
              }}
              icon={<CompareArrowsOutlined />}
              checkedIcon={<CompareArrows />}
            />
          </div>
        </div>
        <div
          className={`ml-auto mt-4 px-5 pb-5 w-full ${
            grid === 6 ? "w-full" : ""
          }`}
        >
          <div className="flex flex-wrap justify-between w-full">
            <div>
              <div class="w-max-full tracking-tight text-slate-900 font-semibold">
                Nike Air MX Super 2500 - Red
              </div>
            </div>
            <div class="flex items-center  flex-wrap ">
              <Rating
                value={5}
                size={`${grid === 6 ? "large" : "small"}`}
              ></Rating>
              <div class="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">
                5.0
              </div>
            </div>
          </div>
          <div class="mt-2 mb-5 flex items-center  justify-between">
            <p>
              <span class="text-3xl font-bold text-slate-900">$449</span>
              <span class="text-sm text-slate-900 line-through">$699</span>
            </p>
          </div>
          <div className="w-full ">
            {grid === 6 && (
              <p
                className=""
                dangerouslySetInnerHTML={{ __html: item?.description }}
              ></p>
            )}
            <Button variant="contained" className="bg-[#facc15] py-2">
              <ShoppingCart></ShoppingCart>
              <p className="ml-2 text-base font-medium">Add to cart</p>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
