export const storeTotalCount = (prods) => {
  if (!prods?.length) {
    return 0;
  }
  return prods?.length;
};
