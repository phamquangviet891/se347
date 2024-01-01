import React, { useState } from "react";
import bg_login from "../assets/pictures/bg-login.png";
import gg_icon from "../assets/pictures/gg-icon.png";
import logo from "../assets/pictures/logo.png";
import { postRegisterUser } from "../services/UserServices";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const Register = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [account, setAccount] = useState({
    userName: null,
    email: null,
    phoneNo: null,
    password: null,
    confirmPassword: null,
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !account.email ||
      !account.email ||
      !account.phoneNo ||
      !account.password ||
      !account.confirmPassword
    ) {
      setError("All is require!");
      toast.error("All is require!");
      return null;
    }

    if (account.confirmPassword !== account.password) {
      setError("Confirm password not correct");
      toast.error("Confirm password not correct");
      return null;
    }

    let userName = account.userName;
    let email = account.email;
    let phoneNo = account.phoneNo;
    let password = account.password;

    await postRegisterUser(userName, email, phoneNo, password)
      .then(() => {
        return navigate("/login");
      })
      .catch((err) => {
        let mess = err.response.data.message;
        setError(mess);
        toast.error(mess);
      });
  };

  return (
    <div className="flex h-screen select-none">      
      <div
        style={{ backgroundImage: `url(${bg_login})` }}
        className="w-1/2 h-full flex items-center justify-center bg-auto bg-no-repeat bg-center"
      >
        <img
          onClick={() => handleSubmit()}
          src={logo}
          alt=""
          className=" h-36 cursor-pointer"
        />
      </div>
      <div className="w-1/2 h-full overflow-hidden flex flex-col items-center justify-center">
        <h1 className="text-5xl text-main-color font-semibold ">Sign Up</h1>
        <div className=" mt-8">
          <form
            action="/register"
            onSubmit={(e) => handleSubmit(e)}
            onChange={(e) => {
              let name = e.target.name;
              let value = e.target.value;

              setAccount({ ...account, [name]: value });
            }}
            className={
              error
                ? "flex flex-col items-center group active"
                : "flex flex-col items-center group"
            }
          >
            <input
              type="text"
              name="userName"
              placeholder="User name"
              onFocus={() => {
                if (error) setError(null);
              }}
              className=" w-96 h-14 relative pl-4 border-l-[6px] border-main-color group-[.active]:border-error text-lg bg-box-none-focut text-second-text
                 outline-none  focus:text-main-text focus:border-2 focus:border-l-[6px]
               "
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              onFocus={() => {
                if (error) setError(null);
              }}
              className=" w-96 h-14 relative pl-4 border-l-[6px] border-main-color group-[.active]:border-error text-lg bg-box-none-focut text-second-text mt-4
                 outline-none  focus:text-main-text focus:border-2 focus:border-l-[6px]
               "
            />
            <input
              type="tel"
              name="phoneNo"
              placeholder="Phone number"
              onFocus={() => {
                if (error) setError(null);
              }}
              className=" w-96 h-14 relative pl-4 border-l-[6px] border-main-color group-[.active]:border-error text-lg bg-box-none-focut text-second-text mt-4
                 outline-none  focus:text-main-text focus:border-2 focus:border-l-[6px]
               "
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              onFocus={() => {
                if (error) setError(null);
              }}
              className=" w-96 h-14 relative pl-4 border-l-[6px] border-main-color group-[.active]:border-error text-lg bg-box-none-focut text-second-text mt-4
                 outline-none  focus:text-main-text focus:border-2 focus:border-l-[6px]
               "
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm password"
              onFocus={() => {
                if (error) setError(null);
              }}
              className=" w-96 h-14 relative pl-4 border-l-[6px] border-main-color group-[.active]:border-error text-lg bg-box-none-focut text-second-text mt-4
                 outline-none  focus:text-main-text focus:border-2 focus:border-l-[6px]
               "
            />
            {error && (
              <p className=" float-left my-4 text-xl w-96 font-semibold text-red-600">
                {error}
              </p>
            )}
            <button
              type="submit"
              className=" w-96 text-2xl text-white font-semibold bg-main-color group-[.active]:mt-2 py-2 rounded-full mt-8"
            >
              Create account
            </button>
          </form>
        </div>

        <div className="w-96 mt-8 border-t-[1px] border-second-text flex items-center justify-center">
          <span className="mt-[-14px] px-6 bg-white text-second-text uppercase">
            or
          </span>
        </div>

        <button className="px-4 py-2 flex items-center border border-second-text mt-6 w-fit">
          <img src={gg_icon} alt="" />
          <span className="ml-3 font-semibold">Google</span>
        </button>

        <p className=" text-second-text mt-4 text-lg">
          <span>have an account?</span>
          <a href="/login">
            <span className="text-main-color ml-1 text-xl">Login</span>
          </a>
        </p>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Register;
