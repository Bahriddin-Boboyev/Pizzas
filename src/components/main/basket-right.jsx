import { useState, useEffect, useContext } from 'react';
import './main.scss';
import { Link } from 'react-router-dom';
import { storeTotalCost, clickStoreProduct, storeItemsCount } from '@/helpers';
import { DataContext } from '@/context';
import { useAxiosFunction } from '@/hooks';
import { Icons } from '@/img';

const BasketRight = () => {
  const { context, showBasket, getStoreItems } = useContext(DataContext);
  // eslint-disable-next-line
  const [data, error, loading, axiosFetch] = useAxiosFunction();
  let prods = JSON.parse(localStorage.getItem('cart'));
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const uniqueProducts = Array.from(new Set(prods?.map((prod) => prod._id))).map((id) =>
      prods?.find((prod) => prod._id === id),
    );
    setProducts(uniqueProducts);
    // eslint-disable-next-line
  }, [context]);

  return (
    <div className={`basket-right ${context?.basket ? 'flex' : ''}`}>
      {error ? (
        <h2 className="error_msg basket__right--error">{JSON.stringify(error)}</h2>
      ) : (
        <>
          <div className="basket-right__box">
            <h3>Ваш заказ</h3>
            <img
              src={Icons.basketClose}
              alt=" basket"
              className="basket-right__svg"
              onClick={() => showBasket(false)}
            />
          </div>
          <ul className="basket-right__content">
            {!prods?.length ? (
              <lottie-player
                class="anime_father"
                src="https://lottie.host/19d8ab04-73aa-4591-b3ce-5452e0e9f640/9lJD396bxj.json"
                background="transparent"
                speed="1"
                style={{
                  marginTop: '50%',
                  width: '100%',
                }}
                loop
                autoplay
              ></lottie-player>
            ) : (
              products?.map((prod) =>
                storeItemsCount(prod._id, prods) > 0 ? (
                  <li className="basket-right__item" key={prod._id}>
                    <img src={prod.image} alt={prod.name} />
                    <div className="basket-right__info">
                      <h4>{prod.description}</h4>
                      <p>{prod.description}</p>
                      <div className="basket-right__btn-box">
                        <button
                          onClick={() => clickStoreProduct({ item: prod, type: 'decrement' }, prods, getStoreItems)}
                        >
                          -
                        </button>
                        <span className="basket-right__input">{storeItemsCount(prod._id, prods)}</span>
                        <button
                          onClick={() => clickStoreProduct({ item: prod, type: 'increment' }, prods, getStoreItems)}
                        >
                          +
                        </button>
                      </div>
                      <span>{prod.price} ₽</span>
                    </div>
                  </li>
                ) : (
                  ''
                ),
              )
            )}
          </ul>
          <div className="basket-right__footer">
            <span>Итого: {storeTotalCost(prods)} ₽</span>
            <Link className="on" to={'/basket'} onClick={() => showBasket(false)}>
              Оформить заказ
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default BasketRight;
