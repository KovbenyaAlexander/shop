import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './style.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { IFoodCard, IFoodCards, IStore } from '../../types';
import FoodCard from '../FoodCard/FoodCard';
import 'swiper/css';

const foodCards = (): JSX.Element => {
  const coldFood = useSelector((state: IStore) => state.foodCards.cold);
  const hotFood = useSelector((state: IStore) => state.foodCards.hot);
  const meet = useSelector((state: IStore) => state.foodCards.meet);

  return (
    <section className="food">
      <div className="wrapper">
        <h3>ХОЛОДНЫЕ ЗАКУСКИ</h3>
        <Swiper
          spaceBetween={50}
          slidesPerView={4.2}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {coldFood.map((item: IFoodCard) => (
            <SwiperSlide key={item.id}>
              <FoodCard cardInfo={item} />
            </SwiperSlide>
          ))}

          {/* <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide> */}

        </Swiper>
      </div>

    </section>
  );
};

export default foodCards;
