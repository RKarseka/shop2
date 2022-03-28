import classNames from 'classnames';
import { ITEM_PATH } from '../../const';

import Remove from '../../assets/img/btn-remove.svg';
import styles from './cartItem.module.scss';

export const CartItem = ({ item, toggleCartBtn }) => {
  const { title, price, itemId, id } = item;
  return (
    <div className={classNames(styles.item, 'd-flex align-center mb-20')}>
      <div
        className={styles.item__img}
        style={{
          backgroundImage: `url(${ITEM_PATH}${itemId}.jpg)`,
        }}
      />
      <div className="mr-10 flex">
        <p className="mb-5">{title}</p>
        <b>{price} руб.</b>
      </div>
      <img
        onClick={() => toggleCartBtn(item, id)}
        className="removeBtn"
        src={Remove}
        alt="Remove sneakers"
        width={32}
        height={32}
      />
    </div>
  );
};
