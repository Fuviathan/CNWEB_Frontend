import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Link from "next/link";
import { CustomTextField } from "./CustomTextField";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { login } from "@/state/Auth/Action";

const FormLogin = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const auth = useSelector((store) => store.auth);
  console.log(auth);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState({
    email: "",
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
      newErrors.email = "email is required";
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
    dispatch(login(formData));
    console.log("Đăng nhập với:", formData);
  };

  return (
    <div className="w-full py-[5rem]">
      <div className="w-2/5 p-4 m-auto bg-white rounded-2xl">
        <p className="mb-5 text-2xl font-bold text-center text-orange-gray text">
          Login
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
            <p className="text-base text-orange-gray hover:opacity-80">
              Forgot password?
            </p>
          </Link>
          <div className="flex justify-center gap-5 mt-4 ">
            <Button
              className="text-base font-semibold bg-light-brown text-orange-gray rounded-2xl hover:bg-light-brown hover:bg-opacity-80"
              type="submit"
              variant="contained"
              onClick={handleSubmit}
              size="large"
            >
              Login
            </Button>

            <Button
              className="text-base font-semibold bg-light-brown text-orange-gray rounded-2xl hover:bg-light-brown hover:bg-opacity-80"
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
