const getLengthCart = (carts) => {
  let sum = 0;
  carts.forEach((element) => {
    element.list_cartItem.forEach((element_) => {
      sum += element_.quantity;
    });
  });

  return sum;
};

const getLengthShop = (carts) => {
  let sum = 0;
  carts.forEach((element) => {
    sum += element.quantity;
  });

  return sum;
};

const getTotalShop = (carts) => {
  let sum = 0;
  carts.list_cartItem.forEach((element) => {
    sum += element.quantity * element.productSalePrice;
  });
  console.log(carts);
  return sum;
};

const getCostVoucher = (voucher, total) => {
  let discountAmount = voucher.discountAmount;
  if (discountAmount >= 100) return total - discountAmount;
  else return (total * discountAmount) / 100;
};

export { getLengthCart, getTotalShop, getCostVoucher, getLengthShop };
