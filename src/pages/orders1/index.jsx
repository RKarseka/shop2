import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import { axiosDelId, axiosGet } from '../../axios';
import { OrderLoading } from '../../comps/card/card-loading';
import { ORDERS_URL } from '../../const';

import back from '../../assets/img/back.svg';
import remove from '../../assets/img/btn-remove.svg';

import styles from './orders.module.scss';
import { Link } from 'react-router-dom';
import { RenderPage } from '../../HOC/render-page';

const data = {
  title: 'У вас нет заказов',
  subtitle: 'Оформите хотя бы один заказ.',
};

const Order = ({ isLoading, ...props }) => (
  <>{isLoading ? <OrderLoading /> : <OrderBody {...props} />}</>
);

const OrderBody = ({ item, ordersList, setOrdersList }) => {
  const { id, sum, items } = item;

  const delOrder = () => {
    axiosDelId(ORDERS_URL, id);
    setOrdersList(ordersList.filter((i) => i.id !== id));
  };
  return (
    <div className={styles.order}>
      <div>
        <div className={styles.order__id}>{`Заказ #${id}`}</div>

        <div className="">{`Сумма: ${sum}`}</div>
      </div>
      <div className="">
        {/* {items.map((i, index) => (
          <p key={index}>{i}</p>
        ))} */}
      </div>

      <img
        onClick={delOrder}
        className="removeBtn"
        src={remove}
        alt="Remove item"
        width={32}
        height={32}
      />
    </div>
  );
};

const RenderFav = RenderPage(Order);

export const Orders = () => {
  const [ordersList, setOrdersList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        setOrdersList(await axiosGet(ORDERS_URL));
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <div className={'main'}>
      <div className="main__header d-flex align-center mb-20 ">
        <Link to={'/'}>
          <img
            src={back}
            alt="back btn"
            width={35}
            height={35}
            className="mr-20"
          />
        </Link>
        <h2 className={classNames('main__title', styles.main__title)}>
          {'Мои заказы'}
        </h2>
      </div>
      <RenderFav
        isLoading={isLoading}
        setOrdersList={setOrdersList}
        items={ordersList}
        data={data}
      />
    </div>
  );
};
