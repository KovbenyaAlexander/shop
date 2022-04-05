import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './style.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { IFoodCard, IFoodCards, IStore } from '../../types';
import FoodCard from '../FoodCard/FoodCard';
import 'swiper/css';

const FoodCards = (): JSX.Element => {
  const coldFood = useSelector((state: IStore) => state.foodCards.cold);
  const hotFood = useSelector((state: IStore) => state.foodCards.hot);
  const meetFod = useSelector((state: IStore) => state.foodCards.meet);

  return (
    <section className="food">
      <div className="wrapper">

        <h3>Холодные закуски</h3>
        <Swiper
          slidesOffsetBefore={20}
          spaceBetween={30}
          slidesPerView={4.2}
          // breakpoints={{
          //   // when window width is >= 640px
          //   640: {
          //     // width: ,
          //     slidesPerView: 3,
          //   },
          //   // when window width is >= 768px
          //   1500: {
          //     // width: 1500,
          //     slidesPerView: 4.2,
          //   },
          // }}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          className="swiper-container"

        >
          {coldFood.map((item: IFoodCard) => (
            <SwiperSlide key={item.id}>
              <FoodCard cardInfo={item} />
            </SwiperSlide>
          ))}
        </Swiper>

        <hr />

        <h3>Горячие закуски</h3>
        <Swiper
          slidesOffsetBefore={20}
          spaceBetween={30}
          slidesPerView={4.2}
          className="swiper-container"
        >
          {hotFood.map((item: IFoodCard) => (
            <SwiperSlide key={item.id}>
              <FoodCard cardInfo={item} />
            </SwiperSlide>
          ))}
        </Swiper>

        <hr />

        <h3>Мясные блюда</h3>
        <Swiper
          slidesOffsetBefore={20}
          spaceBetween={30}
          slidesPerView={4.2}
          className="swiper-container"
        >

          {meetFod.map((item: IFoodCard) => (
            <SwiperSlide key={item.id}>
              <FoodCard cardInfo={item} />
            </SwiperSlide>
          ))}
        </Swiper>

      </div>

    </section>
  );
};

export default FoodCards;