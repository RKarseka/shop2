import { useState } from 'react';
import classNames from 'classnames';
import { Outlet } from 'react-router-dom';
import { Aside } from '../aside';
import { CartLink } from '../cart-respons/cart-link';
import { Header } from '../header';

import styles from './layout.module.scss';

export const Layout = ({ ...props }) => {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  const { cartSum } = props;
  return (
    <div className={styles.wrapper}>
      <div className={classNames('wrapper', styles.container)}>
        <Header cartSum={cartSum} />

        <Outlet />

        <Aside isOverlayOpen={isOverlayOpen} {...props} />
        <CartLink
          setIsOverlayOpen={setIsOverlayOpen}
          isOverlayOpen={isOverlayOpen}
          cartSum={cartSum}
        />
        <div className={styles.top} />
      </div>
    </div>
  );
};
