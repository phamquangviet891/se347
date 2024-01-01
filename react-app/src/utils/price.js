const convertPrice = (price) => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};

const convertNumber = (price) => {
  return price.toString().replaceAll(",", "");
};

export { convertNumber, convertPrice };
