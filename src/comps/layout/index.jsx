import classNames from 'classnames';
import { Outlet } from 'react-router-dom';
import { Header } from '../header';
import { Aside } from '../spoiler';

import styles from './layout.module.scss';

export const Layout = ({ ...props }) => {
  return (
    <div className={styles.container}>
      <div className={classNames('wrapper', styles.main)}>
        <Header />
        <main>
          <Outlet />
        </main>
      </div>
      <Aside {...props} />
    </div>
  );
};
