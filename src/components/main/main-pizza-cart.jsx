import './main.scss';
import { useContext, useState, useEffect } from 'react';
import { DataContext } from '@/context';
import { useAxiosFunction } from '@/hooks';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { MainSkeleton } from '../';
import { toast } from 'react-toastify';
import { getProducts } from '@/helpers';

const MainPizzaCart = () => {
  const { context, getStoreItems } = useContext(DataContext);
  const [data, error, loading, axiosFetch] = useAxiosFunction();
  const [products, setProducts] = useState([]);
  const maxItemsPerCategory = 8;

  useEffect(() => {
    getProducts(axiosFetch, 'all');
  }, []);

  const prod = data?.data?.products;
  useEffect(() => {
    setProducts(prod);
  }, [data]);

  const categories = [...new Set(products?.map((item) => item.category.name))];

  const handleClick = (product) => {
    getStoreItems(product);
    toast.info('The product has been added to the basket.');
  };

  return (
    <div className="mainPizza">
      {error && <h2 className="error_msg">{JSON.stringify(error)}</h2>}
      {loading ? (
        <ul className="mainPizza__list--loading">
          {new Array(4).fill(0).map((item, index) => (
            <li key={`${index}${Date.now()}`} className="mainPizza__list--loading">
              <MainSkeleton />
            </li>
          ))}
        </ul>
      ) : (
        <>
          {categories.map((category) => (
            <div key={category} className="mainPizza__top_box">
              <div className="mainPizza_head">
                <h2>{category}</h2>
                <button className="none">Фильтры</button> {/* xozircha mavjud emas qo'shishim kerak */}
              </div>
              <ul className="mainPizza__list">
                {products
                  ?.filter((item) => item.category.name === category)
                  .slice(0, maxItemsPerCategory)
                  .map((product) => (
                    <li key={product._id} className="mainPizza__item">
                      <div className="mainPizza__img-box">
                        <LazyLoadImage src={product.image} alt={product.name} effect="blur" />
                      </div>
                      <h3>{product.name}</h3>
                      <p>{product.description}</p>
                      <div className="mainPizza__down-block">
                        <button onClick={() => handleClick(product)}>Выбрать</button>
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
