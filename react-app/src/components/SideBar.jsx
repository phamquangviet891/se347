import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";
import { HiOutlineLogout } from "react-icons/hi";

import {
  DASHBOARD_SIDEBAR_BOTTOM_LINKS,
  DASHBOARD_SIDEBAR_LINKS,
} from "../assets/sidebar.js";

const Sidebar = () => {
  return (
    <div className=" bg-main-color text-white w-60 p-3 flex flex-col h-full justify-between">
      <div className="py-2 flex flex-1 flex-col gap-0.5 max-h-[35rem] overflow-scroll no-scrollbar">
        {DASHBOARD_SIDEBAR_LINKS.map((link, index) => {
          return (
            <div key={index}>
              <SidebarLink
                list={link.list}
                path={link.path}
                label={link.label}
                icon={link.icon}
              />
            </div>
          );
        })}
      </div>
      <div className="flex flex-col gap-0.5 pt-2 border-t border-neutral-700">
        <a
          href="/"
          className="cursor-pointer text-white font-semibold flex items-center gap-2 px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base"
        >
          <span className="text-xl">
            <HiOutlineLogout />
          </span>
          Logout
        </a>
      </div>
    </div>
  );
};

const SidebarLink = ({ label, path, icon, list }) => {
  const { pathname } = useLocation();
  const open = path === pathname ? true : false;

  return (
    <div>
      <Link
        to={path}
        className={
          pathname === path
            ? "flex items-center gap-2  px-3 py-2 hover:no-underline bg-white rounded-sm text-base font-semibold text-main-color "
            : "flex items-center gap-2  px-3 py-2 hover:bg-white hover:text-main-color hover:no-underline active:bg-neutral-600 rounded-sm text-base text-white-primary font-semibold"
        }
      >
        {label}
      </Link>
      <div className=" grid grid-cols-1 bg-white">
        {list &&
          open &&
          list.map((item, index) => {
            return (
              <Link
                key={index}
                to={item.path}
                className="px-10 py-2 hover:no-underline bg-white rounded-sm text-base font-semibold text-main-color mt-1 border-t-2 border-black border-dashed"
                // className={
                //   pathname === path
                //     ? "flex items-center gap-2  px-3 py-2 hover:no-underline bg-white rounded-sm text-base font-semibold text-main-color"
                //     : "flex items-center gap-2  px-3 py-2 hover:bg-white hover:text-main-color hover:no-underline active:bg-neutral-600 rounded-sm text-base text-white-primary font-semibold"
                // }
              >
                {item.label}
              </Link>
            );
          })}
      </div>
    </div>
  );
};
{
}

SidebarLink.prototype = {
  label: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  icon: PropTypes.elementType,
  list: PropTypes.array,
};

export default Sidebar;
