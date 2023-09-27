import "./index.scss";
import { useEffect, useState, useContext } from "react";
import BasketOrder from "../components/main/basket-order";
import About from "../components/main/about";
import Delivery from "../components/main/delivery";
import { getProducts, useAxiosFunction, useInputValue } from "../hooks/";
import { DataContext } from "../context";
import { clickStoreProduct, storeItemsCount, storeTotalCost } from "../helpers";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const inputs = {
  name: "",
  number: "",
  email: "",
  ulitsa: "",
  home: "",
  podez: "",
  etaj: "",
  kvartira: "",
  domafon: "",
  delivery_type: "delivery",
  delivery_time: "soon",
};

const Basket = () => {
  let prods = JSON.parse(localStorage.getItem("cart"));
  const [products, setProducts] = useState([]);
  const { context, getStoreItems, getSubmitInputValues } =
    useContext(DataContext);
  // eslint-disable-next-line
  const [data, error, loading, axiosFetch] = useAxiosFunction();
  const { value, change } = useInputValue(inputs);
  const navigate = useNavigate();

  useEffect(() => {
    getProducts(axiosFetch);
  }, []);

  // unique product
  useEffect(() => {
    const uniqueProducts = Array.from(
      new Set(prods?.map((prod) => prod._id)),
    ).map((id) => prods?.find((prod) => prod._id === id));
    setProducts(uniqueProducts);
    // eslint-disable-next-line
  }, [context]);

  // short url
  const items = data?.data?.products;
  const totalProdsCost = storeTotalCost(
    JSON.parse(localStorage.getItem("cart")),
  );
  const isToken = localStorage.getItem("token");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!isToken)
      return toast.error(
        "Products tasdiqlash uchun iltimos ro'yxatdan o'ting!",
      );
    console.log(isToken);
    getSubmitInputValues();
    console.log(value);
    console.log(context.values);
    let prodItems = [];
    products.map((prod) =>
      prodItems.push({
        id: prod._id,
        count: storeItemsCount(prod._id, prods),
      }),
    );
    console.log(prodItems);
    navigate("/order");
  };

  return (
    <div className="basket">
      {error ? (
        <h2 className="error_msg">{JSON.stringify(error)}</h2>
      ) : (
        <div className="basket__box">
          <h1 className="basket__title">Ваш заказ</h1>
          {!prods?.length ? (
            <div className="basket__not-fount--box">
              <div>
                <h1>Товар не найден!</h1>
              </div>
            </div>
          ) : (
            <>
              <ul className="basket__list">
                {products?.map((prod) =>
                  storeItemsCount(prod._id, prods) > 0 ? (
                    <li className="basket__item" key={prod._id}>
                      <div className="basket__img--block">
                        <img src={prod.image} alt={prod.name} />
                      </div>
                      <div className="basket__second--box">
                        <div className="basket__description--block">
                          <h3>{prod.description}</h3>
                          <p>{prod.description}</p>
                        </div>
                        <div className="basket__button-price--box">
                          <div>
                            <button
                              onClick={() =>
                                clickStoreProduct(
                                  { item: prod, type: "decrement" },
                                  prods,
                                  getStoreItems,
                                )
                              }
                            >
                              -
                            </button>
                            <span>{storeItemsCount(prod._id, prods)}</span>
                            <button
                              onClick={() =>
                                clickStoreProduct(
                                  { item: prod, type: "increment" },
                                  prods,
                                  getStoreItems,
                                )
                              }
                            >
                              +
                            </button>
                          </div>
                          <h4>{prod.price} ₽</h4>
                        </div>
                      </div>
                    </li>
                  ) : (
                    ""
                  ),
                )}
              </ul>
              <div className="basket__promo-box">
                <form className="basket__form-box">
                  <input
                    type="text"
                    className="basket__input"
                    placeholder="Промокод"
                    required
                  />

                  <button type="submit"></button>
                </form>
                <h4>Итого: {storeTotalCost(prods)} ₽</h4>
              </div>
              <BasketOrder
                data={items}
                title="Добавить к заказу?"
                category={"Закуски"}
                getStoreItems={getStoreItems}
              />
              <BasketOrder
                data={items}
                title="Соусы"
                category={"Соусы"}
                getStoreItems={getStoreItems}
              />
              <form className="basket__form" onSubmit={handleSubmit}>
                <About value={value} change={change} />
                <Delivery value={value} change={change} />
                <div className="delivery__checkout">
                  <h3>Итого: {totalProdsCost} ₽</h3>
                  <button type="submit" className="btn">
                    Оформить заказ
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Basket;
