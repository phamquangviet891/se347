import React, { useEffect, useState } from "react";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { AiOutlinePlus, AiOutlineShop } from "react-icons/ai";
import { HiOutlineTicket } from "react-icons/hi";
import { convertPrice } from "../utils/price";
import { useDispatch } from "react-redux";
import { addItem } from "../store/slice/cart";
import DiscountCard from "../components/DiscountCard";
import { checkExistUser } from "../services/UserServices";
import dayjs from "dayjs";
import { toast } from "react-toastify";
import StarsRating from "../components/StarsRating";
import ReviewCard from "../components/ReviewCard";
import { getShopById } from "../services/ShopServices";
import { getReviewByProduct } from "../services/ReviewServices";
import {
  getProductByCategory,
  getProductById,
} from "../services/ProductServices";
import ProductCard from "../components/ProductCard";
import { getCart, postCart } from "../services/CartServices";

const productsRating = ["5", "4", "3", "2", "1"];

const Product = () => {
  const data = useLoaderData();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [shopInfo, setShopInfo] = useState({});
  const [productReviews, setProductReviews] = useState([]);
  const [suggestedProducts, setSuggestedProducts] = useState([]);

  const [activeImg, setActiveImg] = useState(data.productImage);
  const [quantity, setQuantity] = useState(1);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(data.options[1] || "");
  const [isShowMore, setIsShowMore] = useState(true);
  const [producstRatingIndex, setProductsRatingIndex] = useState(0);
  const pathname = useLocation().pathname;

  useEffect(() => {
    fetchShopInfo();
    fetchProductReviews();
    fetchSuggestedProducts();
  }, []);

  useEffect(() => {
    fetchProductReviews();
  }, [producstRatingIndex]);

  const fetchShopInfo = async () => {
    setShopInfo(await getShopById(data.shopId));
  };

  const fetchProductReviews = async () => {
    const reviews = await getReviewByProduct(
      data.id,
      productsRating[producstRatingIndex]
    );
    if (reviews !== undefined) {
      setProductReviews(reviews);
    }
  };

  const fetchSuggestedProducts = async () => {
    setSuggestedProducts(await getProductByCategory(data.category_id));
  };

  const incQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    } else {
      setQuantity(1);
    }
  };

  const handleAdd = async () => {
    const userId = localStorage.getItem("id-user");

    let check = await checkExistUser(userId);

    if (!check) {
      navigate("/login");
      localStorage.setItem("lastpathname", `${pathname}`);
    } else {
      const product = data;

      const options = selectedOption;
      let add = await postCart(product, quantity, options);

      if (add.status === 200 && add.config.data) {
        console.log();
        toast.success("Add to cart successfully!");
      } else window.location.reload();
    }
  };

  const onBuyNow = () => {
    const product = data;

    dispatch(
      addItem({
        ID: product.ID,
        productName: product.productName,
        productPrice: product.productPrice,
        productSalePrice: product.productSalePrice,
        rating: product.rating,
        productImage: product.productImage,
        shopId: product.shopId,
        description: product.description,
        quantity: quantity,
      })
    );
    navigate("/cart");
  };

  return (
    <div className="w-full">
      <div className="flex flex-col items-center bg-blue-50">
        <div className="flex flex-col w-2/3 mt-[32px] max-w-[1180px] min-w-[1180px]">
          <div className="flex flex-row gap-16 bg-white p-4 w-full mb-4">
            {/* PRODUCT IMAGE */}
            <div className="flex flex-col gap-2 w-1/3">
              <img
                src={activeImg}
                alt="Main Product Image"
                className="w-full h-full aspect-square object-cover rounded-md"
              />
              <div className="relative">
                <div className="flex gap-2 overflow-auto">
                  {data &&
                    data.productListImage &&
                    data.productListImage.map((item, index) => (
                      <img
                        src={item}
                        key={index}
                        alt="Product Image"
                        className="w-1/4 snap-start aspect-square object-scale-down p-1 border border-second-text cursor-pointer rounded-md"
                        onClick={() =>
                          setActiveImg(data.productListImage[index])
                        }
                      />
                    ))}
                </div>
                <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] left-[-15px] rounded-full p-2 bg-white text-main-color cursor-pointer shadow-md">
                  <BsChevronCompactLeft size={20} />
                </div>
                <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] right-[-15px] rounded-full p-2 bg-white text-main-color cursor-pointer shadow-md">
                  <BsChevronCompactRight size={20} />
                </div>
              </div>
            </div>
            {/* PRODUCT DETAIL */}
            <div className="flex flex-col w-2/3 justify-between py-2 px-4">
              <div>
                <span className="font-normal">Brand: </span>
                <span className="text-main-color font-normal">
                  {data.brand}
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="font-semibold text-2xl">{data.productName}</h1>
                <div className="flex flex-row items-center gap-2">
                  <div className="font-medium">{data.rating}</div>
                  <StarsRating stars={data.rating} className="w-4 h-4" />
                  <div className="text-gray-500 font-light">{data.sold}</div>
                  <div className="border-l h-2/3 border-second-text"></div>
                  <div className="text-gray-500 font-light">{/*    */}</div>
                </div>
              </div>
              <div className="flex flex-row items-center gap-4">
                <div className="font-semibold text-main-color text-3xl">
                  {data.productSalePrice && convertPrice(data.productSalePrice)}{" "}
                  đ
                </div>
                {data.discount > 0 && (
                  <div className="flex gap-4 items-center">
                    <div className="text-gray-500 font-light line-through">
                      {data.productPrice && convertPrice(data.productPrice)} đ
                    </div>
                    <div className="bg-main-color px-2 text-white font-light">
                      <span>- {data.discount}%</span>
                    </div>
                  </div>
                )}
              </div>
              <div>
                <span className="inline-block w-[100px]">
                  {data.options[0]}
                </span>
                <div className="inline-flex gap-2">
                  {data.options.slice(1).map((item, index) => (
                    <button
                      key={index}
                      className={
                        selectedOptionIndex === index
                          ? "bg-white hover:bg-gray-100 font-semibold p-1 px-5 border border-main-color"
                          : "bg-white hover:bg-gray-100 font-semibold p-1 px-5 border border-gray-300"
                      }
                      onClick={() => {
                        setSelectedOptionIndex(index);
                        setSelectedOption(item);
                      }}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <span className="inline-block w-[100px]">Quantity</span>
                <div className="inline-flex flex-row items-center">
                  <span
                    className="w-7 h-7 bg-white border hover:bg-gray-100 cursor-pointer border-gray-300 text-center"
                    onClick={decQuantity}
                  >
                    -
                  </span>
                  <span className="w-10 h-7 text-center border-t border-b border-collapse border-gray-300">
                    {quantity}
                  </span>
                  <span
                    className="w-7 h-7 bg-white border hover:bg-gray-100 cursor-pointer border-gray-300 text-center"
                    onClick={incQuantity}
                  >
                    +
                  </span>
                </div>
                <span className="ml-4 text-gray-500 font-light">
                  {data.inventory} pieces available
                </span>
              </div>
              <div className="flex gap-4">
                <button
                  onClick={() => handleAdd()}
                  className="flex gap-2 justify-center w-[180px] border py-2 border-main-color"
                >
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22.5317 17.1362H7.99316L8.72314 15.6494L20.852 15.6274C21.2622 15.6274 21.6138 15.3345 21.687 14.9292L23.3667 5.52734C23.4106 5.28076 23.3447 5.02686 23.1836 4.83398C23.104 4.73906 23.0046 4.6626 22.8925 4.6099C22.7803 4.55721 22.6581 4.52954 22.5342 4.52881L7.10449 4.47754L6.97266 3.85742C6.88965 3.46191 6.5332 3.17383 6.12793 3.17383H2.35596C2.12739 3.17383 1.90818 3.26463 1.74656 3.42625C1.58494 3.58787 1.49414 3.80708 1.49414 4.03564C1.49414 4.26421 1.58494 4.48342 1.74656 4.64504C1.90818 4.80666 2.12739 4.89746 2.35596 4.89746H5.42969L6.00586 7.63672L7.42432 14.5044L5.59814 17.4854C5.50331 17.6134 5.44619 17.7653 5.43324 17.9241C5.4203 18.0829 5.45205 18.2421 5.5249 18.3838C5.67139 18.6743 5.9668 18.8574 6.29394 18.8574H7.82715C7.50029 19.2916 7.32374 19.8203 7.32422 20.3638C7.32422 21.7456 8.44726 22.8687 9.8291 22.8687C11.2109 22.8687 12.334 21.7456 12.334 20.3638C12.334 19.8193 12.1533 19.2896 11.8311 18.8574H15.7642C15.4373 19.2916 15.2607 19.8203 15.2612 20.3638C15.2612 21.7456 16.3843 22.8687 17.7661 22.8687C19.1479 22.8687 20.271 21.7456 20.271 20.3638C20.271 19.8193 20.0903 19.2896 19.7681 18.8574H22.5342C23.0078 18.8574 23.396 18.4717 23.396 17.9956C23.3946 17.7673 23.3029 17.5488 23.141 17.3878C22.9791 17.2268 22.7601 17.1364 22.5317 17.1362ZM7.46338 6.17676L21.521 6.22314L20.144 13.9331L9.10156 13.9526L7.46338 6.17676ZM9.8291 21.1353C9.4043 21.1353 9.05762 20.7886 9.05762 20.3638C9.05762 19.939 9.4043 19.5923 9.8291 19.5923C10.2539 19.5923 10.6006 19.939 10.6006 20.3638C10.6006 20.5684 10.5193 20.7646 10.3746 20.9093C10.2299 21.054 10.0337 21.1353 9.8291 21.1353ZM17.7661 21.1353C17.3413 21.1353 16.9946 20.7886 16.9946 20.3638C16.9946 19.939 17.3413 19.5923 17.7661 19.5923C18.1909 19.5923 18.5376 19.939 18.5376 20.3638C18.5376 20.5684 18.4563 20.7646 18.3116 20.9093C18.167 21.054 17.9707 21.1353 17.7661 21.1353Z"
                      fill="#1A88F7"
                    />
                  </svg>
                  <span className="text-main-color">Add to Cart</span>
                </button>
                <button
                  className="text-center w-[180px] bg-main-color text-white py-2"
                  onClick={onBuyNow}
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-x-5 w-full mb-4">
            {/* LEFT CONTENT */}
            <div className="flex flex-col gap-y-4 w-1/3">
              <div className="flex flex-col bg-white gap-y-1 py-4 px-4">
                <div className="flex gap-x-2">
                  <img
                    src={shopInfo.logo}
                    alt="Shop Image"
                    className="w-20 h-20 mb-1 mr-5"
                  />
                  <div className="flex flex-col gap-y-2 justify-center">
                    <div className="text-xl font-medium">{shopInfo.name}</div>
                    <div className="flex gap-x-2 items-center">
                      <div className="text-sm">{shopInfo.rating}</div>
                      {shopInfo.rating && shopInfo.rating > 0 && (
                        <StarsRating
                          stars={shopInfo.rating}
                          className="w-4 h-4"
                        />
                      )}

                      <div className="text-sm text-gray-500 font-light">
                        ({shopInfo.so_nguoi_danh_gia})
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex gap-x-2">
                  <button className="flex gap-x-2 hover:bg-gray-100 items-center py-1 px-8 border border-gray-300">
                    <AiOutlinePlus className="text-gray-500" />
                    <span className="text-sm font-light">Follow</span>
                  </button>
                  <button
                    onClick={() => {
                      navigate(`/${shopInfo.shop_id}`);
                    }}
                    className="flex gap-x-2 hover:bg-gray-100 items-center py-1 px-8 border border-gray-300"
                  >
                    <AiOutlineShop className="text-gray-500" />
                    <span className="text-sm font-light">View Shop</span>
                  </button>
                </div>
              </div>
              {/* <div className="flex flex-col bg-white gap-y-4 py-4 px-4">
                <div className="flex items-center gap-x-2">
                  <HiOutlineTicket className="text-main-color" size={30} />
                  <span className="text-xl text-main-color">Shop Voucher</span>
                </div>
                {data.vouchers.map((item, index) => (
                  <DiscountCard
                    key={index}
                    title={item.title}
                    date={dayjs(item.expire_date).format("DD MMMM YYYY")}
                  />
                ))}
              </div> */}
            </div>
            {/* RIGHT CONTENT */}
            <div className="flex flex-col gap-y-4 w-2/3 mb-8">
              <div className="flex flex-col bg-white gap-y-8 py-4 px-4">
                <span className="text-xl font-semibold">
                  Product Description
                </span>
                <div className={isShowMore ? "" : "overflow-hidden h-full"}>
                  {data.description}
                </div>
                <button
                  className="text-main-color"
                  onClick={() => {
                    if (isShowMore) setIsShowMore(false);
                    else setIsShowMore(true);
                  }}
                >
                  {isShowMore === true ? "Xem thêm" : "Xem ít"}
                </button>
              </div>
            </div>
          </div>

          {/* Product Reviews */}
          <div className="flex flex-col bg-white w-full gap-4 p-4 mb-4">
            <div className="text-xl font-medium">Products Rating</div>
            <div className="flex bg-[#F1F8FF]">
              <div className="flex flex-col items-center p-6 gap-2">
                <div className="text-main-color text-2xl">
                  <span className="text-[40px]">{data.rating}</span> out of 5
                </div>
                <StarsRating stars={data.rating} className="w-6 h-6" />
              </div>

              <div className="flex gap-4 p-4 items-center justify-center grow">
                {productsRating.map((item, index) => (
                  <button
                    key={`rating-${index}`}
                    className={
                      producstRatingIndex === index
                        ? "bg-white hover:bg-gray-100 font-semibold p-1 px-5 border border-main-color h-fit"
                        : "bg-white hover:bg-gray-100 font-semibold p-1 px-5 border border-gray-300 h-fit"
                    }
                    onClick={() => {
                      setProductsRatingIndex(index);
                    }}
                  >
                    {item} {index < 4 ? "stars" : "star"}
                  </button>
                ))}
              </div>
            </div>
            <div>
              {productReviews &&
              productReviews.list_item &&
              productReviews.list_item.length > 0 ? (
                productReviews.list_item.map((review, index) => (
                  <ReviewCard
                    key={`user-review-${index}`}
                    userAvatar={review.user_avatar}
                    userName={review.user_name}
                    userRating={review.rating}
                    userDescription={review.des}
                    listImgs={review.list_imgs}
                    date={review.date}
                  />
                ))
              ) : (
                <div className="flex justify-center p-4">
                  No reviews to show
                </div>
              )}
            </div>
          </div>

          {/* Suggested Products */}
          <div>
            <h2 className="text-xl text-left font-semibold mb-5">
              SUGGESTED PRODUCTS
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
              {suggestedProducts.map((product, index) => (
                <div key={`suggested-product-${index}`} className="w-full ">
                  <ProductCard id={product.id} product={product} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
