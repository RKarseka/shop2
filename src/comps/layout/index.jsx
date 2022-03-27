import classNames from 'classnames';
import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { getCart, getSneakers } from '../../axios';
import { Cart } from '../cart';
import { Header } from '../header';

import styles from './layout.module.scss';

export const Layout = ({ cartLocal }) => {
  return (
    <div className={styles.container}>
      <div className={classNames('wrapper', styles.main)}>
        <Header />
        <main>
          <Outlet />
        </main>
      </div>
      <Cart cartLocal={cartLocal} />
    </div>
  );
};
