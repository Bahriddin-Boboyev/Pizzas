import React from "react";
import "./main.scss";

const MainPizzaCart = ({
  products,
  error,
  loading,
  maxItemsPerCategory,
  getStoreItems,
}) => {
  const categories = [...new Set(products?.map((item) => item.category.name))];

  return (
    <div className="mainPizza">
      {error && <p>{JSON.stringify(error)}</p>}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {categories.map((category) => (
            <div key={category} className="mainPizza__top_box">
              <div className="mainPizza_head">
                <h2>{category}</h2>
                <button>Фильтры</button>
              </div>
              <ul className="mainPizza__list">
                {products
                  ?.filter((item) => item.category.name === category)
                  .slice(0, maxItemsPerCategory)
                  .map((product) => (
                    <li key={product._id} className="mainPizza__item">
                      <div className="mainPizza__img-box">
                        <img src={product.image} alt="img" />
                      </div>
                      <h3>
                        {product.name.length > 15
                          ? `${product.name.slice(0, 15)}...`
                          : product.name}
                      </h3>
                      <p>
                        {product.description.length > 15
                          ? `${product.description.slice(0, 30)}...`
                          : product.description}
                      </p>
                      <div className="mainPizza__down-block">
                        <button onClick={() => getStoreItems(product)}>
                          Выбрать
                        </button>
                        <span>от {product.price} ₽</span>
                      </div>
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default MainPizzaCart;
/* {products?.loading || !products?.prod ? <p>Loading....</p> : ""} */

/* <div className="mainPizza__top_box">
            <h2>
             
            </h2>
            <button>Фильтры</button>
          </div>
          <ul className="mainPizza__list">
            {products.map((product) => (
              <li key={product._id} className="mainPizza__item">
                <div className="mainPizza__img-box">
                  <img src={product.image} alt="img" />
                </div>
                <h3>
                 
                  {product.name.length > 15
                    ? `${product.name.slice(0, 15)}...`
                    : product.name}
                </h3>
                <p>
                  {product.description.length > 15
                    ? `${product.description.slice(0, 30)}...`
                    : product.description}
                </p>
                <div className="mainPizza__down-block">
                  <button>Выбрать</button>
                  <span>от {product.price} ₽</span>
                </div>
              </li>
            ))}
          </ul>
        </>
      )} */
