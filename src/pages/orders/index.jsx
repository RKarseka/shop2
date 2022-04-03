import { useEffect, useState } from 'react';
import { axiosDelId, axiosGet } from '../../axios';
import { Page } from '../../components/page';
import { OrderLoading } from '../../comps/card/card-loading';
import { OrdersCard } from '../../comps/order-card';
import { ORDERS_URL } from '../../const';

const data = {
  title: 'Мои заказы',
  noneCardsData: {
    title: 'У вас нет заказов',
    subtitle: 'Оформите хотя бы один заказ.',
  },
};

export const Orders = () => {
  const [ordersList, setOrdersList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isHandlingRequest, setisHandlingRequest] = useState(false);

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
        items={ordersList}
        removeOrder={removeOrder}
        // stylesBody={styles.wrapper}
        isLoading={isLoading}
        {...data}
        back
      />
    </>
  );
};
