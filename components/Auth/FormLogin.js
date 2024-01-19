import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Link from "next/link";
import { CustomTextField } from "./CustomTextField";
import { useRouter } from "next/router";

const FormLogin = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState({
    username: "",
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

    if (formData.username.trim() === "") {
      newErrors.username = "Username is required";
    }

    if (formData.password.trim() === "") {
      newErrors.password = "Password is required";
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
    <div className="w-full py-[5rem]">
      <div className="w-2/5 p-4 m-auto bg-white border-2 shadow-xl rounded-2xl">
        <p className="mb-5 text-2xl font-bold text-center text-orange-gray text">
          Login
        </p>
        <form className="px-4">
          <CustomTextField
            className="mb-4"
            label="Username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            fullWidth
            error={Boolean(error.username)}
            helperText={error.username}
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
          <Link href={"#"}>
            <p className="text-base text-gray-500">Forgot password?</p>
          </Link>
          <div className="flex justify-center gap-5 mt-4 ">
            <Button
              className="text-base font-semibold bg-black rounded-2xl hover:bg-yellow-400"
              type="submit"
              variant="contained"
              onClick={handleSubmit}
              size="large"
            >
              Login
            </Button>

            <Button
              className="text-base font-semibold bg-yellow-400 rounded-2xl hover:bg-black"
              type="submit"
              variant="contained"
              color="primary"
              size="large"
              onClick={(e) => {
                e.preventDefault();
                router.push("/signup");
              }}
            >
              Sign up
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormLogin;