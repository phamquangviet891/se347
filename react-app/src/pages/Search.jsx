import React, { Component, useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { AiOutlineFilter } from "react-icons/ai";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

import { useLoaderData } from "react-router-dom";
const img_product_1 =
  "https://i.pinimg.com/564x/73/3c/68/733c688bf6f725345c18190da00e159b.jpg";
const img_product_2 =
  "https://i.pinimg.com/564x/7a/c2/49/7ac24931d724a309a8c14e8c15e7f782.jpg";
const img_product_3 =
  "https://i.pinimg.com/564x/a3/d0/9a/a3d09ab039e3290c2681f643544a10cc.jpg";
const product_list = [
  {
    productID: {
      timestamp: 0,
      createTime: "2023-11-21T13:25:57.656Z",
    },
    productName: "ABCD",
    category: {
      categoryID: {
        timestamp: 0,
        creationTime: "2023-11-21T13:25:57.656Z",
      },
      categoryName: "HELEL",
      image_category: img_product_1,
    },
    description: "DQDQWDQWD",
    image_product: img_product_2,
    image_list: [img_product_1, img_product_2],
    price: 312,
    sale: 21,
    branch: "???",
    option: ["213"],
    status: 0,
    quantity: 123,
    details: ["123"],
    rating_value: 4.5,
    is_draft: true,
    shop_location: "!@#!@#!@",
    sold_number: "!@#!@#",
    product_slug: "!@#!@#!@#",
  },
  {
    productID: {
      timestamp: 0,
      createTime: "2023-11-21T13:25:57.656Z",
    },
    productName: "ABCD",
    category: {
      categoryID: {
        timestamp: 0,
        creationTime: "2023-11-21T13:25:57.656Z",
      },
      categoryName: "HELEL",
      image_category: img_product_1,
    },
    description: "DQDQWDQWD",
    image_product: img_product_2,
    image_list: [img_product_1, img_product_2],
    price: 312,
    sale: 21,
    branch: "???",
    option: ["213"],
    status: 0,
    quantity: 123,
    details: ["123"],
    rating_value: 4.5,
    is_draft: true,
    shop_location: "!@#!@#!@",
    sold_number: "!@#!@#",
    product_slug: "!@#!@#!@#",
  },
  {
    productID: {
      timestamp: 0,
      createTime: "2023-11-21T13:25:57.656Z",
    },
    productName: "ABCD",
    category: {
      categoryID: {
        timestamp: 0,
        creationTime: "2023-11-21T13:25:57.656Z",
      },
      categoryName: "HELEL",
      image_category: img_product_1,
    },
    description: "DQDQWDQWD",
    image_product: img_product_2,
    image_list: [img_product_1, img_product_2],
    price: 312,
    sale: 21,
    branch: "???",
    option: ["213"],
    status: 0,
    quantity: 123,
    details: ["123"],
    rating_value: 4.5,
    is_draft: true,
    shop_location: "!@#!@#!@",
    sold_number: "!@#!@#",
    product_slug: "!@#!@#!@#",
  },
  {
    productID: {
      timestamp: 0,
      createTime: "2023-11-21T13:25:57.656Z",
    },
    productName: "ABCD",
    category: {
      categoryID: {
        timestamp: 0,
        creationTime: "2023-11-21T13:25:57.656Z",
      },
      categoryName: "HELEL",
      image_category: img_product_1,
    },
    description: "DQDQWDQWD",
    image_product: img_product_2,
    image_list: [img_product_1, img_product_2],
    price: 312,
    sale: 21,
    branch: "???",
    option: ["213"],
    status: 0,
    quantity: 123,
    details: ["123"],
    rating_value: 4.5,
    is_draft: true,
    shop_location: "!@#!@#!@",
    sold_number: "!@#!@#",
    product_slug: "!@#!@#!@#",
  },
  {
    productID: {
      timestamp: 0,
      createTime: "2023-11-21T13:25:57.656Z",
    },
    productName: "ABCD",
    category: {
      categoryID: {
        timestamp: 0,
        creationTime: "2023-11-21T13:25:57.656Z",
      },
      categoryName: "HELEL",
      image_category: img_product_1,
    },
    description: "DQDQWDQWD",
    image_product: img_product_2,
    image_list: [img_product_1, img_product_2],
    price: 312,
    sale: 21,
    branch: "???",
    option: ["213"],
    status: 0,
    quantity: 123,
    details: ["123"],
    rating_value: 4.5,
    is_draft: true,
    shop_location: "!@#!@#!@",
    sold_number: "!@#!@#",
    product_slug: "!@#!@#!@#",
  },
  {
    productID: {
      timestamp: 0,
      createTime: "2023-11-21T13:25:57.656Z",
    },
    productName: "ABCD",
    category: {
      categoryID: {
        timestamp: 0,
        creationTime: "2023-11-21T13:25:57.656Z",
      },
      categoryName: "HELEL",
      image_category: img_product_1,
    },
    description: "DQDQWDQWD",
    image_product: img_product_2,
    image_list: [img_product_1, img_product_2],
    price: 312,
    sale: 21,
    branch: "???",
    option: ["213"],
    status: 0,
    quantity: 123,
    details: ["123"],
    rating_value: 4.5,
    is_draft: true,
    shop_location: "!@#!@#!@",
    sold_number: "!@#!@#",
    product_slug: "!@#!@#!@#",
  },
];
const FILTER_BAR = [
  {
    header: "By Status",
    titles: [
      {
        key: "Best-Seller",
        label: "Best Seller",
      },
      {
        key: "Newest",
        label: "Newest",
      },
    ],
    type: "checkbox",
  },
  {
    header: "By Price",
    titles: [
      {
        key: "Descending",
        label: "Descending",
      },
      {
        key: "Ascending",
        label: "Ascending",
      },
    ],
    type: "radio",
  },
  {
    header: "By Address",
    titles: [
      {
        key: "HCM",
        label: "Hồ Chí Minh",
      },
      {
        key: "HN",
        label: "Hà Nội",
      },
    ],
    type: "checkbox",
  },
];
const Search = () => {
  const products = useLoaderData();

  return (
    <div className="w-screen h-auto  gap-3 bg-blue-50 p-4 flex  flex-row ">
      <div className="w-[15%] h-fit p-4 space-y-4 bg-white border rounded-lg shadow-md">
        <header className="flex flex-row items-center text-xl">
          <AiOutlineFilter size={24} /> Search Filter
        </header>
        {FILTER_BAR.map((filter, filterIndex) => (
          <div key={filterIndex}>
            <h2 className="text-lg font-semibold text-gray-700">
              {filter.header}
            </h2>
            <div className="space-y-2">
              {filter.titles.map((title, titleIndex) => (
                <div
                  key={titleIndex}
                  className="flex items-center hover:bg-blue-200 rounded-md p-2"
                >
                  <input
                    type={filter.type}
                    name={filter.header}
                    id={title.key}
                    className="text-blue-500 focus:ring-2 focus:ring-blue-500"
                  />
                  <label htmlFor={title.key} className="text-gray-700 ml-2">
                    {title.label}
                  </label>
                </div>
              ))}
            </div>
          </div>
        ))}
        <button className="flex flex-row items-center">
          View More <MdOutlineKeyboardArrowDown />
        </button>
        <button className="bg-orange-500 px-6 py-3 rounded-md text-white mx-auto block hover:bg-orange-600 focus:ring focus:ring-orange-400 focus:ring-opacity-50">
          Reset
        </button>
      </div>
      <div className=" w-[90%] h-screen overflow-y-auto bg-white flex-wrap flex-row flex gap-2 p-4  ">
        {products && products.length === 0 ? (
          <h1>Không có sản phẩm phù hợp</h1>
        ) : (
          products.map((item, index) => (
            <div
              key={index}
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 2xl:w-1/6"
            >
              <ProductCard id={item.id} product={item} />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Search;
