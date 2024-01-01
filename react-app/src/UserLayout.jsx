import React from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Header from "./parts/Header";
import Footer from "./parts/Footer";

const UserLayout = () => {
  const { hasUser, pathname } = useLoaderData();

  return (
    <div className={pathname === "/user" ? "h-screen overflow-hidden" : ""}>
      <Header hasUser={hasUser} />
      <div className=" w-full overflow-x-hidden">
        <Outlet />
      </div>
      <ToastContainer />
      {/* {pathname !== "/user" && <Footer />} */}
    </div>
  );
};

export default UserLayout;
