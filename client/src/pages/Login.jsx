import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Validation from "./LoginValidation";
import axios from "axios";
//resume from 22 minutes
function Login() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(Validation(values));
    if (errors.email === "" && errors.password === "") {
      axios
        .post("http://localhost:8081/login", values)
        .then((res) => {
          console.log(res.data);
          if (res.data === "beneficiary") {
            navigate("/beneficiary-dashboard/");
          } else if (res.data === "donor") {
            navigate("/donor-dashboard/");
          } else if (res.data === "store") {
            navigate("/store-dashboard/");
          } else if (res.data === "charity") {
            navigate("/charityorg-dashboard/");
          } else {
            alert("Wrong email or password");
          }
        })
        .catch((err) => console.log(err));
    }
  };
  const handleInput = (event) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: [event.target.value],
    }));
  };
  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{ backgroundColor: "#13131A" }}
    >
      <div
        className="p-3 rounded-[15px] w-25"
        style={{ backgroundColor: "#1C1C24" }}
      >
        <h2
          style={{ color: "#4ACD8D" }}
          className="m-2  text-center text-[#4ACD8D] text-[20px] font-bold"
        >
          Sign In
        </h2>

        <form action="" onSubmit={handleSubmit}>
          <div className="m-3">
            <label style={{ color: "white" }} htmlFor="email">
              Email
            </label>
            <input
              type="email"
              style={{ backgroundColor: "#13131A", color: "white" }}
              onChange={handleInput}
              placeholder="Enter Email"
              name="email"
              className="form-control rounded-[10px]"
            ></input>
            {errors.email && (
              <span className="text-danger">{errors.email}</span>
            )}
          </div>
          <div className="m-3">
            <label style={{ color: "white" }} htmlFor="password">
              Password
            </label>
            <input
              type="password"
              style={{ backgroundColor: "#13131A", color: "white" }}
              onChange={handleInput}
              placeholder="Enter Password"
              name="password"
              className="form-control rounded-[10px]"
            ></input>
            {errors.password && (
              <span className="text-danger">{errors.password}</span>
            )}
          </div>
          <div className="flex justify-center items-center">
            <button
              type="submit"
              className="btn btn-success w-3/5 rounded-[10px] rounded-pill"
              style={{ backgroundColor: "#37c882" }}
            >
              Log In
            </button>
          </div>
          <p style={{ color: "white" }} className="m-2 text-center">
            Don't have an account?
          </p>
          <div className="flex justify-center items-center">
          <Link
            to="/signup"
          >
            <button
              type="button"
              className="btn btn-success w-44 rounded-[10px] text-[#37c882] rounded-pill hover:text-white hover:no-underline"
              style={{ backgroundColor: "#13131A" }}
            >
              Create Account
            </button>
          </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
