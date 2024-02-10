import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Link from "next/link";
import { CustomTextField } from "./CustomTextField";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { register } from "@/state/Auth/Action";

const FormRegister = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const auth = useSelector((store) => store?.auth);

  const [formData, setFormData] = useState({
    email: "",
    firstname: "",
    lastname: "",
    mobile: "",
    password: "",
  });
  const [error, setError] = useState({
    email: "",
    firstname: "",
    lastname: "",
    mobile: "",
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

    if (formData.mobile.trim() === "") {
      newErrors.mobile = "Phone Number is required";
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

    dispatch(register(formData));
    console.log("Đăng nhập với:", formData);
  };
  useEffect(() => {
    console.log(auth);
  }, [auth]);

  return (
    <div className="py-[5rem]">
      <div className="w-2/5 py-4 m-auto bg-white">
        <p className="mb-5 text-2xl font-bold text-center text-orange-gray">
          Đăng ký
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
            name="mobile"
            value={formData.mobile}
            onChange={handleInputChange}
            fullWidth
            error={Boolean(error.mobile)}
            helperText={error.mobile}
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

          <div className="flex justify-center gap-5 mt-4 ">
            <Button
              className="text-base font-semibold bg-light-brown text-orange-gray rounded-2xl hover:bg-light-brown hover:bg-opacity-80"
              type="submit"
              variant="contained"
              onClick={(e) => {
                e.preventDefault();
                router.push("/login");
              }}
              size="large"
            >
              Đăng nhập
            </Button>

            <Button
              className="text-base font-semibold bg-light-brown text-orange-gray rounded-2xl hover:bg-light-brown hover:bg-opacity-80"
              type="submit"
              variant="contained"
              color="primary"
              size="large"
              onClick={handleSubmit}
            >
              Đăng ký
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormRegister;
