import React from "react";
import { ThreeDots } from "react-loader-spinner";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import { cartSlice } from "../../helpers";

const BasketOrder = ({ data, title, category, getStoreItems }) => {
  const product = data?.prod?.prod?.filter(
    (item) => item.category.name === category,
  );

  return (
    <div className="container basket-order">
      <h2>{title}</h2>
      {!product ? (
        <div className="loading__visible">
          <ThreeDots
            height="150"
            width="150"
            radius="9"
            color="#4fa94d"
            ariaLabel="three-dots-loading"
            visible={true}
          />
        </div>
      ) : (
        <ul className="basket-order__list">
          <Swiper
            modules={[Navigation, Pagination, A11y, Autoplay]}
            spaceBetween={30}
            slidesPerView={4}
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
          >
            {product?.map((prod) => (
              <SwiperSlide className="basket-order__item">
                <div className="basket-order__img-box">
                  <img src={prod.image} alt={prod.name} />
                </div>
                <div className="basket-order__desc-box">
                  <h3>{cartSlice(prod.description, 22, 0, 22)}</h3>
                  <p>{cartSlice(prod.description, 50, 0, 50)}</p>
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
