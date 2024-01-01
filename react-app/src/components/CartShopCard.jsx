import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { AiFillShop } from "react-icons/ai";
import { RiMessage2Line } from "react-icons/ri";
import { HiOutlineTicket } from "react-icons/hi2";

import CartItemCard from "./CartItemCard";
import VoucherCart from "./VoucherCart";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../store/slice/cart";

const CartShopCard = ({ shop }) => {
  const [voucher, setVoucher] = useState(null);

  const getVoucher = () => {
    return voucher;
  };

  let check = useSelector((state) => state.cart.cart).some(
    (e) =>
      e.cart_id === shop.cart_id &&
      e.list_cartItem.length === shop.list_cartItem.length
  );

  const dispatch = useDispatch();

  return (
    <div className=" bg-white text-first-text ">
      <div className="py-4 px-8 border-b border-second-text flex items-center">
        <input
          type="checkbox"
          name="checkall"
          checked={check}
          onChange={(e) => {
            if (e.target.checked) {
              shop.list_cartItem.forEach((element) => {
                dispatch(
                  addItem({
                    cart_id: shop.cart_id,
                    item: element,
                    shop: shop.shop,
                  })
                );
              });
            } else {
              shop.list_cartItem.forEach((element) => {
                dispatch(removeItem({ cart_id: shop.cart_id, item: element }));
              });
            }
          }}
        />
        <label
          htmlFor="checkall"
          className="ml-2 px-2 py-1 bg-main-color text-white rounded-lg text-center w-fit flex items-center"
        >
          <AiFillShop className=" inline-block mr-1" size={20} />
          <span>{shop.shop}</span>
        </label>
        <RiMessage2Line className=" text-main-color ml-2" size={20} />
      </div>
      <div className="px-4 py-8">
        <div className="border border-second-text grid grid-cols-1 gap-4 py-4 px-2">
          {shop.list_cartItem.map((item, index) => {
            return (
              <CartItemCard item={item} key={index} cart_id={shop.cart_id} />
            );
          })}
        </div>
      </div>
      <div className="px-6 py-4 border-t border-second-text flex items-center gap-8">
        <VoucherCart
          cartID={shop.cart_id}
          getVoucher={getVoucher}
          setVoucher={setVoucher}
        />
        {voucher && (
          <div className=" bg-main-color text-white px-10 py-2 rounded text-lg font-semibold">
            {voucher.discountAmount > 100
              ? voucher.discountAmount + "k"
              : voucher.discountAmount + "%"}{" "}
            off
          </div>
        )}
      </div>
    </div>
  );
};

CartShopCard.propTypes = {
  shop: PropTypes.object.isRequired,
};

export default CartShopCard;
