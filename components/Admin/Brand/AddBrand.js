import { CustomTextField } from "@/components/Auth/CustomTextField";
import { addNewBrand } from "@/state/Admin/Action";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";

const AddBrand = (props) => {
  const dispatch = useDispatch();
  const router = useRouter()
  const [brand, setBrand] = useState("");
  const [error, setError] = useState("");

  const handleInputChange = (event) => {
    setBrand(event.target.value);
    setError(""); // Clear previous error when user starts typing
  };

  const handleSave = () => {
    if (!brand.trim()) {
      setError("Vui lòng nhập tên nhãn hàng.");
      return;
    } else {
      dispatch(addNewBrand({ title: brand }));  
     }
    // Call your save function here with the brand name
    // Example: props.onSave(brand);
  };

  return (
    <div className="absolute w-2/6 px-10 py-5 mt-4 -translate-x-1/2 -translate-y-1/2 bg-white top-1/2 left-1/2 rounded-xl">
      <div className="font-semibold tracking-wide">Thêm nhãn hàng mới</div>

      <div className="mt-5">
        <CustomTextField
          className="mb-4"
          label="Tên nhãn hàng"
          name="brand"
          value={brand}
          onChange={handleInputChange}
          fullWidth
          error={Boolean(error)}
          helperText={error}
        />
      </div>
      <div className="flex flex-row-reverse gap-5 mt-5">
        <button
          className="p-2 px-6 bg-brown-green rounded-2xl"
          onClick={handleSave}
        >
          Lưu
        </button>
        <button
          onClick={props.onClose}
          className="p-2 px-6 bg-brown-green rounded-2xl"
        >
          Hủy
        </button>
      </div>
    </div>
  );
};

export default AddBrand;
