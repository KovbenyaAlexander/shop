import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './style.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { IFoodCard, IFoodCards, IStore } from '../../types';
import 'swiper/css';

const foodCards = (): JSX.Element => {
  const coldFood = useSelector((state: IStore) => state.foodCards.cold);
  const hotFood = useSelector((state: IStore) => state.foodCards.hot);
  const meet = useSelector((state: IStore) => state.foodCards.meet);

  return (
    <section className="food">

      <h3>ХОЛОДНЫЕ ЗАКУСКИ</h3>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {coldFood.map((item: IFoodCard) => (
          <SwiperSlide key={item.id}>
            <p>{item.name}</p>
            <p>{item.description}</p>
            <p>{item.price}</p>
            <p>{item.weight}</p>
            <img src={item.image} alt="food" />
          </SwiperSlide>
        ))}

        {/* <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide> */}

      </Swiper>
    </section>
  );
};

export default foodCards;
