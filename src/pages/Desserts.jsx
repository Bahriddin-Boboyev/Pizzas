import React, { useEffect, useState, useContext } from 'react';
import { useAxiosFunction } from '@/hooks';
import { useScrollFixed, getCategory, getProducts } from '@/helpers';
import { DataContext } from '@/context';
import { Items, MainSkeleton } from '@/components';

export const Desserts = () => {
  const [data, error, loading, axiosFetch] = useAxiosFunction();
  const [data2, error2, loading2, axiosFetch2] = useAxiosFunction();
  const { getStoreItems } = useContext(DataContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getCategory(axiosFetch2);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (!error2 && !loading && data2?.data) {
      const result = data2?.data.categories.find((item) => item.name === 'Десерты');
      getProducts(axiosFetch, result._id);
    }
    // eslint-disable-next-line
  }, [data2, error2, loading2]);

  useEffect(() => {
    if (data?.data?.products) setProducts(data?.data?.products);
    // eslint-disable-next-line
  }, [data]);

  const fixed = useScrollFixed(60);

  return (
    <div className={`pizzas ${fixed ? 'pizzas-fixed' : ''}`}>
      {error ? (
        <h2 className="error_msg">{JSON.stringify(error)}</h2>
      ) : (
        <>
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
              <Items getStoreItems={getStoreItems} products={products} title="Десерты" />
            </>
          )}
        </>
      )}
    </div>
  );
};
