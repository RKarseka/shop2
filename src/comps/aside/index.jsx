import { useState } from 'react';

import classNames from 'classnames';

import { RenderPageBody } from '../render-page-body';
import { OrderLoading } from '../card/card-loading';
import { CartFooter } from './cart-footer';
import { CartItem } from '../cart-item';

import imgOrderComplite from '../../assets/img/complete-order.jpg';
import imgCartEmpty from '../../assets/img/empty-cart.jpg';

import styles from './aside.module.scss';

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

export const Aside = ({
  cartSum,
  cartLocal,
  setCartLocal,
  isOverlayOpen,
  togleOverlay,
  ...props
}) => {
  const [emptyText, setEmptyText] = useState({ ...cartEmptyContent });

  return (
    <aside className={classNames(styles.container)}>
      <div
        className={classNames(
          'wrapper',
          styles.wrapper,
          isOverlayOpen && styles.wrapper__open
        )}
      >
        <div className={styles.header}>
          <div className={classNames('aside__header', styles.title)}>
            <h2 className="aside__title">{cartContent.title}</h2>
            <div className={styles.close} onClick={togleOverlay}>
              close
            </div>
          </div>
          <RenderPageBody
            items={cartLocal}
            Card={CartItem}
            stylesItem={classNames(styles.item, 'd-flex align-center ')}
            stylesBody={styles.items}
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
      </div>
    </aside>
  );
};
