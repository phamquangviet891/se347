import React, { useEffect, useState } from "react";

import { HiOutlineTicket } from "react-icons/hi2";
import { toast } from "react-toastify";
import { convertPrice } from "../utils/price";

import { removeCart } from "../services/CartServices";
import {
  addItem,
  deleteItem,
  descreaseQuantity,
  increaseQuantity,
  removeItem,
} from "../store/slice/cart";
import DiscountCard from "../components/DiscountCard";
import { listVoucherByCart } from "../services/VoucherServices";
import { useLoaderData, useNavigate } from "react-router-dom";
import CartShopCard from "../components/CartShopCard";
import { useDispatch, useSelector } from "react-redux";
import { getLengthCart } from "../utils/cart";
import { addPayment } from "../store/slice/payment";

const Cart = () => {
  const [selectedCarts, setSelectedCarts] = useState([]);
  const navigate = useNavigate();
  const add = (item) => {
    item.forEach((element) => {
      setSelectedCarts([...selectedCarts, element]);
    });
  };

  const list = useSelector((state) => state.cart.cart);

  const minus = (item) => {
    item.forEach((element) => {
      setSelectedCarts(selectedCarts.filter((e) => e !== element));
    });
  };
  const dispatch = useDispatch();

  let length = useSelector((state) => state.cart.cart).length;

  useEffect(() => {
    if (length === 0) document.getElementById("checkall").checked = false;
  }, [length]);

  const carts = useLoaderData();

  let total = useSelector((state) => state.cart.cart);

  return (
    <div className=" w-screen min-h-[100vh] px-12 py-8 bg-cart-color">
      <div className=" bg-white py-4 px-8 grid grid-cols-12 gap-4 text-first-text">
        <div className=" col-span-4">
          <input
            onChange={(e) => {
              if (e.target.checked) {
                carts.forEach((e) => {
                  e.list_cartItem.forEach((e_) => {
                    dispatch(
                      addItem({ cart_id: e.cart_id, item: e_, shop: e.shop })
                    );
                  });
                });
              } else {
                carts.forEach((e) => {
                  e.list_cartItem.forEach((e_) => {
                    dispatch(removeItem({ cart_id: e.cart_id, item: e_ }));
                  });
                });
              }
            }}
            type="checkbox"
            name="checkall"
            id="checkall"
          />
          <label htmlFor="checkall" className="ml-2">
            Select all
          </label>
        </div>
        <span className=" col-span-2 text-center">Unit productPrice</span>
        <span className=" col-span-1 text-center">Variations</span>
        <span className=" col-span-2 text-center">Quantity</span>
        <span className=" col-span-2 text-center">Total</span>
        <span className="text-center">Delete</span>
      </div>

      <div className="w-full flex flex-col gap-8">
        {carts.length > 0 &&
          carts.map((item, index) => {
            return <CartShopCard shop={item} key={index} />;
          })}
      </div>

      <div className=" bg-white text-first-text mt-8">
        <div className="px-12 py-4 w-full flex justify-end items-center border-dashed border-b border-second-text">
          <span className=" text-black font-semibold mr-12">TAKA Voucher</span>
          <div className=" text-main-color font-semibold">
            <div className="ml-2 flex items-center gap-2 hover:cursor-pointer">
              <HiOutlineTicket size={30} />
              Select or enter code
            </div>
          </div>
        </div>
        <div className="px-6 py-8 w-full flex justify-between items-center ">
          <div className="flex items-center">
            <div className="flex items-center">
              <input type="checkbox" name="select-all" />
              <span className="ml-2">Select All ({getLengthCart(carts)})</span>
            </div>
            <button className="ml-6">Delete All</button>
            <button className="ml-6 text-favorite">Add to Favourite</button>
          </div>
          <div className="flex items-center">
            <div className=" font-semibold">
              Total <span>({getLengthCart(total)} items)</span>:
            </div>
            <span className=" text-black font-bold text-xl ml-2">
              {/* {convertPrice(getTotal())}đ */}
            </span>
            <button
              onClick={() => {
                if (list.length > 0) {
                  dispatch(addPayment({ cart: list }));
                  navigate("/payment");
                } else toast.error("Bạn chưa chọn sản phẩm nào");
              }}
              className="ml-4 px-12 py-2 rounded-lg bg-main-color text-white font-semibold text-center"
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

{
  /* <div className=" bg-white text-first-text mt-8">
  <div className="py-4 px-8 border-b border-second-text flex items-center">
    <input type="checkbox" name="checkall" id="" />
    <label
      htmlFor="checkall"
      className="ml-2 px-2 py-1 bg-main-color text-white rounded-lg text-center w-fit flex items-center"
    >
      <AiFillShop className=" inline-block mr-1" size={20} />
      <span>TAKA Mall</span>
    </label>
    <RiMessage2Line className=" text-main-color ml-2" size={20} />
  </div>
  <div className="px-4 py-8">
    <div className="border border-second-text grid grid-cols-1 gap-4 py-4 px-2">
      {carts.map((item, index) => {
              return (
                <div key={index} className="grid grid-cols-11 gap-4">
                  <div className=" col-span-4 flex items-center justify-start">
                    <input type="checkbox" name="checkall" id="" />
                    <div className="flex ml-4">
                      <div className=" cursor-pointer">
                        <img src={item.img} className=" w-36" alt="" />
                      </div>
                      <div className="ml-4">
                        <h3 className=" text-black font-semibold">
                          {item.title}
                        </h3>
                        <p>{item.brand_author}</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-2 text-center flex flex-col justify-center">
                    <p className=" text-black font-semibold text-xl h-fit">
                      {item.price_discount}đ
                    </p>
                    <p className=" line-through h-fit">{item.discount} </p>
                  </div>
                  <div className="col-span-2 flex items-center justify-center">
                    <div className="inline-flex flex-row items-center text-black">
                      <div className="hover:text-black w-9 h-9 bg-white border-2 hover:bg-gray-100 cursor-pointer rounded-l-[5px] border-first-text flex items-center justify-center">
                        <div>-</div>
                      </div>
                      <div className=" text-lg font-semibold w-10 h-9 text-center border-t-2 border-b-2 border-collapse  border-first-text flex items-center justify-center">
                        <div>1</div>
                      </div>
                      <div className="hover:text-black w-9 h-9 bg-white border-2 hover:bg-gray-100 cursor-pointer rounded-r-[5px]  border-first-text flex items-center justify-center">
                        <div>+</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-2 text-center text-main-color font-semibold text-xl flex items-center justify-center">
                    <span>{item.price_discount}</span>đ
                  </div>
                  <div className=" flex items-center justify-center cursor-pointer hover:text-black">
                    <ImBin size={25} />
                  </div>
                </div>
              );
            })}
      <p className=" pl-2 py-4 text-xl text-black font-semibold">
        Chưa có sản phẩm....
      </p>
    </div>
  </div>
  <div className="px-6 py-4 border-t border-second-text ">
    <button className="flex items-center text-main-color font-semibold">
      <HiOutlineTicket size={30} />
      <span className="ml-2">Shop Voucher</span>
    </button>
  </div>
</div>; */
}
