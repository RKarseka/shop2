import imgOrderComplite from '../../assets/img/complete-order.jpg';
import imgCartEmpty from '../../assets/img/empty-cart.jpg';

// import { Spoiler } from '../spoiler/aside-item';

import styles from './cart.module.scss';
import { axiosDelId } from '../../axios';
import { CART_URL } from '../../const';
import { useState } from 'react';
import { postOrder } from '../../fn';
import classNames from 'classnames';

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

const CartFooter = ({ cartSum, setCartLocal, itemsArr, setIsOrderSended }) => {
  const [isOrderSending, setIsOrderSending] = useState(false);

  const onClickOrder = async () => {
    try {
      setIsOrderSending(true);

      for (let index = 0; index < itemsArr.length; index++) {
        const element = itemsArr[index];
        await axiosDelId(CART_URL, element.id);
      }
      setIsOrderSending(false);
      cartOrderComplitContent.subtitle =
        cartOrderComplitContent.subtitle.replace(
          '###',
          `#${await postOrder(cartSum, itemsArr)}`
        );
      setIsOrderSended({ ...cartOrderComplitContent });
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

export const Cart = ({
  cartSum,
  toggleCartBtn,
  itemsArr,
  setCartLocal,
  ...props
}) => {
  const [isOrderSended, setIsOrderSended] = useState(cartEmptyContent);
  return (
    <>
      {/* <Spoiler
        children={
          <CartFooter
            cartSum={cartSum}
            itemsArr={itemsArr}
            toggleCartBtn={toggleCartBtn}
            setCartLocal={setCartLocal}
            setIsOrderSended={setIsOrderSended}
          />
        }
        spoilerTitle={cartContent}
        spoilerEmpty={isOrderSended}
        itemsArr={itemsArr}
        toggleBtn={toggleCartBtn}
        spoilerItemIcon={Remove}
        {...props}
      /> */}
    </>
  );
};
