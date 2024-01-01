import axios from "axios";

const getAddressByUserId = async () => {
  const userID = localStorage.getItem("id-user");
  const res = await axios.get(
    `http://localhost:7777/api/Address/getByUserId?userId=${userID}`
  );
  if (res && res.data) {
    return res.data;
  }
};

const setDefaultAddress = async (addressId) => {
  const res = await axios.put(
    `http://localhost:7777/api/Address/setToDefault?addressId=${addressId}`
  );
  if (res && res.data) {
    return res.data;
  }
};

const createNewAddress = async (address) => {
  const userID = localStorage.getItem("id-user");
  console.log(">>> check address:", address);

  const res = await axios.post(
    `http://localhost:7777/api/Address/createNew?userId=${userID}`,
    {
      ho_va_ten: address.addressName,
      so_dien_thoai: address.addressPhone,
      tinh_thanh_pho: address.addressCity,
      quan_huyen: address.addressDistrict,
      phuong_xa: address.addressWard,
      dia_chi_detail: address.addressDetail,
    }
  );
  if (res && res.data) {
    return res.data;
  }
};

const getAddressDefaul = async () => {
  const userID = localStorage.getItem("id-user");
  const res = await axios.get(
    `http://localhost:7777/api/Address/default_address?user_id=${userID}`
  );
  if (res && res.data) {
    return res.data;
  }
};

export {
  getAddressByUserId,
  setDefaultAddress,
  createNewAddress,
  getAddressDefaul,
};
