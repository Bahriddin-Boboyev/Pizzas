export const storeTotalCost = (prods) => {
  if (!prods?.length) {
    return 0;
  }
  return prods.reduce((total, item) => (total += item.price), 0);
};
