import classNames from 'classnames';
import { Outlet } from 'react-router-dom';
import { Aside } from '../aside';
import { Header } from '../header';

import styles from './layout.module.scss';

export const Layout = ({ ...props }) => {
  const { cartSum } = props;
  return (
    <div className={styles.container}>
      <div className={classNames('wrapper', styles.main)}>
        <Header cartSum={cartSum} />

        <Outlet />
      </div>
      <Aside {...props} />
    </div>
  );
};
