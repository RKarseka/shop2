import { Route, Routes } from 'react-router-dom';
import { Layout } from './comps/layout';
import { Main } from './pages/main';
import { Orders } from './pages/orders';

import { useEffect, useState } from 'react';
import { axiosGet } from './axios';
// import { CART_URL, FAV_URL, ITEMS_URL, ORDERS_URL } from './const';
import { toggleBtn } from './fn';

import { Favorites } from './pages/favorites';

import cardStyles from './comps/card/card.module.scss';

import './app.scss';

export const App = () => {
  const [isCardsLoading, setIsCardsLoading] = useState(false);

  const [sneakers, setSneakers] = useState([]);
  const [cartLocal, setCartLocal] = useState([]);
  const [cartSum, setCartSum] = useState(0);
  const [favLocal, setFavLocal] = useState([]);
  const [ordersList, setOrdersList] = useState([]);

  const loadOrdersList = async () => {
    setIsCardsLoading(true);
    try {
      await axiosGet().then((data) => {
        setOrdersList(data[1].orders);
      });
    } catch (error) {}
    setIsCardsLoading(false);
  };

  useEffect(() => {
    (async () => {
      try {
        setIsCardsLoading(true);

        await axiosGet().then((data) => {
          setCartLocal(data[1].cart);
          setFavLocal(data[1].favorites);
          setOrdersList(data[1].orders);
          setSneakers(data[0]);
        });

        setIsCardsLoading(false);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  useEffect(() => {
    setCartSum(
      Math.round(cartLocal.reduce((prev, { price }) => prev + price, 0) * 100) /
        100
    );
  }, [cartLocal]);

  const toggleFavBtn = (item, id) =>
    toggleBtn(item, id, setFavLocal, favLocal, 'favorites');

  const toggleCartBtn = (item, id) =>
    toggleBtn(item, id, setCartLocal, cartLocal, 'cart');

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout
            cartSum={cartSum}
            cartLocal={cartLocal}
            toggleCartBtn={toggleCartBtn}
            setCartLocal={setCartLocal}
            isLoading={isCardsLoading}
            loadOrdersList={loadOrdersList}
          />
        }
      >
        <Route
          index
          element={
            <Main
              items={sneakers}
              isLoading={isCardsLoading}
              cartLocal={cartLocal}
              favLocal={favLocal}
              toggleFavBtn={toggleFavBtn}
              toggleCartBtn={toggleCartBtn}
              stylesItem={cardStyles.card}
              stylesBody={'main-card'}
            />
          }
        />

        <Route
          path="favorites"
          element={
            <Favorites
              items={favLocal}
              toggleCartBtn={toggleCartBtn}
              toggleFavBtn={toggleFavBtn}
              isLoading={isCardsLoading}
              cartLocal={cartLocal}
              stylesItem={cardStyles.card}
              stylesBody={'main-card'}
            />
          }
        />
        <Route
          path="orders"
          element={
            <Orders
              ordersList={ordersList}
              setOrdersList={setOrdersList}
              isLoading={isCardsLoading}
            />
          }
        />
        <Route
          path="*"
          element={
            <Main
              items={sneakers}
              isLoading={isCardsLoading}
              cartLocal={cartLocal}
              favLocal={favLocal}
              toggleFavBtn={toggleFavBtn}
              toggleCartBtn={toggleCartBtn}
              stylesItem={cardStyles.card}
              stylesBody={'main-card'}
            />
          }
        />
      </Route>
    </Routes>
  );
};
