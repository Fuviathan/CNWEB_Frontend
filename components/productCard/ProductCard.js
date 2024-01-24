import {
  CheckBox,
  CompareArrows,
  CompareArrowsOutlined,
  Favorite,
  FavoriteBorder,
  ShoppingCart,
} from "@mui/icons-material";
import { Button, Checkbox, Rating } from "@mui/material";
import React, { useEffect } from "react";
import { pink } from "@mui/material/colors";
import Image from "next/image";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { getSingleProduct } from "@/state/Products/Action";

const ProductCard = ({ grid, item }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  // useEffect(() => {
  //   dispatch(getSingleProduct(item._id));
  // }, []);
  return (
    <div
      onClick={(e) => {
        e.preventDefault();
        console.log(item._id);

        router.push(`product/${item._id}`);
      }}
    >
      <div
        class={`flex w-full overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md h-[25rem] ${
          grid === 6 ? " flex-row justify-start" : " flex-col"
        } `}
      >
        <div
          class={`relative mr-0 mx-3 mt-3 flex h-60 overflow-hidden rounded-xl w-max-full ${
            grid === 6 ? " w-[40%] " : " "
          } `}
        >
          <div className="w-full h-full relative">
            <img
              className=" object-contain w-full h-full  "
              src={item.images[0].url}
            />

            <img
              className="absolute top-0   object-cover w-full h-full   hover:opacity-0"
              src={item.images[1].url}
            />
          </div>
          {item.discount !== 0 && (
            <span class="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
              {item.discount}% OFF
            </span>
          )}
          <div
            onClick={(e) => e.stopPropagation()}
            className="absolute top-0 right-0 flex flex-col z-50"
          >
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
              <div
                title={item.title}
                className={`tracking-tight text-slate-900 font-semibold text-nowrap text-ellipsis overflow-hidden ${
                  grid === 6 ? "w-full " : "w-[12rem]"
                }`}
              >
                {item.title}
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
              <span class="text-3xl font-bold text-slate-900">
                ${item.price}
              </span>
              {item.discount !== 0 && (
                <span class="text-sm text-slate-900 line-through">
                  ${item.price + (item.price * item.discount) / 100}
                </span>
              )}
            </p>
          </div>
          <div className="w-full ">
            {grid === 6 && (
              <p
                className="h-[10rem]  overflow-y-scroll mb-10"
                dangerouslySetInnerHTML={{ __html: item?.description }}
              ></p>
            )}
            <Button
              variant="contained"
              className="bg-[#ede2d1] py-2 hover:bg-light-brown hover:bg-opacity-80"
              onClick={(event) => event.stopPropagation()}
            >
              <ShoppingCart className="text-black"></ShoppingCart>
              <p className="ml-2 text-base text-black font-medium font-sans ">
                Add to cart
              </p>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
