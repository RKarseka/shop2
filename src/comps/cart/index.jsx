import imgOrderComplite from '../../assets/img/complete-order.jpg';
import imgCartEmpty from '../../assets/img/empty-cart.jpg';
import Remove from '../../assets/img/btn-remove.svg';

import styles from './cart.module.scss';
import { Spoiler } from '../spoiler/aside-item';

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
  subtitle: 'Ваш заказ #18 скоро будет передан курьерской доставке.',
};

const CartFooter = () => {
  return <div>оформить заказ</div>;
};

export const Cart = ({ toggleCartBtn, ...props }) => {
  return (
    <>
      <Spoiler
        spoilerTitle={cartContent}
        spoilerEmpty={cartEmptyContent}
        children={<CartFooter />}
        toggleBtn={toggleCartBtn}
        spoilerItemIcon={Remove}
        {...props}
      />
    </>
  );
};
