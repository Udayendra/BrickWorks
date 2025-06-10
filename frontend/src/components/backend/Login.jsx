import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
import { toast } from "react-toastify";
import { Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "./context/Auth";
import Loading from "./Loading";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    try {
      setLoading(true);

      // const res = await fetch("http://127.0.0.1:8000/api/authenticate", {
      const res = await fetch("https://brickworksbackend.infinityfreeapp.com/api/authenticate", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const result = await res.json();
      // console.log(result);
      if (result.status === false) {
        toast.error(result.message);
        // setLoading(false);
      } else {
        // setLoading(false);
        const userInfo = {
          id: result.id,
          token: result.token,
        };

        localStorage.setItem("userInfo", JSON.stringify(userInfo));
        login(userInfo);
        navigate("/admin/dashboard");
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="commonContainer">
        <div className="bg-white mt-20 h-[85vh] flex flex-col items-center justify-center ">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="max-w-xl mx-auto pt-5 pb-8 px-10  rounded-xl border border-gray-300 w-full"
          >
            <h1 className="font-semibold text-highlightColor text-2xl mb-6 text-center">
              Admin Login
            </h1>
            <div className="mb-5">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-textColor"
              >
                Your email
              </label>
              <input
                {...register("email")}
                required
                type="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-textColor text-sm rounded-lg block w-full p-2.5"
                placeholder="Enter Email"
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Your password
              </label>
              <input
                {...register("password")}
                required
                type="password"
                id="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              />
            </div>
            <div className="flex items-center">
              <button
                disabled={loading}
                type="submit"
                className="inline-flex items-center justify-center text-white mr-2 bg-highlightColor hover:bg-highlightColor/80  focus:outline-none font-medium rounded-lg text-sm w-auto sm:w-auto px-5 py-2.5 text-center transition-all duration-300"
              >
                Login
                {loading ? (
                  <Loading className="border-2 border-white h-[20px] w-[20px]" />
                ) : (
                  ""
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
