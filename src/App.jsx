import { Route, Routes } from 'react-router-dom';
import { Layout } from './comps/layout';
import { Main } from './pages/main';
import { Orders } from './pages/orders';

import './app.scss';
import { Favorite } from './pages/favorite';
import { useEffect, useState } from 'react';
import { getCart, getFav, getSneakers } from './axios';

export const App = () => {
  const [isCardsLoading, setIsCardsLoading] = useState(false);

  const [sneakers, setSneakers] = useState([]);
  const [cartLocal, setCartLocal] = useState([]);
  const [favLocal, setFavLocal] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        setIsCardsLoading(true);
        setSneakers(await getSneakers());
        setCartLocal(await getCart());
        setFavLocal(await getFav());
        setIsCardsLoading(false);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Layout cartLocal={cartLocal} />}>
        <Route
          index
          element={
            <Main
              sneakers={sneakers}
              isCardsLoading={isCardsLoading}
              cartLocal={cartLocal}
              favLocal={favLocal}
            />
          }
        />
        <Route path="favorites" element={<Favorite favLocal={favLocal} />} />
        <Route path="orders" element={<Orders />} />
      </Route>
    </Routes>
  );
};
