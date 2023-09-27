import { LazyLoadImage } from "react-lazy-load-image-component";
export const Items = ({ title, products, getStoreItems }) => {
  return (
    <>
      <h1>{title}</h1>
      <ul className="pizzas__list">
        {products.map((prod) => (
          <li className="pizzas__item" key={prod._id}>
            <div className="pizzas__img-box">
              <LazyLoadImage src={prod.image} alt={prod.name} effect="blur" />
            </div>
            <h3>{prod.name}</h3>
            <p>{prod.description}</p>
            <div className="pizzas__down-block">
              <button onClick={() => getStoreItems(prod)}>Выбрать</button>
              <span>от {prod.price} ₽</span>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};
