// click function
export const clickStoreProduct = async (
  { item, type },
  prods,
  getStoreItems,
) => {
  let newProds = [...prods];
  if (type === "increment") {
    getStoreItems(item);
  } else if (type === "decrement") {
    const prodToDecrement = newProds.find((prod) => prod._id === item._id);
    if (prodToDecrement) {
      const index = newProds.indexOf(prodToDecrement);
      newProds.splice(index, 1);
      getStoreItems(item._id, newProds);
    }
  }
};
