import React, { useEffect, useState } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import {
  getProductByBrand,
  getProductByCategory,
  getProductByColor,
  getProductByFilter,
  getProducts,
} from "@/state/Products/Action";
import { useRouter } from "next/router";
import { CustomTextField } from "../Auth/CustomTextField";

const ProductFilter = () => {
  const router = useRouter();

  const [sort, setSort] = useState("title");
  const [tag, setTag] = useState(null);
  const [category, setCategory] = useState(null);
  const [color, setColor] = useState(null);
  const [brand, setBrand] = useState(null);
  const [minPrice, setMinPrice] = useState(null);
  const [maxPrice, setMaxPrice] = useState(null);
  const [grid, setGrid] = useState(12);

  //============SET LAYOUT
  function handleChangeLayout(e) {
    e.target.parentElement.parentElement.parentElement
      .querySelector(".line-layout")
      ?.classList.toggle("bg-gray-300");

    e.target.parentElement.parentElement.parentElement
      .querySelector(".row-layout")
      ?.classList.toggle("bg-gray-300");
  }

  const dispatch = useDispatch();
  const products = useSelector((store) => store?.product?.products);
  const colors = useSelector((store) => store?.product?.color);
  const brands = useSelector((store) => store?.product?.brand);
  const categories = useSelector((store) => store?.product?.category);

  useEffect(() => {
    dispatch(getProducts());
    dispatch(getProductByBrand());
    dispatch(getProductByColor());
    dispatch(getProductByCategory());
  }, []);

  // ================SET PERPAGE
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(12);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products?.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const pageCount = Math.ceil(products?.length / productsPerPage);

  const handleChangePage = (event, value) => {
    setCurrentPage(value);
  };

  // =============== GET DATA FOR CATEGORY===========
  useEffect(() => {});

  // ================ GET DATA FILTER ============
  useEffect(() => {
    dispatch(
      getProductByFilter({
        sort,
        tag,
        brand,
        category,
        minPrice,
        maxPrice,
        color,
      })
    );
  }, [sort, tag, brand, category, minPrice, maxPrice, color]);
  return (
    <div>
      <div className="grid lg:grid-cols-4 gap-10 lg:mx-[6rem] shadow-2xl bg-white px-[2rem] ">
        {/* ==============Product Filter========================= */}
        <div className="col-span-1 mt-4">
          {/* =============Filter by category====================== */}
          <div className="flex flex-col justify-center px-4 border-2 rounded-lg">
            <div className="mr-4 text-2xl font-bold ">Shop by categories</div>
            <div className="flex flex-row py-4">
              <div>
                <ul className="flex flex-wrap gap-2 mb-0 ps-0">
                  {categories &&
                    [...new Set(categories)].map((item, index) => {
                      return (
                        <button
                          key={item && item["_id"] && index}
                          className={`px-2 text-base font-semibold bg-[#ede2d1] border-2 rounded-md cursor-pointer ${
                            item.title === category
                              ? "border-yellow-700 border-opacity-40"
                              : ""
                          } `}
                          onClick={() =>
                            setCategory(
                              category === item.title ? "" : item.title
                            )
                          }
                        >
                          {item.title}
                        </button>
                      );
                    })}
                </ul>
              </div>
            </div>
          </div>

          {/* =============Filter by Color and price====================== */}

          <div className="flex flex-col justify-center p-2 mt-4 border-2 rounded-xl">
            <div className="mr-4 text-2xl font-bold ">Filter By</div>
            <div className="mt-2">
              <div className="text-xl font-semibold text-gray-500"> Price:</div>
              <div className="flex items-center">
                <span className="pr-2 text-xl font-semibold">$</span>
                <CustomTextField
                  onChange={(e) => setMinPrice(e.target.value)}
                  label={"From"}
                  id="margin-none"
                />
                <span className="px-2 text-xl font-semibold">$</span>
                <CustomTextField
                  onChange={(e) => setMaxPrice(e.target.value)}
                  label={"To"}
                  id="margin-none"
                />
              </div>
            </div>
            <div>
              <div className="mt-4 text-xl font-semibold text-gray-500">
                Colors
              </div>
              <Color data={colors} color={color} setColor={setColor}></Color>
            </div>
          </div>

          {/* =====================Filter by Brand======================= */}
          <div className="flex flex-col justify-center px-4 mt-4 border-2 rounded-lg">
            <div className="mr-4 text-2xl font-bold ">Brand</div>
            <div className="flex flex-row py-4">
              <div>
                <ul className="flex flex-wrap gap-2 mb-0 ps-0">
                  {categories &&
                    [...new Set(brands)].map((item, index) => {
                      return (
                        <button
                          key={item && item["_id"]}
                          className={`px-2 text-base font-semibold bg-[#ede2d1] border-2 rounded-md cursor-pointer ${
                            brand === item.title
                              ? "border-yellow-700 border-opacity-40"
                              : ""
                          }`}
                          onClick={() =>
                            setBrand(brand === item.title ? "" : item.title)
                          }
                        >
                          {item.title}
                        </button>
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
              <p className="mr-4 text-base font-semibold">Sort By:</p>
              <div>
                <select
                  className="px-4 text-lg font-medium border-2 rounded-xl"
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
                    setProductsPerPage(12);
                  }}
                >
                  <ViewModule></ViewModule>
                </IconButton>
                <IconButton
                  className="row-layout w-[3rem] h-[3rem]  rounded-md hover:bg-gray-300"
                  onClick={(e) => {
                    handleChangeLayout(e);
                    setGrid(6);
                    setProductsPerPage(6);
                  }}
                >
                  <TableRows></TableRows>
                </IconButton>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-10">
            {currentProducts.map((item, index) => (
              <div
                key={index}
                className={`${grid === 6 ? "col-span-5" : "col-span-1"}  `}
              >
                <ProductCard key={index} grid={grid} item={item}></ProductCard>
              </div>
            ))}
          </div>
          {/* =================Pagination======================= */}
          <div className="col-span-3">
            <div className="flex justify-center w-full py-8 m-auto ">
              <Pagination
                count={pageCount}
                page={currentPage}
                onChange={handleChangePage}
                variant="outlined"
                shape="rounded"
                size="large"
                sx={{
                  "& .MuiPaginationItem-root": {
                    color: "black",
                    "&.Mui-selected": {
                      backgroundColor: "#ede2d1",
                      color: "black",
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
