import React, { useState } from "react";
import ProductCard from "./ProductCard";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import {
  IconButton,
  Input,
  Pagination,
  TableRow,
  TextField,
} from "@mui/material";
import { TableRows, ViewModule } from "@mui/icons-material";

import { createTheme } from "@mui/material/styles";
import { purple, lime, red } from "@mui/material/colors";
import Color from "../product/Color";

const categories = [
  { title: "phone" },
  { title: "computer" },
  { title: "laptop" },
  { title: "phone" },
  { title: "computer" },
  { title: "laptop" },
  { title: "phone" },
  { title: "computer" },
  { title: "laptop" },
];

const colors = [
  { title: "red" },
  { title: "blue" },
  { title: "white" },
  { title: "yellow" },
  { title: "black" },
  { title: "green" },
  { title: "orange" },
  { title: "brown" },
  { title: "gray" },
];

const brands = [{ title: "iphone" }, { title: "samsung" }, { title: "oppo" }];

const ProductFilter = () => {
  const [sort, setSort] = useState();
  const [category, setCategory] = useState([]);
  const [color, setColor] = useState(null);
  const [brand, setBrand] = useState([]);
  const [minPrice, setMinPrice] = useState(null);
  const [maxPrice, setMaxPrice] = useState(null);
  const [grid, setGrid] = useState(12);

  function handleChangeLayout(e) {
    e.target.parentElement.parentElement.parentElement
      .querySelector(".line-layout")
      ?.classList.toggle("bg-gray-300");

    e.target.parentElement.parentElement.parentElement
      .querySelector(".row-layout")
      ?.classList.toggle("bg-gray-300");
  }
  return (
    <div>
      <div className="grid  lg:grid-cols-4 gap-2  lg:mx-[4rem] shadow-2xl bg-white px-[2rem] ">
        {/* ==============Product Filter========================= */}
        <div className="col-span-1 mt-4">
          {/* =============Filter by category====================== */}
          <div className="flex flex-col justify-center border-2 px-4 rounded-lg">
            <div className="text-2xl font-bold  mr-4 ">Shop by categories</div>
            <div className="flex flex-row py-4">
              <div>
                <ul className="ps-0 mb-0 flex flex-wrap gap-2">
                  {categories &&
                    [...new Set(categories)].map((item, index) => {
                      return (
                        <li
                          key={item && item["_id"]}
                          className="border-2 bg-yellow-400 text-base font-semibold px-2 rounded-md cursor-pointer "
                          onClick={() => setCategory(item.title)}
                        >
                          {item.title}
                        </li>
                      );
                    })}
                </ul>
              </div>
            </div>
          </div>

          {/* =============Filter by Color and price====================== */}

          <div className="flex flex-col justify-center border-2 rounded-xl p-2 mt-4">
            <div className="text-2xl font-bold mr-4 ">Filter By</div>
            <div className="mt-2">
              <div className="text-xl text-gray-500 font-semibold"> Price:</div>
              <div className="flex items-center">
                <span className="pr-2 text-xl font-semibold">$</span>
                <TextField
                  onChange={() => setMinPrice(e.target.value)}
                  label={"From"}
                  id="margin-none"
                />
                <span className="px-2 text-xl font-semibold">$</span>
                <TextField
                  onChange={() => setMaxPrice(e.target.value)}
                  label={"To"}
                  id="margin-none"
                />
              </div>
            </div>
            <div>
              <div className="text-xl text-gray-500 font-semibold mt-4">
                {" "}
                Colors
              </div>
              <Color data={colors} setColor={setColor}></Color>
            </div>
          </div>

          {/* =====================Filter by Brand======================= */}
          <div className="flex flex-col justify-center border-2 px-4 rounded-lg mt-4">
            <div className="text-2xl font-bold  mr-4 ">Brand</div>
            <div className="flex flex-row py-4">
              <div>
                <ul className="ps-0 mb-0 flex flex-wrap gap-2">
                  {categories &&
                    [...new Set(brands)].map((item, index) => {
                      return (
                        <li
                          key={item && item["_id"]}
                          className="border-2 bg-yellow-400 text-base font-semibold px-2 rounded-md cursor-pointer "
                          onClick={() => setCategory(item.title)}
                        >
                          {item.title}
                        </li>
                      );
                    })}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* ===================Product List ============================== */}
        <div className="col-span-3">
          <div className="col-span-3 mb-4">
            <div className="flex items-center ">
              <p className="text-base font-semibold mr-4">Sort By:</p>
              <div>
                <select
                  className="text-lg font-medium  border-2 px-4 rounded-xl"
                  onChange={(e) => {
                    setSort(e.target.value);
                  }}
                >
                  <option value="title">Alphabetically, A-Z</option>
                  <option value="-title">Alphabetically, Z-A</option>
                  <option value="price">Price, low to high</option>
                  <option value="-price">Price, high to low</option>
                  <option value="createdAt">Date, old to new</option>
                  <option value="-createdAt">Date, new to old</option>
                </select>
              </div>

              <div className="ml-[auto]">
                <IconButton
                  className="line-layout w-[3rem] h-[3rem]  rounded-md hover:bg-gray-300 bg-gray-300"
                  onClick={(e) => {
                    handleChangeLayout(e);
                    setGrid(12);
                  }}
                >
                  <ViewModule></ViewModule>
                </IconButton>
                <IconButton
                  className="row-layout w-[3rem] h-[3rem]  rounded-md hover:bg-gray-300"
                  onClick={(e) => {
                    handleChangeLayout(e);
                    setGrid(6);
                  }}
                >
                  <TableRows></TableRows>
                </IconButton>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-4">
            {[1, 1, 1, 1, 1, 1].map((item, index) => (
              <div
                key={index}
                className={`${grid === 6 ? "col-span-4" : "col-span-1"}  `}
              >
                <ProductCard grid={grid}></ProductCard>
              </div>
            ))}
          </div>
          {/* =================Pagination======================= */}
          <div className="col-span-3">
            <div className="w-full m-auto py-8 flex justify-center ">
              <Pagination
                count={10}
                defaultPage={5}
                variant="outlined"
                shape="rounded"
                size="large"
                sx={{
                  "& .MuiPaginationItem-root": {
                    color: "black",
                    "&.Mui-selected": {
                      backgroundColor: "black",
                      color: "#fff",
                    },
                  },
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductFilter;
