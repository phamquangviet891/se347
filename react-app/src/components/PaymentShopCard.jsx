import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { AiFillShop } from "react-icons/ai";
import { RiMessage2Line } from "react-icons/ri";
import { HiOutlineTicket } from "react-icons/hi2";

import VoucherCart from "./VoucherCart";
import { useDispatch, useSelector } from "react-redux";
import PaymentItemCard from "./PaymentItemCard";
import { getCostVoucher, getLengthShop, getTotalShop } from "../utils/cart";
import { convertPrice } from "../utils/price";
import VoucherPayment from "./VoucherPayment";

const PaymentShopCard = ({ shop }) => {
  const [voucher, setVoucher] = useState(shop.voucher);

  const getVoucher = () => {
    return voucher;
  };

  let check = useSelector((state) => state.cart.cart).some(
    (e) =>
      e.cart_id === shop.cart_id &&
      e.list_cartItem.length === shop.list_cartItem.length
  );

  return (
    <div className=" bg-white text-first-text ">
      <div className="py-4 px-8 border-b border-second-text flex items-center gap-4">
        <label
          htmlFor="checkall"
          className="ml-2 px-2 py-1 bg-main-color text-white rounded-lg text-center w-fit flex items-center"
        >
          <AiFillShop className=" inline-block mr-1" size={20} />
          <span>{shop.shop}</span>
        </label>
        <button className="flex items-center">
          <RiMessage2Line className=" text-main-color ml-2" size={20} />
          <p className=" text-main-color ml-1">Chat now</p>
        </button>
      </div>
      <div className="px-4 py-8">
        <div className=" grid grid-cols-1 gap-8 py-4 px-2">
          {shop.list_cartItem.map((item, index) => {
            return (
              <PaymentItemCard item={item} key={index} cart_id={shop.cart_id} />
            );
          })}
        </div>
      </div>
      <div className="px-6 py-4 border-y border-dashed border-second-text flex items-center justify-between gap-8">
        <div className="flex items-center gap-8">
          <VoucherPayment
            cartID={shop.cart_id}
            getVoucher={getVoucher}
            setVoucher={setVoucher}
          />
          {voucher !== undefined && (
            <div className=" bg-main-color text-white px-10 py-2 rounded text-lg font-semibold">
              {voucher.discountAmount > 100
                ? voucher.discountAmount + "k"
                : voucher.discountAmount + "%"}{" "}
              off
            </div>
          )}
        </div>
        {voucher !== undefined && (
          <p className=" text-main-color font-semibold text-lg">
            {convertPrice(getCostVoucher(voucher, getTotalShop(shop)))}đ{" "}
            <span className=" font-normal">off applied</span>
          </p>
        )}
      </div>
      <div className="px-6 py-8  flex items-center justify-end gap-6 text-black text-lg">
        <p>Order Total ({getLengthShop(shop.list_cartItem)} item):</p>
        <p className="  font-semibold text-2xl">
          {voucher !== undefined
            ? convertPrice(
                getTotalShop(shop) - getCostVoucher(voucher, getTotalShop(shop))
              )
            : convertPrice(getTotalShop(shop))}
          đ
        </p>
      </div>
    </div>
  );
};

PaymentShopCard.propTypes = {
  shop: PropTypes.object.isRequired,
};

export default PaymentShopCard;
