import classNames from 'classnames';
import { CartItem } from '../cart-item';
import styles from './cart.module.scss';

export const Cart = ({ cartLocal, ...props }) => {
  return (
    <aside className={classNames('wrapper', 'aside', styles.aside)}>
      <h2 className={classNames('aside__title', styles.aside__title)}>
        Корзина
      </h2>
      {cartLocal.map((item) => {
        return <CartItem key={item.itemId} item={item} {...props} />;
      })}
    </aside>
  );
};
