import { Route, Routes } from 'react-router-dom';
import { Layout } from './comps/layout';
import { Main } from './pages/main';
import { Orders } from './pages/orders';

import { useEffect, useState } from 'react';
import { axiosGet } from './axios';
import { CART_URL, FAV_URL, ITEMS_URL } from './const';
import { toggleBtn } from './fn';
import { AppContext } from './context';

import { Main2 } from './pages/main2/main2';

import './app.scss';
import { Favorites } from './pages/favorites';

export const App = () => {
  const [isCardsLoading, setIsCardsLoading] = useState(false);

  const [sneakers, setSneakers] = useState([]);
  const [cartLocal, setCartLocal] = useState([]);
  const [cartSum, setCartSum] = useState(0);
  const [favLocal, setFavLocal] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        setIsCardsLoading(true);
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
    <AppContext.Provider value={{}}>
      <Routes>
        <Route
          path="/"
          element={
            <Layout
              cartSum={cartSum}
              cartLocal={cartLocal}
              toggleCartBtn={toggleCartBtn}
              setCartLocal={setCartLocal}
            />
          }
        >
          <Route
            index
            element={
              <Main
                sneakers={sneakers}
                isCardsLoading={isCardsLoading}
                cartLocal={cartLocal}
                favLocal={favLocal}
                toggleFavBtn={toggleFavBtn}
                toggleCartBtn={toggleCartBtn}
              />
            }
          />
          <Route
            path="main"
            element={
              <Main2
                items={sneakers}
                isLoading={isCardsLoading}
                // cartLocal={cartLocal}
                // favLocal={favLocal}
                // toggleFavBtn={toggleFavBtn}
                // toggleCartBtn={toggleCartBtn}
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
              />
            }
          />
          <Route path="orders" element={<Orders />} />
        </Route>
      </Routes>
    </AppContext.Provider>
  );
};
