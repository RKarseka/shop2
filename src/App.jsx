import { Route, Routes } from 'react-router-dom';
import { Layout } from './comps/layout';
import { Main } from './pages/main';
import { Orders } from './pages/orders';

import './app.scss';
import { Favorite } from './pages/favorite';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Main />} />
        <Route path="favorites" element={<Favorite />} />
        <Route path="orders" element={<Orders />} />
      </Route>
    </Routes>
  );
};
