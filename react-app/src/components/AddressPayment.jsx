import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  getAddressByUserId,
  getAddressDefaul,
} from "../services/AddressServices";

const AddressPayment = (props) => {
  const [list, setList] = useState([]);
  const [defaultAddress, setDefaulAddress] = useState(null);
  const [address, setAddress] = useState(null);
  useEffect(() => {
    const getData = async () => {
      let address = await getAddressByUserId();
      let defaul = await getAddressDefaul();
      if (defaul?.ho_va_ten === null) setDefaulAddress(address[0]);
      else setDefaulAddress(defaul);
      setList(address);
    };

    getData();
  }, []);

  useEffect(() => {
    if (defaultAddress) setAddress(defaultAddress);
  }, [defaultAddress, setDefaulAddress]);

  return (
    <div className="bg-white flex flex-col w-full px-8 py-6 gap-2">
      <div className="flex text-main-color text-2xl items-center">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 4C10.6156 4 9.26219 4.41053 8.11105 5.17969C6.95991 5.94884 6.06271 7.04207 5.53288 8.32113C5.00306 9.60019 4.86441 11.0076 5.13448 12.3655C5.40454 13.7233 6.07115 14.9706 7.05003 15.9495C7.04999 15.9495 7.05006 15.9496 7.05003 15.9495L11.294 20.1925C11.3867 20.2853 11.4972 20.3593 11.6184 20.4095C11.7395 20.4598 11.8694 20.4856 12.0005 20.4856C12.1316 20.4856 12.2615 20.4598 12.3827 20.4095C12.5038 20.3593 12.6139 20.2857 12.7065 20.193L16.9499 15.9496C16.9499 15.9496 16.9499 15.9496 16.9499 15.9496C17.9288 14.9706 18.5955 13.7233 18.8655 12.3655C19.1356 11.0076 18.997 9.60019 18.4671 8.32113C17.9373 7.04207 17.0401 5.94884 15.889 5.17969C14.7378 4.41053 13.3845 4 12 4ZM6.99992 3.51674C8.47995 2.52783 10.22 2 12 2C13.78 2 15.5201 2.52783 17.0001 3.51674C18.4801 4.50565 19.6337 5.91123 20.3149 7.55574C20.9961 9.20025 21.1743 11.0098 20.8271 12.7556C20.4799 14.5015 19.6228 16.1051 18.3641 17.3638L14.1215 21.6065C14.1213 21.6066 14.1216 21.6063 14.1215 21.6065C13.8431 21.885 13.5123 22.1063 13.1485 22.2571C12.7845 22.408 12.3945 22.4856 12.0005 22.4856C11.6066 22.4856 11.2165 22.408 10.8525 22.2571C10.4886 22.1063 10.158 21.8852 9.87955 21.6065L5.63598 17.3639C4.37735 16.1052 3.52013 14.5015 3.1729 12.7556C2.82567 11.0098 3.00393 9.20025 3.68513 7.55574C4.36633 5.91123 5.51989 4.50565 6.99992 3.51674Z"
            fill="#1A88F7"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 9C11.4696 9 10.9609 9.21071 10.5858 9.58579C10.2107 9.96086 10 10.4696 10 11C10 11.5304 10.2107 12.0391 10.5858 12.4142C10.9609 12.7893 11.4696 13 12 13C12.5304 13 13.0391 12.7893 13.4142 12.4142C13.7893 12.0391 14 11.5304 14 11C14 10.4696 13.7893 9.96086 13.4142 9.58579C13.0391 9.21071 12.5304 9 12 9ZM9.17157 8.17157C9.92172 7.42143 10.9391 7 12 7C13.0609 7 14.0783 7.42143 14.8284 8.17157C15.5786 8.92172 16 9.93913 16 11C16 12.0609 15.5786 13.0783 14.8284 13.8284C14.0783 14.5786 13.0609 15 12 15C10.9391 15 9.92172 14.5786 9.17157 13.8284C8.42143 13.0783 8 12.0609 8 11C8 9.93913 8.42143 8.92172 9.17157 8.17157Z"
            fill="#1A88F7"
          />
        </svg>
        Address
      </div>
      <div className="grid grid-cols-12 gap-24">
        <div className="text-lg font-semibold flex items-center col-span-3">
          {address ? (
            <p className=" whitespace-nowrap">
              {address.ho_va_ten} <span>{address.so_dien_thoai}</span>
            </p>
          ) : (
            "..."
          )}
        </div>

        <select
          defaultValue={defaultAddress ? defaultAddress : null}
          onChange={(e) => {
            setAddress(list.filter((e_) => e_.address_ID == e.target.value)[0]);
          }}
          className="w-full col-span-9 px-4 py-2 outline-none text-xl"
        >
          {address && (
            <option value={address.address_ID} disabled hidden>
              {address.dia_chi_full}
            </option>
          )}
          {list &&
            list.map((item, index) => {
              return (
                <option value={item.address_ID} key={index}>
                  {item.dia_chi_full}
                </option>
              );
            })}
        </select>
        {/* <div>
          <button className="text-error text-lg">Change</button>
        </div> */}
      </div>
    </div>
  );
};

AddressPayment.propTypes = {};

export default AddressPayment;
