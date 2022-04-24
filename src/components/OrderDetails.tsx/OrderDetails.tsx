/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './style.scss';

const OrderDetails = (): JSX.Element => {
  const { register, handleSubmit } = useForm();
  const handleRegistration = (data: any) => { console.log(data); };

  const [deliveryType, setDeliveryType] = useState('delivery');
  const onChangeDeliveryHandler = (e: any) => setDeliveryType(e.target.value);

  const [paymentType, setPaymentType] = useState('cash');
  const onChangePaymentHandler = (e: any) => setPaymentType(e.target.value);

  const [deliveryTime, setDeliveryTime] = useState('asap');
  const onChangeDeliveryTimeHandler = (e: any) => setDeliveryTime(e.target.value);

  return (
    <section className="order">
      <div className="wrapper">

        <form onSubmit={handleSubmit(handleRegistration)}>

          <div className="order-contacts">
            <label htmlFor="name">
              Имя
              <input id="name" type="text" placeholder="Имя*" {...register('name')} />
            </label>

            <label htmlFor="phone">
              Телефон
              <input id="phone" type="text" placeholder="Имя*" {...register('phone')} />
            </label>
          </div>

          <br />
          <hr />
          <br />

          <div className="order-delivery">
            <label htmlFor="delivery" className={deliveryType === 'delivery' ? 'order-radio-checked' : ''}>
              Доставка
              <input
                {...register('typeOfDelivery')}
                id="delivery"
                name="typeOfDelivery"
                type="radio"
                value="delivery"
                onChange={onChangeDeliveryHandler}
                checked={deliveryType === 'delivery'}

              />
            </label>

            <label htmlFor="pickup" className={deliveryType === 'pickup' ? 'order-radio-checked' : ''}>
              Самовывоз
              <input
                {...register('typeOfDelivery')}
                id="pickup"
                name="typeOfDelivery"
                type="radio"
                value="pickup"
                onChange={onChangeDeliveryHandler}

              />
            </label>

            {deliveryType === 'delivery' && (
              <div className="order-delivery-adress">
                <p>Адрес доставки</p>

                <input id="street" type="text" placeholder="Укажите улицу*" {...register('street')} />
                <input id="houseNumber" type="text" placeholder="Номер дома" {...register('houseNumber')} />
                <input id="officeNumber" type="text" placeholder="№ квартиры/офиса" {...register('officeNumber')} />
                <input id="entrance" type="text" placeholder="Подъезд" {...register('entrance')} />
                <input id="floor" type="text" placeholder="Этаж" {...register('floor')} />
                <input id="comment" type="text" placeholder="Комментарий" {...register('comment')} />
              </div>
            )}

            {deliveryType === 'pickup' && (
              <div className="order-delivery-pickup">
                <p>Выберите адрес самовывоза</p>

                <select
                  required
                  {...register('pickup-adress')}
                >
                  <option value="г. Киев, ул. Космонавтов, д. 7, офис 5">г. Киев, ул. Космонавтов, д. 7, офис 5</option>
                  <option value="г. Киев, ул. Космонавтов, д. 7, офис 5">г. Киев, ул. Космонавтов, д. 7, офис 5</option>
                </select>
              </div>
            )}

            <br />
            <hr />
            <br />

            <div className="order-delivery-payment">
              <p>Способ оплаты</p>

              <label htmlFor="online" className={paymentType === 'online' ? 'order-radio-checked' : ''}>
                Оплата онлайн
                <input
                  {...register('typeOfPayment')}
                  id="online"
                  name="typeOfPayment"
                  type="radio"
                  value="online"
                  onChange={onChangePaymentHandler}
                />
              </label>

              <label htmlFor="credit-card" className={paymentType === 'credit-card' ? 'order-radio-checked' : ''}>
                Курьеру картой
                <input
                  {...register('typeOfPayment')}
                  id="credit-card"
                  name="typeOfPayment"
                  type="radio"
                  value="credit-card"
                  onChange={onChangePaymentHandler}
                />
              </label>

              <label htmlFor="cash" className={paymentType === 'cash' ? 'order-radio-checked' : ''}>
                Наличными
                <input
                  {...register('typeOfPayment')}
                  id="cash"
                  name="typeOfPayment"
                  type="radio"
                  value="cash"
                  onChange={onChangePaymentHandler}
                />
              </label>

            </div>

            <br />
            <hr />
            <br />

            <div className="order-time">
              <p>Когда доставить</p>

              <label htmlFor="asap" className={deliveryTime === 'asap' ? 'order-radio-checked' : ''}>
                В ближайшее время
                <input
                  {...register('order-time')}
                  id="asap"
                  name="order-time"
                  type="radio"
                  value="asap"
                  onChange={onChangeDeliveryTimeHandler}
                  checked={deliveryTime === 'asap'}
                />
              </label>

              <label htmlFor="customTime" className={deliveryTime === 'customTime' ? 'order-radio-checked' : ''}>
                Ко времени
                <input
                  {...register('order-time')}
                  id="customTime"
                  name="order-time"
                  type="radio"
                  value="customTime"
                  onChange={onChangeDeliveryTimeHandler}
                />
              </label>

              {deliveryTime === 'customTime' && (
                <div className="order-time-custom">
                  <input
                    id="customTime"
                    type="datetime-local"
                    {...register('customTime')}
                  />
                </div>

              )}
            </div>
          </div>

          <button type="submit">Submit</button>
        </form>

      </div>

    </section>
  );
};

export default OrderDetails;
