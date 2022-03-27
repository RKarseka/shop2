import classNames from 'classnames';
import { useEffect, useState } from 'react';
import { getCart } from '../../axios';
import { CartItem } from '../cart-item';
import styles from './cart.module.scss';

export const Cart = ({ cartLocal }) => {
  return (
    <aside className={classNames('wrapper', 'aside', styles.aside)}>
      <h2 className={classNames('aside__title', styles.aside__title)}>
        Корзина
      </h2>
      {cartLocal.map((item) => (
        <CartItem key={item.itemId} {...item} />
      ))}
    </aside>
  );
};
