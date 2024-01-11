import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Link from "next/link";
import { CustomTextField } from "./CustomTextField";
import { useRouter } from "next/router";

const FormRegister = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    firstname: "",
    lastname: "",
    phone: "",
    password: "",
  });
  const [error, setError] = useState({
    email: "",
    firstname: "",
    lastname: "",
    phone: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (formData.email.trim() === "") {
      newErrors.email = "Email is required";
    }

    if (formData.password.trim() === "") {
      newErrors.password = "Password is required";
    }

    if (formData.firstname.trim() === "") {
      newErrors.firstname = "First Name is required";
    }

    if (formData.lastname.trim() === "") {
      newErrors.lastname = "Last Name is required";
    }

    if (formData.phone.trim() === "") {
      newErrors.phone = "Phone Number is required";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = validateForm();

    if (Object.keys(newErrors).length > 0) {
      setError(newErrors);
      return;
    }

    setError({});

    console.log("Đăng nhập với:", formData);
  };

  return (
    <div className="bg-gray-200 py-[5rem]">
      <div className="w-[30rem]  m-auto border-2 rounded-2xl py-4 shadow-xl bg-white">
        <p className="text-2xl font-bold text-center text mb-5 text-gray-500">
          Sign up
        </p>
        <form className="px-4">
          <CustomTextField
            className="mb-4"
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            fullWidth
            error={Boolean(error.email)}
            helperText={error.email}
          />

          <CustomTextField
            className="mb-4"
            label="First Name"
            name="firstname"
            value={formData.firstname}
            onChange={handleInputChange}
            fullWidth
            error={Boolean(error.firstname)}
            helperText={error.firstname}
          />

          <CustomTextField
            className="mb-4"
            label="Last Name"
            name="lastname"
            value={formData.lastname}
            onChange={handleInputChange}
            fullWidth
            error={Boolean(error.lastname)}
            helperText={error.lastname}
          />

          <CustomTextField
            className=""
            label="Mobile Number"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            fullWidth
            error={Boolean(error.phone)}
            helperText={error.phone}
          />

          <CustomTextField
            className="mb-4"
            label="Password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
            error={Boolean(error.password)}
            helperText={error.password}
          />

          <div className=" flex justify-center gap-5 mt-4">
            <Button
              className="text-base rounded-2xl font-semibold bg-black hover:bg-yellow-400"
              type="submit"
              variant="contained"
              onClick={(e) => {
                e.preventDefault();
                router.push("/login");
              }}
              size="large"
            >
              Login
            </Button>

            <Button
              className=" rounded-2xl text-base font-semibold bg-yellow-400 hover:bg-black"
              type="submit"
              variant="contained"
              color="primary"
              size="large"
              onClick={handleSubmit}
            >
              Sign up
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormRegister;
