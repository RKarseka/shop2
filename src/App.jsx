import { Route, Routes } from 'react-router-dom';
import { Layout } from './comps/layout';
import { Main } from './pages/main';
import { Orders } from './pages/orders';

import './app.scss';
import { Favorite } from './pages/favorite';
import { useEffect, useState } from 'react';
import { axiosDelId, axiosGet, axiosPost, getSneakers } from './axios';
import { CART_URL, FAV_URL, ITEMS_URL } from './const';

export const App = () => {
  const [isCardsLoading, setIsCardsLoading] = useState(false);

  const [sneakers, setSneakers] = useState([]);
  const [cartLocal, setCartLocal] = useState([]);
  const [favLocal, setFavLocal] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        setIsCardsLoading(true);
        setSneakers(await axiosGet(ITEMS_URL));
        setCartLocal(await axiosGet(CART_URL));
        setFavLocal(await axiosGet(FAV_URL));
        setIsCardsLoading(false);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const toggleFavBtn = async (item, remove = false) => {
    try {
      if (remove) {
        setFavLocal(favLocal.filter(({ itemId }) => itemId !== item.itemId));
        await axiosDelId(FAV_URL, Number(remove));
        return false;
      } else {
        setFavLocal((prev) => [...prev, item]);

        return await axiosPost(FAV_URL, item);
      }
    } catch (err) {
      console.log(err);
      if (err?.response?.status === 429) {
        alert('Палехче! Не так часто жмякай!');
      }
    }
  };

  const toggleCartBtn = async (item, remove = true) => {
    try {
      if (remove) {
        setCartLocal(cartLocal.filter(({ itemId }) => itemId !== item.itemId));
        await axiosDelId(CART_URL, Number(remove));
        return false;
      } else {
        setCartLocal((prev) => [...prev, item]);

        return await axiosPost(CART_URL, item);
      }
    } catch (err) {
      console.log(err);
      if (err?.response?.status === 429) {
        alert('Палехче! Не так часто жмякай!');
      }
    }
  };

  return (
    <Routes>
      <Route
        path="/"
        element={<Layout cartLocal={cartLocal} toggleCartBtn={toggleCartBtn} />}
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
        <Route path="favorites" element={<Favorite favLocal={favLocal} />} />
        <Route path="orders" element={<Orders />} />
      </Route>
    </Routes>
  );
};
