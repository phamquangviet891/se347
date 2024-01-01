import React, { useState } from "react";
import bg_login from "../assets/pictures/bg-login.png";
import gg_icon from "../assets/pictures/gg-icon.png";
import logo from "../assets/pictures/logo.png";
import { toast } from "react-toastify";
import { postLoginUser } from "../services/UserServices";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [error, setError] = useState(null);
  const [userName, setUserName] = useState(null);
  const [password, setPassword] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!userName || !password) {
      setError("All is require!");
      toast.error("All is require!");
      return null;
    }
    //console.log(userName + password);

    await postLoginUser(userName, password)
      .then((res) => {
        //console.log(res);
        localStorage.setItem("id-user", res.data.user_id);
        localStorage.setItem("userName", res.data.username);
        if (
          localStorage.getItem("lastpathname") !== undefined ||
          localStorage.getItem("lastpathname") !== ""
        ) {
          navigate(`${localStorage.getItem("lastpathname")}`);
        } else {
          navigate("/");
        }
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
        <img src={logo} alt="" className=" h-36" />
      </div>
      <div className="w-1/2 h-full overflow-hidden flex flex-col items-center justify-center">
        <h1 className="text-5xl text-main-color font-semibold ">
          Login Account
        </h1>

        <div className=" mt-12">
          <form
            action="/login"
            onSubmit={(e) => handleSubmit(e)}
            className={
              error
                ? "flex flex-col items-center group active"
                : "flex flex-col items-center group"
            }
          >
            <input
              type="text"
              name="tendangnhap"
              placeholder="User name"
              onChange={(e) => setUserName(e.target.value)}
              className=" w-96 h-14 relative pl-4 border-l-[6px] border-main-color group-[.active]:border-error text-lg bg-box-none-focut text-second-text
                 outline-none  focus:text-main-text focus:border-2 focus:border-l-[6px]
               "
            />
            <input
              type="password"
              name="matkhau"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              className=" w-96 h-14 relative pl-4 border-l-[6px] border-main-color group-[.active]:border-error text-lg bg-box-none-focut text-second-text mt-6
                 outline-none  focus:text-main-text focus:border-2 focus:border-l-[6px]
               "
            />
            {error && (
              <p className="w-full mt-4 capitalize text-error font-semibold">
                {error}
              </p>
            )}
            <button
              type="submit"
              className=" w-96 text-xl text-white font-semibold bg-main-color py-2 rounded-full mt-8 group-[.active]:mt-4"
            >
              Login
            </button>

            <a
              href="/login"
              className=" inline-block italic text-main-color mt-6"
            >
              <span>Forgot Password</span>
            </a>
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

        <p className=" text-second-text mt-8 text-lg">
          <span>New to TAKA?</span>
          <a href="/register">
            <span className="text-main-color ml-1 text-xl">Sign Up</span>
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
