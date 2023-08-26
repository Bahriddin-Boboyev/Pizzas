// items count
export const storeItemsCount = (id, prods) => {
  const count = prods?.filter((item) => item._id === id).length;
  return count;
};
