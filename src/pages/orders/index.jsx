import { useState } from 'react';
import { axiosDelId } from '../../axios';
import { Page } from '../../comps/page';
import { OrderLoading } from '../../comps/card/card-loading';
import { OrdersCard } from '../../comps/order-card';
import { ORDERS_URL } from '../../const';

import stylesOrdersCard from '../../comps/order-card/order.module.scss';

const data = {
  title: 'Мои заказы',
  noneCardsData: {
    title: 'У вас нет заказов',
    subtitle: 'Оформите хотя бы один заказ.',
    btn: true,
  },
};

export const Orders = ({ ordersList, setOrdersList, ...props }) => {
  const [isHandlingRequest, setisHandlingRequest] = useState(false);

  const removeOrder = async (id) => {
    if (isHandlingRequest) return;
    try {
      setisHandlingRequest(true);
      await axiosDelId(ORDERS_URL, id);
      setOrdersList(ordersList.filter((i) => i.id !== id));
      setisHandlingRequest(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Page
        Card={OrdersCard}
        LoadingPatternCard={OrderLoading}
        stylesItem={stylesOrdersCard.card}
        stylesBody={stylesOrdersCard.cards}
        items={ordersList}
        removeOrder={removeOrder}
        {...data}
        {...props}
        back
      />
    </>
  );
};
