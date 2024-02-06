import { CustomTextField } from "@/components/Auth/CustomTextField";
import { addNewBrand } from "@/state/Admin/Action";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

const AddBrand = (props) => {
  const dispatch = useDispatch();

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
      props.onClose();
    }
    // Call your save function here with the brand name
    // Example: props.onSave(brand);
  };

  return (
    <div className="bg-white w-2/6 -translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 px-10 py-5 rounded-xl">
      <div>Thêm nhãn hàng mới</div>

      <div className="mt-5">
        <CustomTextField
          className="mb-4"
          label="Nhãn hàng"
          name="brand"
          value={brand}
          onChange={handleInputChange}
          fullWidth
          error={Boolean(error)}
          helperText={error}
        />
      </div>
      <div className="mt-5 flex gap-5 flex-row-reverse">
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
