import React, { useContext } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import { Loading } from "../";
import { DataContext } from "../../context";

const BasketOrder = ({ data, title, category }) => {
  const { getStoreItems } = useContext(DataContext);
  const product = data?.filter((item) => item.category.name === category);

  return (
    <div className="basket-order">
      <h2>{title}</h2>
      {!product ? (
        <Loading visible={true} />
      ) : (
        <ul className="basket-order__list">
          <Swiper
            modules={[Navigation, Pagination, A11y, Autoplay]}
            spaceBetween="50"
            slidesPerView="1"
            navigation
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            style={{
              "--swiper-pagination-color": "#FFBA08",
              "--swiper-pagination-bullet-inactive-color": "#999999",
              "--swiper-pagination-bullet-inactive-opacity": "1",
              "--swiper-pagination-bullet-size": "16px",
              "--swiper-pagination-bullet-horizontal-gap": "6px",
            }}
            breakpoints={{
              480: { slidesPerView: "2", spaceBetween: "8" },
              680: { slidesPerView: "3", spaceBetween: "8" },
              880: { slidesPerView: "4", spaceBetween: "10" },
            }}
          >
            {product?.map((prod) => (
              <SwiperSlide className="basket-order__item" key={prod._id}>
                <div className="basket-order__img-box">
                  <img src={prod.image} alt={prod.name} />
                </div>
                <div className="basket-order__desc-box">
                  <h3>{prod.description}</h3>
                  <p>{prod.description}</p>
                  <button onClick={() => getStoreItems(prod)}>
                    {prod.price} ₽
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </ul>
      )}
    </div>
  );
};

export default BasketOrder;
