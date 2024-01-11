import {
  CheckBox,
  CompareArrows,
  CompareArrowsOutlined,
  Favorite,
  FavoriteBorder,
} from "@mui/icons-material";
import { Checkbox, Rating } from "@mui/material";
import React from "react";
import { pink } from "@mui/material/colors";

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
        class={`flex w-full overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md  ${
          grid === 6 ? " flex-row justify-start" : " flex-col"
        } `}
      >
        <div
          class={`relative block mr-0 mx-3 mt-3 flex h-60 overflow-hidden rounded-xl w-max-full ${
            grid === 6 ? " w-[40%] " : " "
          } `}
        >
          <div className="w-full h-full ">
            <img
              className="w-full h-full object-contain "
              src="http://res.cloudinary.com/des2cvikr/image/upload/v1684594653/rdlwx7vepfuyzntrrnab.jpg"
            />

            <img
              className="w-full h-full object-contain absolute top-0 hover:opacity-0"
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
          className={`ml-auto mt-4 px-5 pb-5 ${grid === 6 ? "w-[60%]" : ""}`}
        >
          <a href="#">
            <h5 class="text-xl tracking-tight text-slate-900 font-semibold">
              Nike Air MX Super 2500 - Red
            </h5>
          </a>
          <div class="mt-2 mb-5 flex items-center justify-between">
            <p>
              <span class="text-3xl font-bold text-slate-900">$449</span>
              <span class="text-sm text-slate-900 line-through">$699</span>
            </p>
            <div class="flex items-center">
              <Rating
                value={5}
                size={`${grid === 6 ? "large" : "small"}`}
              ></Rating>
              <div class="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">
                5.0
              </div>
            </div>
          </div>
          <div>
            {grid === 6 && (
              <p
                className=""
                dangerouslySetInnerHTML={{ __html: item?.description }}
              ></p>
            )}
            <button
              href="#"
              className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300 "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="mr-2 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
