const karateShop = (value, array) => {
  return array.findIndex(element => element === value) || -1;
};

module.exports = karateShop;
