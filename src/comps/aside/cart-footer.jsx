import classNames from 'classnames';
import { useState } from 'react';
import { axiosDelId } from '../../axios';
import { CART_URL } from '../../const';
import { postOrder } from '../../fn';

import styles from './cart.module.scss';

export const CartFooter = ({
  cartSum,
  setCartLocal,
  items,
  setEmptyText,
  cartOrderComplitContent,
}) => {
  const [isOrderSending, setIsOrderSending] = useState(false);

  const onClickOrder = async () => {
    try {
      setIsOrderSending(true);

      for (let index = 0; index < items.length; index++) {
        const element = items[index];
        await axiosDelId(CART_URL, element.id);
      }
      const resp = await postOrder(cartSum, items);

      setIsOrderSending(false);

      setEmptyText({
        ...cartOrderComplitContent,
        subtitle: cartOrderComplitContent.subtitle.replace('###', `#${resp}`),
      });

      setCartLocal([]);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className={styles.cartTotalBlock}>
      <ul className="">
        <li className="d-flex">
          <span>Итого:</span>
          <div></div>
          <b>{cartSum} руб.</b>
        </li>
        <li className="d-flex">
          <span>Налог 5%:</span>
          <div></div>
          <b>{Math.round(cartSum * 5) / 100} руб.</b>
        </li>
      </ul>
      <button
        type="button"
        disabled={isOrderSending}
        className={classNames(styles.btn, 'greenBtn')}
        onClick={onClickOrder}
      >
        Оформить заказ
        <img
          className={'arrow-right'}
          src="/img/arrow.svg"
          alt="arrow in purchases button"
        />
      </button>
    </div>
  );
};
