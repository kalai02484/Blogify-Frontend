import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../services/api";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("/auth/login", { email, password });
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("role", response.data.role);
      toast.success(response.data.message);
      setError(null);
      navigate("/");
    } catch (error) {
      setError(error.response.data.message);
      toast.error(error.response.data.message);
    }
    setEmail("");
    setPassword("");
  };
  return (
    <div className="container mx-auto mt-8">
      <form className="max-w-md mx-auto p-8 shadow-md border-t-4 border-amber-400 rounded">
        <h2 className="text-2xl mb-5 font-bold text-gray-500">Sign In</h2>
        <hr className="text-gray-300 mb-5" />
        {error && (
          <div className="bg-red-100 p-3 mb-4 text-red-700 rounded">
            {error}
          </div>
        )}

        <label className="block mb-2 text-gray-500 " htmlFor="name">
          Email
        </label>
        <input
          className="w-full border-gray-200 p-3 border-2 rounded-xl focus:outline-amber-300 mb-4"
          type="email"
          name="email"
          id="email"
          placeholder="Enter Your Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label className="block mb-2 text-gray-500 " htmlFor="name">
          Password
        </label>
        <div className="relative flex">
          <input
            className="w-full mr-5 border-gray-200 p-3 border-2 rounded-xl focus:outline-amber-300 mb-3"
            type={showPassword ? "text" : "password"}
            name="password"
            id="password"
            placeholder="Enter Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="bg-amber-400 text-white p-3 rounded-xl mb-3 w-24"
            type="button"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>
        <div className="mb-4 text-gray-500 ">
          Forget Password?{" "}
          <a href="/forget-password" className="text-amber-400">
            Click Here
          </a>
        </div>

        <button
          className="w-full bg-amber-400 text-white p-3 rounded-xl mb-3 cursor-pointer"
          type="submit"
          onClick={handleSubmit}
        >
          Login
        </button>
        <div className=" text-gray-500 ">
          New User? Please{" "}
          <a href="/register" className="text-amber-400">
            Sign Up
          </a>
        </div>
      </form>
    </div>
  );
};

export default Login;
