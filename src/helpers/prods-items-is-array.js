import { storeItemsCount } from "./store-items-count";

export const prodsItemsIsArray = (products, prods) => {
  let prodItems = [];
  products?.map((prod) =>
    prodItems.push({
      id: prod._id,
      count: storeItemsCount(prod._id, prods),
    }),
  );
  return prodItems;
};
