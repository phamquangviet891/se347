import { useState } from "react";
import Card from "@mui/material/Card";

const SellerCustomer = () => {
  return (
    <>
      <div className="p-4 h-full flex flex-col">
        <Card className="p-4 mb-4 h-[100px] shadow-lg shadow-black-500/50">
          <h1>Customer / Customers List</h1>
          <div className="flex items-center justify-between">
            <h1 className=" text-2xl font-medium" style={{ color: "#1A88F7" }}>
              Customers List
            </h1>
          </div>
        </Card>
        <div className="bg-white p-8 h-full overflow-scroll no-scrollbar shadow-lg shadow-black-500/50">
          <div className="grid grid-cols-10 items-center  ">
            <div className="col-span-2 w-[290px]">
              <select
                className="text-black w-[200px] bg-white inline-flex items-center border border-gray-400 hover:bg-gray-100 rounded-md text-base px-1 py-1"
                type="button"
              >
                <option value="Potential Customer">Potential Customer</option>
                <option value="Standard Customer">Standard Customer</option>
                <option value="New Customer">New Customer</option>
                <svg
                  className="w-2.5 h-2.5 ms-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </select>
            </div>
            <div className="relative flex justify-start items-center col-span-8 pl-5">
              <div className="relative w-[640px] mr-5">
                <div className="absolute inset-y-0 right-0 flex mt-3 items-start pointer-events-none">
                  <svg
                    className="w-4 h-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  id="simple-search"
                  className="p-1.5 bg-gray-50 w-[650px] border-2 border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 hover:bg-gray-100 block"
                  placeholder="Search branch name..."
                  required
                />
              </div>
              <div className="flex justify-around items-start mx-4">
                <button
                  type="submit"
                  className="py-[6px] w-[150px] px-1.5 font-medium text-white bg-blue-700 rounded-md border border-blue-700 hover:bg-blue-800 focus:ring-1 focus:outline-none focus:ring-blue-300"
                >
                  Search
                </button>
              </div>
            </div>
          </div>
          <div className="flex justify-between col-span-10 mt-10">
            <select
              className="text-black w-[100px] bg-white inline-flex items-center border border-gray-400 hover:bg-gray-100 rounded-md text-base px-1 py-1"
              type="button"
            >
              <option value="Oldest">Oldest</option>
              <option value="Newest">Newest</option>
              <svg
                className="w-2.5 h-2.5 ms-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </select>
            <div className="mx-4"></div>
          </div>
          <div className="col-span-10 pr-5 mt-3">
            <div className="relative h-[450px] overflow-scroll shadow-md ">
              <table className="w-full text-sm text-left text-gray-500">
                <thead className="text-sm text-gray-400  bg-gray-200 ">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Name
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Phone number
                    </th>
                    <th scope="col" className="px-6 py-3 text-center">
                      Product bought
                    </th>
                    <th scope="col" className=" w-24 px-6 py-3 text-center">
                      Total
                    </th>
                  </tr>
                </thead>
                <tbody className="font-semibold text-base">
                  {Array.from({ length: 25 }).map((_, index) => (
                    <tr className="bg-white border-b">
                      <th
                        scope="row"
                        className="px-6 py-5 font-medium text-gray-900 whitespace-nowrap flex items-center justify-start"
                      >
                        <div className="w-10 h-10 bg-gray-200 rounded-full mr-2"></div>
                        NguyenThucBao
                      </th>
                      <td className="px-6 py-4">0999999999</td>
                      <td className="px-6 py-4 text-center">5</td>
                      <td className="px-6 py-4 text-center">100.000đ</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SellerCustomer;
