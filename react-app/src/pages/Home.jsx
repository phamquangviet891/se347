import React, {
  Component,
  memo,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";
import ProductCard from "../components/ProductCard";
import { useLoaderData, useLocation } from "react-router-dom";
import { AiOutlineFilter } from "react-icons/ai";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import Automotive_1 from "../assets/categories/Automotive_1.png";
import useFetch from "../utils/fetch";
import { getProduct } from "../assets/fake-data/product";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { getProductHomePage } from "../services/ProductServices";
import { getListCategories } from "../services/CategoryServices";
import BannerComponents from "../components/BannerComponents";
//import { getProductById } from "../utils/findProduct";
//import { getProductById } from "../assets/fake-data/product";

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
const img_1 =
  "https://cf.shopee.vn/file/vn-50009109-3b4844af326ff3b9c1e1793d0dbda9f3_xxhdpi";

const img_2 =
  "https://cf.shopee.vn/file/vn-50009109-b50e9325f75b707841a1f53702a74ff4_xhdpi";
const img_3 =
  "https://cf.shopee.vn/file/vn-50009109-561c990f47e6a635fde915597ba757d6_xhdpi";
const CATEGORIES = [
  {
    key: "10000",
    label: "Thời trang nam",
    img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTXtWcrgucgFQEY37vji1OvQUQUllFKajD2NqefQSRuDiB16Jh42IuPw7wb4Pp-9Ca9cH6pS4ciRtCBleYYxKai7aN6HemkNrIRxSKzGr4Oa-_opD9XibQvslZknQoidgiL9CtAX80alw&usqp=CAc",
  },
  {
    key: "10001",
    label: "Điện thoại & phụ kiện",
    img: "https://images.fpt.shop/unsafe/fit-in/585x390/filters:quality(5):fill(white)/fptshop.com.vn/Uploads/Originals/2023/3/8/638138646675311035_xiaomi-redmi-12c-xam-1.jpg",
  },
  {
    key: "10002",
    label: "Thiết bị điện tử",
    img: "https://cf.shopee.vn/file/7a860704b61547430113996689283433",
  },
  {
    key: "10003",
    label: "Máy tính & laptop",
    img: "https://cf.shopee.vn/file/34176b228172156844a2a69139318307",
  },
  {
    key: "10004",
    label: "Máy ảnh & máy quay phim",
    img: "https://cf.shopee.vn/file/c749518b127300370075c20647022134",
  },
  {
    key: "10005",
    label: "Đồng hồ",
    img: "https://cf.shopee.vn/file/30f40218260210844425331567277220",
  },
  {
    key: "10006",
    label: "Giày dép nam",
    img: "https://cf.shopee.vn/file/8650040669625775421056758961943",
  },
  {
    key: "10007",
    label: "Thiết bị điện gia dụng",
    img: "https://cf.shopee.vn/file/4c438927116609024450391420536495",
  },
  {
    key: "10008",
    label: "Thể thao & du lịch",
    img: "https://cf.shopee.vn/file/2453870214024200445140510755961",
  },
  {
    key: "10009",
    label: "Ô tô & xe máy & xe đạp",
    img: "https://cf.shopee.vn/file/9449641469625775421056758961943",
  },
  {
    key: "10010",
    label: "Bạch Hoa Online. Nha Sách Online",
    img: "https://cf.shopee.vn/file/7a860704b61547430113996689283433",
  },
  {
    key: "10011",
    label: "Trang sức nữ",
    img: "https://cf.shopee.vn/file/30f40218260210844425331567277220",
  },
];

const Home = () => {
  const [categories, setCategories] = useState([]);
  const [product_list, setProductList] = useState([]);
  const navigate = useNavigate();
  const getCategories = async () => {
    const data = await getListCategories();
    console.log(">>> check categories:", data);
    setCategories(data);
  };

  const getProductList = async () => {
    const data = await getProductHomePage();
    console.log(">>> check product_list:", data);
    setProductList(data);
  };

  useEffect(() => {
    getCategories();
    getProductList();
  }, []);

  const onCategoryClick = (categorySlug, categoryId) => {
    console.log(categorySlug);
    navigate(`/search/${categoryId}/${categorySlug}`);
  };
  console.log(">>> Check product list:", product_list);
  return (
    <div className="w-full">
      <div className="bg-blue-50 flex flex-col justify-center items-center pb-16">
        <div
          className="grid grid-rows-2 grid-flow-col gap-1 w-11/12 mx-auto max-w-[1250px] py-4"
          style={{ marginBottom: 20 }}
        >
          {/* <img className="row-span-2 col-span-2 bg-contain" src={img_1}></img> */}
          <BannerComponents />
          <img className="row-span-1 col-span-1 bg-contain" src={img_2}></img>
          <img className="row-span-1 col-span-1 bg-contain" src={img_3}></img>
        </div>
        <div className="w-[1250px] my-10">
          <h2 className="text-xl text-left font-semibold mb-5">CATEGORY</h2>
          <div className="bg-white py-5 px-2 rounded-md">
            <div className="grid grid-cols-6 gap-4">
              {categories.map((category, index) => (
                <div
                  key={index}
                  className="category-item flex flex-col items-center"
                  onClick={() => onCategoryClick(category.slug, category.id)}
                >
                  <button className="category-button w-16 h-16 rounded-full bg-gray-300 flex items-center justify-center">
                    <img
                      src={category.image}
                      alt={category.title}
                      className="category-image w-10 h-10 rounded-full"
                    />
                  </button>
                  <label className="text-center mt-1">{category.title}</label>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-[1250px]">
          <h2 className="text-xl text-left font-semibold mb-5">
            DAILY PRODUCT
          </h2>
          <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
            {product_list.map((item, index) => (
              <div key={index} className="w-full ">
                <ProductCard id={item.id} product={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Home);
