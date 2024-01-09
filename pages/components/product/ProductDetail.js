import { Button, IconButton, Rating } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Color from "./Color";
import { useState } from "react";
import {
  AddShoppingCart,
  BalanceOutlined,
  Compare,
  CompareArrowsOutlined,
  ExpandLess,
  ExpandMore,
  Favorite,
  FavoriteBorder,
  FavoriteOutlined,
  LocalShipping,
  LocalShippingOutlined,
  Remove,
  Share,
  StraightOutlined,
  StraightenOutlined,
} from "@mui/icons-material";
import { BreadCrumb } from "./BreadCrumb";
import { Description } from "./Description";
import { Review } from "./Review";
import SwiperProduct from "./SwiperProduct";
// import { Rating } from "@mui/material";

const dataColor = [{ title: "white" }, { title: "blue" }];

export default function ProductDetail() {
  const [color, setColor] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const handleOption = (e) => {
    e.target.parentElement.querySelector(".down")?.classList.toggle("hidden");
    e.target.parentElement.querySelector(".up")?.classList.toggle("hidden");

    e.target.parentElement.parentElement
      .querySelector(".product-data")
      ?.classList.toggle("hidden");
  };

  return (
    <div>
      <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-2  lg:mx-[4rem] shadow-2xl bg-white px-[2rem]">
        {/* ======================BreadCumd========== */}
        <div className="w-full h-full lg:col-span-2 border-2">
          <BreadCrumb></BreadCrumb>
        </div>
        {/* =========================ProductImage================ */}
        <div className="w-full h-full ">
          <div className=" p-5 pb-20 h-[60%]">
            <SwiperProduct></SwiperProduct>
          </div>
        </div>
        {/* ========================Product detail===================== */}
        <div className="px-2 w-full h-full  grid grid-cols-3  grid-flow-row auto-rows-max">
          <div className="col-span-3 ">
            <h1 className="font-semibold text-2xl  border-b-2">
              Bàn phím cơ Razer BlackWidow V3 Tenkeyless
            </h1>
            <div className="blox font-semibold text-xl pt-2">
              <span>369$</span>
            </div>
            <div className="flex gap-5">
              <Rating value={5}></Rating>
              <div className="font-semibold">Based on 0 Reviews</div>
            </div>
          </div>
          {/* ==============Category================ */}
          <div className="col-span-2 flex flex-col gap-y-2 mt-5">
            <div className="flex gap-4">
              <div className="font-semibold">Brand:</div>
              <div className="font-semibolđ opacity-90 text-yellow-600 font-mono">
                MSI
              </div>
            </div>

            <div className="flex gap-4">
              <div className="font-semibold">Category:</div>
              <div className="font-semibolđ opacity-90 text-yellow-600 font-mono">
                MSI
              </div>
            </div>

            <div className="flex gap-4">
              <div className="font-semibold">Tag:</div>
              <div className="font-semibolđ opacity-90 text-yellow-600  font-mono">
                MSI
              </div>
            </div>

            <div className="flex gap-4">
              <div className="font-semibold">Availablity :</div>
              <div className="font-semibolđ opacity-90 text-yellow-600  font-mono">
                MSI
              </div>
            </div>

            <div className="flex gap-4">
              <div className="font-semibold">Color :</div>
              <Color setColor={setColor} data={dataColor} />
            </div>
          </div>
          {/* =============Quantity===================== */}
          <div className="col-span-3 grid lg:grid-cols-3 sm:grid-cols-1">
            <div className="flex ">
              <div className="place-self-center font-semibold">Quantity:</div>

              <IconButton
                onClick={() => setQuantity(quantity - 1)}
                disabled={quantity < 1}
                aria-label="delete"
                size="large"
              >
                <Remove />
              </IconButton>
              <div className="place-self-center">{quantity}</div>
              <IconButton
                onClick={() => setQuantity(quantity + 1)}
                aria-label="delete"
                size="large"
              >
                <AddIcon />
              </IconButton>
            </div>
          </div>
          <div className="col-span-3 ">
            <div className="col-span-2 grid grid-flow-col auto-cols-max gap-8">
              <Button
                className="bg-gray-500 hover:bg-red-500"
                variant="contained"
                size="large"
              >
                <AddShoppingCart />
                <div className="font-semibold">ADD TO CART </div>
              </Button>
              <Button
                className="bg-[#febd69] hover:bg-[#febd69]"
                variant="contained"
                size="large"
              >
                <div className="font-semibold">BUY IT NOW </div>
              </Button>
            </div>
          </div>
          <div className="col-span-3 grid grid-flow-col auto-cols-max gap-x-20 mt-2 bt-2">
            <IconButton
              variant="contained"
              className=" font-medium text-base  text-gray-700"
              sx={{
                "&:hover": {
                  color: "red",
                  bgcolor: "white",
                },
              }}
            >
              <CompareArrowsOutlined></CompareArrowsOutlined>
              <div className="">Add to compare </div>
            </IconButton>
            <IconButton
              className="font-medium text-base text-gray-700"
              variant="contained"
              sx={{
                "&:hover": {
                  color: "red",
                  bgcolor: "white",
                },
              }}
            >
              <Favorite></Favorite>
              <div className="font-medium">Add to wishlist</div>
            </IconButton>
          </div>

          <div className="col-span-3">
            <div className="flex  flex-col ">
              <div
                className="flex items-center cursor-pointer border-b-2"
                onClick={handleOption}
              >
                <LocalShippingOutlined className="fs-5 me-2 " />
                <p className="text-medium font-semibold font-sans mr-[auto]">
                  Shipping & Returns
                </p>
                <ExpandLess className=" hidden down" />
                <ExpandMore className="  up block" />
              </div>
              <p className=" product-data hidden  ">
                Free shipping and returns available on all orders! <br />
                We ship all US domestic orders within
                <b> 5-10 business days!</b>
              </p>
            </div>
          </div>

          <div className="col-span-3 mt-4">
            <div className="flex  flex-col ">
              <div
                className="flex items-center cursor-pointer border-b-2"
                onClick={handleOption}
              >
                <FavoriteBorder className="fs-5 me-2 " />
                <p className="text-medium font-semibold font-sans mr-[auto]">
                  Add to wishlist
                </p>
                <ExpandLess className=" hidden down" />
                <ExpandMore className="  up block" />
              </div>
              <p className=" product-data hidden  ">
                Free shipping and returns available on all orders! <br />
                We ship all US domestic orders within
                <b> 5-10 business days!</b>
              </p>
            </div>
          </div>

          <div className="col-span-3 mt-4">
            <div className="flex  flex-col ">
              <div
                className="flex items-center cursor-pointer border-b-2"
                onClick={handleOption}
              >
                <StraightenOutlined className="fs-5 me-2 " />
                <p className="text-medium font-semibold font-sans mr-[auto]">
                  Dimension
                </p>
                <ExpandLess className=" hidden down" />
                <ExpandMore className="  up block" />
              </div>
              <p className=" product-data hidden  ">
                Free shipping and returns available on all orders! <br />
                We ship all US domestic orders within
                <b> 5-10 business days!</b>
              </p>
            </div>
          </div>

          <div className="col-span-3 mt-4">
            <div
              className="flex cursor-pointer"
              onClick={() => {
                navigator.clipboard.writeText(window.location.href);
              }}
            >
              <Share className=" me-2 " />
              <p className="text-medium font-semibold font-sans mr-[auto]">
                Share
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ===================PRoduct description========================= */}
      <div>
        <Description></Description>
      </div>

      {/* =====================Product Review=========================== */}
      <div>
        <Review></Review>
      </div>
    </div>
  );
}
