import { Route, Routes } from 'react-router-dom';
import { Layout } from './comps/layout';
import { Main } from './pages/main';
import { Orders } from './pages/orders';

import './app.scss';
import { Favorite } from './pages/favorite';
import { useEffect, useState } from 'react';
import { axiosGet } from './axios';
import { CART_URL, FAV_URL, ITEMS_URL } from './const';
import { toggleBtn } from './fn';
import { AppContext } from './context';

export const App = () => {
  const [isCardsLoading, setIsCardsLoading] = useState(false);

  const [sneakers, setSneakers] = useState([]);
  const [cartLocal, setCartLocal] = useState([]);
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
            <Layout cartLocal={cartLocal} toggleCartBtn={toggleCartBtn} />
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
            path="favorites"
            element={
              <Favorite favLocal={favLocal} toggleFavBtn={toggleFavBtn} />
            }
          />
          <Route path="orders" element={<Orders />} />
        </Route>
      </Routes>
    </AppContext.Provider>
  );
};
