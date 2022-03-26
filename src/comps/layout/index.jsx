import classNames from 'classnames';
import { Outlet } from 'react-router-dom';
import { Cart } from '../cart';
import { Header } from '../header';

import styles from './layout.module.scss';

export const Layout = () => {
  return (
    <div className={styles.container}>
      <div className={classNames('wrapper', styles.main)}>
        <Header />
        <main>
          <Outlet />
        </main>
      </div>
      <Cart />
    </div>
  );
};
