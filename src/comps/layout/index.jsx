import classNames from 'classnames';
import { Outlet } from 'react-router-dom';
import { Header } from '../header';
import { Aside } from '../spoiler';

import styles from './layout.module.scss';

export const Layout = ({ cartSum, setCartLocal, ...props }) => {
  return (
    <div className={styles.container}>
      <div className={classNames('wrapper', styles.main)}>
        <Header cartSum={cartSum} />
        <main>
          <Outlet />
        </main>
      </div>
      <Aside cartSum={cartSum} setCartLocal={setCartLocal} {...props} />
    </div>
  );
};
