import React from "react";
import {convertPrice} from "../utils/price";
import PropTypes from "prop-types";

function PaymentCard({ image, shopname, productName, price, quantity }) {
  return (
    <div>
      <div className="bg-white grid grid-cols-12 gap-x-2 w-[1250px] mb-4">
        <div className="flex col-span-12 gap-2 mx-6 my-3">
          <span className="text-xl font-semibold mr-2 my-5">{shopname}</span>
          <button className="text-main-color flex gap-[2px] justify-center items-center">
            <svg
              width="22"
              height="22"
              viewBox="0 0 26 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.4165 5.41667C5.12919 5.41667 4.85364 5.5308 4.65047 5.73397C4.44731 5.93713 4.33317 6.21268 4.33317 6.5V15.1667C4.33317 15.454 4.44731 15.7295 4.65047 15.9327C4.85364 16.1359 5.12919 16.25 5.4165 16.25H9.74984C10.3481 16.25 10.8332 16.735 10.8332 17.3333V20.1346L14.4005 16.5673C14.6036 16.3641 14.8792 16.25 15.1665 16.25H20.5832C20.8705 16.25 21.146 16.1359 21.3492 15.9327C21.5524 15.7295 21.6665 15.454 21.6665 15.1667V6.5C21.6665 6.21268 21.5524 5.93713 21.3492 5.73397C21.146 5.5308 20.8705 5.41667 20.5832 5.41667H5.4165ZM3.11841 4.2019C3.7279 3.59241 4.55455 3.25 5.4165 3.25H20.5832C21.4451 3.25 22.2718 3.59241 22.8813 4.2019C23.4908 4.8114 23.8332 5.63805 23.8332 6.5V15.1667C23.8332 16.0286 23.4908 16.8553 22.8813 17.4648C22.2718 18.0743 21.4451 18.4167 20.5832 18.4167H15.6152L10.5159 23.516C10.206 23.8259 9.74008 23.9186 9.33526 23.7509C8.93045 23.5832 8.6665 23.1882 8.6665 22.75V18.4167H5.4165C4.55455 18.4167 3.7279 18.0743 3.11841 17.4648C2.50891 16.8553 2.1665 16.0286 2.1665 15.1667V6.5C2.1665 5.63805 2.50891 4.8114 3.11841 4.2019ZM7.58317 10.8333C7.58317 10.235 8.0682 9.75 8.6665 9.75H8.67734C9.27565 9.75 9.76067 10.235 9.76067 10.8333C9.76067 11.4316 9.27565 11.9167 8.67734 11.9167H8.6665C8.0682 11.9167 7.58317 11.4316 7.58317 10.8333ZM11.9165 10.8333C11.9165 10.235 12.4015 9.75 12.9998 9.75H13.0107C13.609 9.75 14.094 10.235 14.094 10.8333C14.094 11.4316 13.609 11.9167 13.0107 11.9167H12.9998C12.4015 11.9167 11.9165 11.4316 11.9165 10.8333ZM16.2498 10.8333C16.2498 10.235 16.7349 9.75 17.3332 9.75H17.344C17.9423 9.75 18.4273 10.235 18.4273 10.8333C18.4273 11.4316 17.9423 11.9167 17.344 11.9167H17.3332C16.7349 11.9167 16.2498 11.4316 16.2498 10.8333Z"
                fill="#1A88F7"
                stroke="#1A88F7"
                strokeWidth="0.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="mb-[4px] text-lg">chat now</span>
          </button>
        </div>
        <div className="grid grid-cols-12 col-span-12 mb-10 items-center">
          <div className="col-span-6 flex items-center pl-8">
            <img src={image} className="" />
            <div className="font-semibold pr-10 ml-2 ">{productName}</div>
          </div>
          <span className="col-span-2 text-first-text">Capacity: 600ml</span>
          <span className="col-span-2 font-semibold text-xl">
            {convertPrice(price)} ₫
          </span>
          <span className="col-span-1 font-semibold text-xl">{quantity}</span>
          <span className="col-span-1 font-semibold text-xl text-main-color">
            {convertPrice(price * quantity)} ₫
          </span>
        </div>
        <div className="grid grid-cols-12 col-span-12 border-y-2 border-dashed py-4 pl-10 mt-2">
          <div className="flex text-main-color col-span-6 items-center text-xl gap-2">
            <svg
              width="30"
              height="25"
              viewBox="0 0 46 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.71864 8.13146C6.76841 7.19378 8.19222 6.66699 9.67682 6.66699H35.7995C37.2841 6.66699 38.7079 7.19378 39.7577 8.13146C40.8075 9.06914 41.3973 10.3409 41.3973 11.667V16.667C41.3973 17.109 41.2007 17.5329 40.8507 17.8455C40.5008 18.1581 40.0262 18.3337 39.5313 18.3337C39.0365 18.3337 38.5619 18.5093 38.212 18.8218C37.862 19.1344 37.6654 19.5583 37.6654 20.0003C37.6654 20.4424 37.862 20.8663 38.212 21.1788C38.5619 21.4914 39.0365 21.667 39.5313 21.667C40.5619 21.667 41.3973 22.4132 41.3973 23.3337V28.3337C41.3973 29.6597 40.8075 30.9315 39.7577 31.8692C38.7079 32.8069 37.2841 33.3337 35.7995 33.3337H9.67682C8.19222 33.3337 6.76841 32.8069 5.71864 31.8692C4.66886 30.9315 4.0791 29.6597 4.0791 28.3337V23.3337C4.0791 22.4132 4.9145 21.667 5.94501 21.667C6.43988 21.667 6.91448 21.4914 7.26441 21.1788C7.61433 20.8663 7.81092 20.4424 7.81092 20.0003C7.81092 19.5583 7.61433 19.1344 7.26441 18.8218C6.91448 18.5093 6.43988 18.3337 5.94501 18.3337C4.9145 18.3337 4.0791 17.5875 4.0791 16.667V11.667C4.0791 10.3409 4.66886 9.06914 5.71864 8.13146ZM30.2018 30.0003V28.3337C30.2018 27.4132 29.3664 26.667 28.3359 26.667C27.3054 26.667 26.47 27.4132 26.47 28.3337V30.0003H9.67682C9.18196 30.0003 8.70735 29.8247 8.35743 29.5122C8.0075 29.1996 7.81092 28.7757 7.81092 28.3337V24.7144C8.59069 24.4681 9.30722 24.0682 9.9032 23.5359C10.953 22.5982 11.5427 21.3264 11.5427 20.0003C11.5427 18.6742 10.953 17.4025 9.9032 16.4648C9.30722 15.9325 8.59069 15.5325 7.81092 15.2863V11.667C7.81092 11.225 8.0075 10.801 8.35743 10.4885C8.70735 10.1759 9.18195 10.0003 9.67682 10.0003H26.47V11.667C26.47 12.5875 27.3054 13.3337 28.3359 13.3337C29.3664 13.3337 30.2018 12.5875 30.2018 11.667V10.0003H35.7995C36.2944 10.0003 36.769 10.1759 37.1189 10.4885C37.4689 10.801 37.6654 11.225 37.6654 11.667V15.2863C36.8857 15.5325 36.1691 15.9325 35.5732 16.4648C34.5234 17.4025 33.9336 18.6742 33.9336 20.0003C33.9336 21.3264 34.5234 22.5982 35.5732 23.5359C36.1691 24.0682 36.8857 24.4681 37.6654 24.7144V28.3337C37.6654 28.7757 37.4689 29.1996 37.1189 29.5122C36.769 29.8247 36.2944 30.0003 35.7995 30.0003H30.2018ZM28.3359 16.667C29.3664 16.667 30.2018 17.4132 30.2018 18.3337V21.667C30.2018 22.5875 29.3664 23.3337 28.3359 23.3337C27.3054 23.3337 26.47 22.5875 26.47 21.667V18.3337C26.47 17.4132 27.3054 16.667 28.3359 16.667Z"
                fill="#1A88F7"
              />
            </svg>
            <span className="mb-[2px] text-xl">Shop Voucher</span>
          </div>
          <div className="col-span-4 text-xl text-main-color">{shopname}</div>
          <div>
            <button className="text-error text-lg">Change</button>
          </div>
        </div>
        <div className="grid grid-cols-12 col-span-12 border-b-2 border-dashed">
          <div className="col-span-3 border-r-2 border-dashed">
            <div className="flex items-center my-5">
              <div className="m-3">Message:</div>
              <input
                type="text"
                placeholder="Enter Message..."
                className="bg-box-none-focut p-2"
              ></input>
            </div>
          </div>
          <div className="grid grid-cols-4 col-span-9 pt-5 gap-12">
            <span className="col-span-1  text-center">Shipping option:</span>
            <div className="flex flex-col col-span-1">
              <div>Fast</div>
              <div className="text-first-text">Received by 30 Th8 - 1 Th9</div>
            </div>
            <span className="col-span-1 text-main-color text-center">
              Change
            </span>
            <span className="col-span-1 ">{convertPrice(20000)} ₫</span>
          </div>
        </div>
        <div className="flex col-span-12 my-5 mr-3 justify-end gap-2 items-center">
          <div>Order Total ({quantity} item): </div>
          <div className="text-2xl font-semibold">
            {convertPrice(price * quantity)} ₫
          </div>
        </div>
      </div>
    </div>
  );
}

PaymentCard.prototype = {
  image: PropTypes.string.isRequired,
  productName: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  shopname: PropTypes.string.isRequired,
  options: PropTypes.string,
};

export default PaymentCard;
