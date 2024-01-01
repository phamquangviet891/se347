import React from "react";
import PaymentCard from "../components/PaymentCard";
import { convertPrice } from "../utils/price";
import { ImRadioChecked } from "react-icons/im";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import CartShopCard from "../components/CartShopCard";
import PaymentShopCard from "../components/PaymentShopCard";
import AddressPayment from "../components/AddressPayment";

function Payment() {
  const [selectedOption, setSelectedOption] = useState("");
  const data = useLoaderData();
  console.log(">>> check payment:", data);
  const total = () => {
    let sum = 0;
    data.forEach((item) => {
      let tmp = item.list_cartItem.reduce((accumulator, currentItem) => {
        return (
          accumulator + currentItem.quantity * currentItem.productSalePrice
        );
      }, 0);
      sum += tmp;
    });
    return sum;
  };

  return (
    <div className="w-screen min-h-[100vh] px-12 py-8 bg-blue-50">
      <div className="flex flex-col justify-center items-center gap-8">
        <AddressPayment />
        <div className="bg-white grid grid-cols-12 gap-4 w-full  p-3 items-end">
          <span className=" col-span-5 text-first-text text-2xl ml-3">
            Product Ordered
          </span>
          <span className=" col-span-2 text-center">Variations</span>
          <span className=" col-span-2 text-center">Unit Price</span>
          <span className=" col-span-1 text-center">Quantity</span>
          <span className=" col-span-2 text-center">Total</span>
        </div>
        <div className="flex flex-col gap-8">
          {data.length > 0 &&
            data.map((item, index) => {
              return <PaymentShopCard shop={item} key={index} />;
            })}
        </div>
        <div className="grid grid-cols-12 col-span-12 py-4 pl-10 bg-white w-full">
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
            <span className="mb-[2px] text-xl">TAKA Voucher</span>
          </div>
          <div className="col-span-4 text-xl text-main-color">TAKA10%</div>
          <div>
            <button className="text-error text-lg">Change</button>
          </div>
        </div>
        <div className=" bg-white w-full">
          <div className="grid grid-cols-12 p-7">
            <div className="text-xl col-span-4 font-bold">Payment Method</div>
            <div className="flex justify-start col-span-8 gap-3">
              <label className="cursor-pointer">
                <input
                  type="radio"
                  value="delivery"
                  className="peer sr-only"
                  name="delivery"
                  onChange={(e) => setSelectedOption(e.target.value)}
                />
                <div className="relative flex justify-around w-[140px] ring-1 hover:text-main-color hover:ring-main-color text-first-text border-first-text peer-checked:text-main-color peer-checked:ring-main-color peer-checked:ring-offset-1 p-0">
                  <div>Cash on Delivery</div>
                  <div className="absolute top-[-1px] right-[-1px]">
                    {selectedOption === "delivery" ? (
                      <svg
                        width="9"
                        height="10"
                        viewBox="0 1 9 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.59375 0.831055H1.40625C1.2334 0.831055 1.09375 0.970703 1.09375 1.14355V8.33105C1.09375 8.50391 1.2334 8.64355 1.40625 8.64355H8.59375C8.7666 8.64355 8.90625 8.50391 8.90625 8.33105V1.14355C8.90625 0.970703 8.7666 0.831055 8.59375 0.831055ZM6.79199 3.30859L4.73535 6.16016C4.70661 6.20028 4.66871 6.23297 4.62481 6.25552C4.58091 6.27807 4.53227 6.28984 4.48291 6.28984C4.43355 6.28984 4.38491 6.27807 4.34101 6.25552C4.29711 6.23297 4.25921 6.20028 4.23047 6.16016L3.0127 4.47266C2.97559 4.4209 3.0127 4.34863 3.07617 4.34863H3.53418C3.63379 4.34863 3.72852 4.39648 3.78711 4.47852L4.48242 5.44336L6.01758 3.31445C6.07617 3.2334 6.16992 3.18457 6.27051 3.18457H6.72852C6.79199 3.18457 6.8291 3.25684 6.79199 3.30859Z"
                          fill="#1A88F7"
                        />
                      </svg>
                    ) : (
                      <div style={{ width: "9px", height: "10px" }}></div>
                    )}
                  </div>
                </div>
              </label>
              <label className="cursor-pointer">
                <input
                  type="radio"
                  value="credit"
                  className="peer sr-only"
                  name="delivery"
                  onChange={(e) => setSelectedOption(e.target.value)}
                />
                <div className="relative flex justify-around w-[140px] ring-1 hover:text-main-color hover:ring-main-color text-first-text border-first-text peer-checked:text-main-color peer-checked:ring-main-color peer-checked:ring-offset-1 p-0">
                  <div>Credit/Debit Card</div>
                  <div className="absolute top-[-1px] right-[-1px]">
                    {selectedOption === "credit" ? (
                      <svg
                        width="9"
                        height="10"
                        viewBox="0 1 9 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.59375 0.831055H1.40625C1.2334 0.831055 1.09375 0.970703 1.09375 1.14355V8.33105C1.09375 8.50391 1.2334 8.64355 1.40625 8.64355H8.59375C8.7666 8.64355 8.90625 8.50391 8.90625 8.33105V1.14355C8.90625 0.970703 8.7666 0.831055 8.59375 0.831055ZM6.79199 3.30859L4.73535 6.16016C4.70661 6.20028 4.66871 6.23297 4.62481 6.25552C4.58091 6.27807 4.53227 6.28984 4.48291 6.28984C4.43355 6.28984 4.38491 6.27807 4.34101 6.25552C4.29711 6.23297 4.25921 6.20028 4.23047 6.16016L3.0127 4.47266C2.97559 4.4209 3.0127 4.34863 3.07617 4.34863H3.53418C3.63379 4.34863 3.72852 4.39648 3.78711 4.47852L4.48242 5.44336L6.01758 3.31445C6.07617 3.2334 6.16992 3.18457 6.27051 3.18457H6.72852C6.79199 3.18457 6.8291 3.25684 6.79199 3.30859Z"
                          fill="#1A88F7"
                        />
                      </svg>
                    ) : (
                      <div style={{ width: "9px", height: "10px" }}></div>
                    )}
                  </div>
                </div>
              </label>
              <label className="cursor-pointer">
                <input
                  type="radio"
                  value="taka"
                  className="peer sr-only"
                  name="delivery"
                  onChange={(e) => setSelectedOption(e.target.value)}
                />
                <div className="relative flex justify-around w-[140px] ring-1 text-center hover:text-main-color hover:ring-main-color text-first-text border-first-text peer-checked:text-main-color peer-checked:ring-main-color peer-checked:ring-offset-1 p-0">
                  <div>TAKAPay</div>
                  <div className="absolute top-[-1px] right-[-1px]">
                    {selectedOption === "taka" ? (
                      <svg
                        width="9"
                        height="10"
                        viewBox="0 1 9 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.59375 0.831055H1.40625C1.2334 0.831055 1.09375 0.970703 1.09375 1.14355V8.33105C1.09375 8.50391 1.2334 8.64355 1.40625 8.64355H8.59375C8.7666 8.64355 8.90625 8.50391 8.90625 8.33105V1.14355C8.90625 0.970703 8.7666 0.831055 8.59375 0.831055ZM6.79199 3.30859L4.73535 6.16016C4.70661 6.20028 4.66871 6.23297 4.62481 6.25552C4.58091 6.27807 4.53227 6.28984 4.48291 6.28984C4.43355 6.28984 4.38491 6.27807 4.34101 6.25552C4.29711 6.23297 4.25921 6.20028 4.23047 6.16016L3.0127 4.47266C2.97559 4.4209 3.0127 4.34863 3.07617 4.34863H3.53418C3.63379 4.34863 3.72852 4.39648 3.78711 4.47852L4.48242 5.44336L6.01758 3.31445C6.07617 3.2334 6.16992 3.18457 6.27051 3.18457H6.72852C6.79199 3.18457 6.8291 3.25684 6.79199 3.30859Z"
                          fill="#1A88F7"
                        />
                      </svg>
                    ) : (
                      <div style={{ width: "9px", height: "10px" }}></div>
                    )}
                  </div>
                </div>
              </label>
            </div>
          </div>
          <div className="grid grid-cols-12 p-7">
            <div className="col-span-4">Cash on Delivery</div>
            <div className="col-span-8">
              You will be charged extra {convertPrice(0)} ₫ for this payment
              method
            </div>
          </div>
          <div className="flex justify-end border-y-2 border-dashed py-5 px-8">
            <div className="grid grid-cols-2 gap-2">
              <div className="grid justify-items-start text-first-text text-lg">
                Product cost
              </div>
              <div className="grid justify-items-end">
                {convertPrice(total())} ₫
              </div>
              <div className="grid justify-items-start text-first-text text-lg">
                Shipping total
              </div>
              <div className="grid justify-items-end">
                {convertPrice(35000)} ₫
              </div>
              <div className="grid justify-items-start text-first-text text-lg">
                Discount
              </div>
              <div className="grid justify-items-end">
                -{convertPrice(33600)} ₫
              </div>
              <div className="grid justify-items-start text-main-color text-2xl">
                Total payment
              </div>
              <div className="grid justify-items-end text-xl font-bold text-main-color">
                {convertPrice(total() - 33600 + 35000)} ₫
              </div>
            </div>
          </div>
          <div className="flex justify-end p-7">
            <button className="min-w-[200px] min-h-[40px] rounded-md bg-main-color text-white text-xl font-bold">
              Place order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
