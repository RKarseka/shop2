import { useState } from 'react';
import classNames from 'classnames';
import { Outlet } from 'react-router-dom';
import { Aside } from '../aside';
import { CartLink } from '../cart-respons/cart-link';
import { Header } from '../header';

import styles from './layout.module.scss';
import { scrollOff } from '../../fn';

export const Layout = ({ ...props }) => {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  const togleOverlay = () => {
    scrollOff(!isOverlayOpen);
    setIsOverlayOpen(!isOverlayOpen);
  };

  const { cartSum } = props;
  return (
    <div className={styles.wrapper}>
      <div className={classNames('wrapper', styles.container)}>
        <Header togleOverlay={togleOverlay} cartSum={cartSum} />

        <Outlet />

        <Aside
          togleOverlay={togleOverlay}
          isOverlayOpen={isOverlayOpen}
          {...props}
        />
        <CartLink
          togleOverlay={togleOverlay}
          isOverlayOpen={isOverlayOpen}
          cartSum={cartSum}
        />
        <div className={styles.top} />
      </div>
    </div>
  );
};
