import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { FaBeer, FaStar, FaStarHalfAlt } from "react-icons/fa";
import trimmedTitle from "../utils/title";
import { convertPrice } from "../utils/price";
import convertNumber from "../utils/number";

const ProductCard = ({ id, product }) => {
  //const navigate = useNavigate();

  // const handleProductDetail = () => {
  //   const product_detail = {
  //     productName: product.productName,
  //     category: product.category,
  //     productImage: product.img_product,
  //     rating: product.rating,
  //     sold: product.sold,
  //     productSalePrice: product.productSalePrice,
  //     discount: product.discount,
  //     shop_location: product.shop_location,
  //     options: product.options,
  //     quantity: product.quantity,
  //   };
  //   navigate(`/${id}/${product.slug}`, {
  //     state: product_detail,
  //   });
  // };
  const renderStarRating = () => {
    const rating = product.rating || 0; // Ensure a valid rating
    const stars = [];

    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<FaStar key={i} className="text-yellow-500" />);
      } else if (i - 0.5 <= rating) {
        stars.push(<FaStarHalfAlt key={i} className="text-yellow-500" />);
      } else {
        stars.push(<FaStar key={i} className="text-gray-300" />);
      }
    }

    return stars;
  };

  if (product)
    return (
      <a href={`/${id}/${product.slug}`}>
        <div className=" min-w-[180px] h-full bg-white border-2 border-gray-200 rounded-sm hover:shadow-lg hover:cursor-pointer transform hover:-translate-y-0.5 transition-transform ease-in-out duration-300">
          <img className="w-full" src={product.productImage} alt="Product" />
          <div className="py-3 pl-2">
            <div className="text-sm text-left font-medium  h-10">
              {trimmedTitle(product.productName)}
            </div>
            <div className="flex items-center my-1">
              <div className="flex text-xs">{renderStarRating()}</div>
              <span className="border border-gray-300 h-4 m-2" />
              <div className="text-xs text-gray-400">
                {convertNumber(product.sold, 1)} sold
              </div>
            </div>

            <div className="text-xl text-blue-500 font-semibold">
              {convertPrice(
                (product.productSalePrice * (100 - product.discount)) / 100 ?? 0
              )}{" "}
              ₫
            </div>
            {product.discount > 0 && (
              <div className="flex my-1">
                <div className="text-sm text-gray-500 font-normal line-through">
                  {convertPrice(product.productSalePrice)} ₫
                </div>
                <div className="text-sm pl-2">-{product.discount}%</div>
              </div>
            )}

            <div className="text-gray-400 text-xs text-right mr-2 ">
              {product?.shop_location ?? ""}
            </div>
          </div>
        </div>
      </a>
    );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    category: PropTypes.string,
    productImage: PropTypes.string,
    productName: PropTypes.string,
    rating: PropTypes.number,
    sold: PropTypes.number,
    productSalePrice: PropTypes.number,
    discount: PropTypes.number,
    shop_location: PropTypes.string,
    slug: PropTypes.string,
  }),
};

export default ProductCard;
