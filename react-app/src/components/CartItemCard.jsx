import React, { useState } from "react";
import PropTypes from "prop-types";
import { convertPrice } from "../utils/price";
import {
  decreaseQuantityCart,
  increaseQuantityCart,
  removeCart,
} from "../services/CartServices";
import { ImBin } from "react-icons/im";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../store/slice/cart";

const CartItemCard = ({ item, cart_id }) => {
  const [quantity, setQuantity] = useState(item.quantity);
  const dispatch = useDispatch();
  const handleIncreaseQuantity = async (id) => {
    await increaseQuantityCart(id);
    //setQuantity(quantity + 1);
    window.location.reload();
  };
  const handleDecreaseQuantity = async (id) => {
    await decreaseQuantityCart(id);
    //setQuantity(quantity - 1);
    window.location.reload();
  };

  let check = useSelector((state) => state.cart.cart)
    .filter((e) => e.cart_id === cart_id)[0]
    ?.list_cartItem.some((e) => e === item);
  check = check ? true : false;

  const handleRemoveItem = async (id) => {
    await removeCart(id);
    window.location.reload();
  };
  return (
    <div className="grid grid-cols-12 gap-4">
      <div className=" col-span-4 flex items-center justify-start">
        <input
          type="checkbox"
          name="checkall"
          id=""
          checked={check}
          onChange={(e) => {
            if (e.target.checked) {
              dispatch(addItem({ cart_id: cart_id, item: item }));
            } else dispatch(removeItem({ cart_id: cart_id, item: item }));
          }}
        />
        <div className="flex ml-4">
          <div className="w-20 cursor-pointer">
            <img
              src={item.productImage}
              className="w-full aspect-square"
              alt=""
            />
          </div>
          <div className="ml-4">
            <h3 className=" text-black font-semibold">{item.productName}</h3>
            <p>{""}</p>
          </div>
        </div>
      </div>
      <div className="col-span-2 text-center flex flex-col justify-center">
        <p className=" text-black font-semibold text-xl h-fit">
          {convertPrice(item.productSalePrice)} đ
        </p>
        <p className=" line-through h-fit">
          {convertPrice(item.productPrice)} đ{" "}
        </p>
      </div>
      <div className="col-span-1 flex items-center justify-center text-lg text-black font-semibold">
        <p>{item.option ? item.option : "----"}</p>
      </div>
      <div className="col-span-2 flex items-center justify-center">
        <div className="inline-flex flex-row items-center text-black">
          <div
            onClick={() => handleDecreaseQuantity(item.cartItem_id)}
            className="hover:text-black w-9 h-9 bg-white border-2 hover:bg-gray-100 cursor-pointer rounded-l-[5px] border-first-text flex items-center justify-center"
          >
            <div>-</div>
          </div>
          <div className=" text-lg font-semibold w-10 h-9 text-center border-t-2 border-b-2 border-collapse  border-first-text flex items-center justify-center">
            <div>{quantity}</div>
          </div>
          <div
            onClick={() => handleIncreaseQuantity(item.cartItem_id)}
            className="hover:text-black w-9 h-9 bg-white border-2 hover:bg-gray-100 cursor-pointer rounded-r-[5px]  border-first-text flex items-center justify-center"
          >
            <div>+</div>
          </div>
        </div>
      </div>
      <div className="col-span-2 text-center text-main-color font-semibold text-xl flex items-center justify-center">
        <span>{convertPrice(item.productSalePrice * item.quantity)}</span>đ
      </div>
      <button
        className=" flex items-center justify-center cursor-pointer hover:text-black"
        onClick={() => handleRemoveItem(item.cartItem_id)}
      >
        <ImBin size={25} />
      </button>
    </div>
  );
};

CartItemCard.propTypes = {
  item: PropTypes.object.isRequired,
  cart_id: PropTypes.number.isRequired,
};

export default CartItemCard;
