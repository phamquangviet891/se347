import axios from "axios";

const listVoucherByCart = async (cartId) => {
  const res = await axios.get(
    `http://localhost:7777/api/Voucher/listByCart?cart_id=${cartId}`
  );
  if (res && res.data) {
    return res.data;
  }
};

const listVoucherByShop = async (shop_id) => {
  const res = await axios.get(
    `http://localhost:7777/api/Voucher/listByShop?shop_id=${shop_id}`
  );
  if (res && res.data) {
    return res.data;
  }
};
const getVouchersByShop = async (shop_id, page = 1, page_size = 12) => {
  const res = await axios.get("http://localhost:7777/api/Voucher/byShop", {
    params: { shop_id: shop_id, page: page, page_size: page_size },
  });
  if (res.status == 200) return res.data;
};

const createVoucher = async (
  shop_id,
  title,
  public_date,
  expire_date,
  discountAmount,
  minimum_order_price,
  image,
  type,
  list_product_applied
) => {
  const res = await axios.post(
    `http://localhost:7777/api/Voucher/createNew?shop_id=${shop_id}`,
    {
      title: title,
      public_date: public_date,
      expire_date: expire_date,
      discountAmount: discountAmount,
      minimum_order_price: minimum_order_price,
      image: image,
      type: type,
      list_product_applied: list_product_applied,
    }
  );
  if (res && res.data) {
    return res.data;
  }
};

export {
  listVoucherByCart,
  listVoucherByShop,
  createVoucher,
  getVouchersByShop,
};
