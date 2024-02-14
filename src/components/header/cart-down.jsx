import { LazyLoadImage } from 'react-lazy-load-image-component';
import { cardDownList } from './constants';

const CartDown = () => {
  return (
    <div className="cartDown">
      <ul className="cartDown__list" id="style-2">
        {cardDownList.map((item) => (
          <li className={`cartDown__item ${item.class}`} key={item.id}>
            <LazyLoadImage src={item.img} alt={`img-${item.id}`} effect="blur" />
            <h3>{item.name}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartDown;
