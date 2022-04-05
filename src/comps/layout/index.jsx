import classNames from 'classnames';
import { Outlet } from 'react-router-dom';
import { Aside } from '../aside';
import { Header } from '../header';

import styles from './layout.module.scss';

export const Layout = ({ ...props }) => {
  const { cartSum } = props;
  return (
    <div className={styles.wrapper}>
      <div className={classNames('wrapper', styles.container)}>
        <Header cartSum={cartSum} />

        <Outlet />

        <Aside {...props} />
        <div className={styles.top} />
      </div>
    </div>
  );
};
