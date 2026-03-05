import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../services/api";

const ForgetPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("/auth/forget-password", { email });
      toast.success(response.data.message);
      setError(null);
      navigate("/login");
    } catch (error) {
      setError(error.response.data.message);
      toast.error(error.response.data.message);
    }
    setEmail("");
  };

  return (
    <div className="container mx-auto mt-8">
      <form className="max-w-md mx-auto p-8 shadow-md border-t-4 border-amber-400 rounded">
        <h2 className="text-2xl mb-5 font-bold text-gray-500">
          Forget Password
        </h2>
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

        <button
          className="w-full bg-amber-400 text-white p-3 rounded-xl mb-3 cursor-pointer"
          type="submit"
          onClick={handleSubmit}
        >
          Submit
        </button>

        <div className=" text-gray-500 ">
          Password Remembered ?{" "}
          <a href="/login" className="text-amber-400">
            Login
          </a>
        </div>
      </form>
    </div>
  );
};

export default ForgetPassword;
