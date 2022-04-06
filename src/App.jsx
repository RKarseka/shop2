import { Route, Routes } from 'react-router-dom';
import { Layout } from './comps/layout';
import { Main } from './pages/main';
import { Orders } from './pages/orders';

import { useEffect, useState } from 'react';
import { axiosGet } from './axios';
import { CART_URL, FAV_URL, ITEMS_URL, ORDERS_URL } from './const';
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

  useEffect(() => {
    (async () => {
      try {
        setIsCardsLoading(true);
        setOrdersList(await axiosGet(ORDERS_URL));

        setCartLocal(await axiosGet(CART_URL));
        setFavLocal(await axiosGet(FAV_URL));
        setSneakers(await axiosGet(ITEMS_URL));
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
    toggleBtn(item, id, setFavLocal, favLocal, FAV_URL);

  const toggleCartBtn = (item, id) =>
    toggleBtn(item, id, setCartLocal, cartLocal, CART_URL);

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
