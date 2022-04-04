import classNames from 'classnames';

import imgOrderComplite from '../../assets/img/complete-order.jpg';
import imgCartEmpty from '../../assets/img/empty-cart.jpg';

import { RenderPageBody } from '../render-page-body';
import { OrderLoading } from '../card/card-loading';

import { CartFooter } from './cart-footer';
import { CartItem } from '../cart-item';

import styles from './aside.module.scss';
import { useState } from 'react';

const cartContent = {
  title: 'Корзина',
};

const cartEmptyContent = {
  img: imgCartEmpty,
  title: 'Корзина пустая',
  subtitle: 'Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.',
};
const cartOrderComplitContent = {
  img: imgOrderComplite,
  title: 'Заказ оформлен!',
  subtitle: 'Ваш заказ ### скоро будет передан курьерской доставке.',
};

export const Aside = ({ cartSum, cartLocal, setCartLocal, ...props }) => {
  const [emptyText, setEmptyText] = useState({ ...cartEmptyContent });

  return (
    <aside className={classNames('wrapper', styles.container)}>
      <div className={styles.header}>
        <h2 className={classNames('aside__title', styles.title)}>
          {cartContent.title}
        </h2>
        <RenderPageBody
          items={cartLocal}
          Card={CartItem}
          stylesItem={classNames(styles.item, 'd-flex align-center ')}
          LoadingPatternCard={OrderLoading}
          noneCardsData={emptyText}
          {...props}
        />
      </div>
      {cartLocal.length > 0 && (
        <CartFooter
          cartSum={cartSum}
          items={cartLocal}
          setCartLocal={setCartLocal}
          cartOrderComplitContent={cartOrderComplitContent}
          setEmptyText={setEmptyText}
        />
      )}
    </aside>
  );
};
