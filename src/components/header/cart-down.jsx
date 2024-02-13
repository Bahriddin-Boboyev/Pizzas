import { LazyLoadImage } from 'react-lazy-load-image-component';
import cartDown1 from '../../img/cart-down-1.png';
import cartDown2 from '../../img/cart-down-2.png';

const CartDown = () => {
  return (
    <div className="cartDown">
      <ul className="cartDown__list" id="style-2">
        <li className="cartDown__item">
          <LazyLoadImage src={cartDown1} alt="img-1" effect="blur" />
          <h3>3 средние пиццы от 999 рублей</h3>
        </li>
        <li className="cartDown__item cartDown__item-2">
          <LazyLoadImage src={cartDown2} alt="img-2" effect="blur" />
          <h3>Кэшбек 10% на самовывоз (доставка)</h3>
        </li>
        <li className="cartDown__item">
          <LazyLoadImage src={cartDown1} alt="img-3" effect="blur" />
          <h3>3 средние пиццы от 999 рублей</h3>
        </li>
        <li className="cartDown__item cartDown__item-2">
          <LazyLoadImage src={cartDown2} alt="img-1" effect="blur" />
          <h3>Кэшбек 10% на самовывоз (доставка)</h3>
        </li>
      </ul>
    </div>
  );
};

export default CartDown;
