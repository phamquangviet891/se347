import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { HiOutlineTicket } from "react-icons/hi2";
import { listVoucherByCart } from "../services/VoucherServices";
import { useDispatch } from "react-redux";
import cart, { addVoucher } from "../store/slice/cart";

const VoucherCart = ({ cartID, setVoucher, getVoucher }) => {
  const [voucher_, setVoucher_] = useState([]);
  const [voucherItem, setVoucherItem] = useState(null);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    let getData = async () => {
      await listVoucherByCart(cartID).then((rs) => setVoucher_(rs));
      if (getVoucher() !== null) {
        document.getElementsByName("voucher").forEach((e) => {
          if (e.id == getVoucher().voucher_ID) {
            e.checked = true;
          }
        });
      }
    };
    if (open) getData();
  }, [open]);

  const check = (element, item) => {
    //console.log(item);
    document.getElementsByName("voucher").forEach((e) => {
      if (e !== element) e.checked = false;
      else {
        e.checked = true;
        setVoucherItem(item);
      }
    });
  };

  const handleSubmit = () => {
    if (voucherItem === null) setOpen(false);
    else {
      dispatch(
        addVoucher({ cart_id: cartID, voucher: voucherItem })
      );
      setVoucher(voucherItem);
      setOpen(false);
    }
  };

  return (
    <div className=" relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center text-main-color font-semibold "
      >
        <HiOutlineTicket size={30} />
        <span className="ml-2">Shop Voucher</span>
      </button>
      {open && (
        <div className=" absolute bottom-full left-0 px-4 py-6 bg-white z-[999] rounded-lg shadow-md shadow-black w-[25.5rem]">
          <div className="flex flex-col gap-3 overflow-hidden">
            <div className="flex flex-col gap-3 overflow-scroll no-scrollbar max-h-[11rem]">
              {voucher_.length > 0
                ? voucher_.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className="border border-main-color flex items-center gap-0"
                      >
                        <div className="p-3  flex items-center h-[5rem] gap-3 whitespace-nowrap border-r border-dashed border-black min-w-[18rem]">
                          <img
                            src="http://localhost:3000/src/assets/pictures/image%2055.png"
                            className="h-full aspect-square"
                            alt=""
                          />
                          <div className="flex flex-col justify-between  items-start h-full w-full">
                            <p>{item.title}</p>
                            <p className=" text-xs">
                              Min. Spend {item.minimum_order_price}k
                            </p>
                            <p className=" text-sm truncate">
                              Valid until: {item.expire_date}
                            </p>
                          </div>
                        </div>
                        <div className="flex justify-center items-center px-10 ">
                          <input
                            id={item.voucher_ID}
                            type="checkbox"
                            onChange={(e) => check(e.target, item)}
                            name="voucher"
                            className=""
                          />
                        </div>
                      </div>
                    );
                  })
                : "No voucher"}
            </div>
            <div className="flex justify-end items-center gap-4 mt-4">
              <button
                className="w-[6rem] text-center py-2 border border-main-color text-main-color"
                onClick={() => setOpen(false)}
              >
                Back
              </button>
              {voucher_.length > 0 && (
                <button
                  className="w-[6rem] text-center py-2 bg-main-color text-white"
                  onClick={() => handleSubmit()}
                >
                  OK
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

VoucherCart.propTypes = {
  cartID: PropTypes.number.isRequired,
  setVoucher: PropTypes.func.isRequired,
  getVoucher: PropTypes.func.isRequired,
};

export default VoucherCart;
