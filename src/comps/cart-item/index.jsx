import { ITEM_PATH } from '../../const';

import imgRemove from '../../assets/img/btn-remove.svg';

import styles from './cartItem.module.scss';

export const CartItem = ({ item, toggleCartBtn, ...props }) => {
  const { title, price, itemId, id } = item;
  return (
    <>
      <div
        className={styles.img}
        style={{
          backgroundImage: `url(${ITEM_PATH}${itemId}.jpg)`,
        }}
      />
      <div className="mr-5 flex">
        <p className="mb-5">{title}</p>
        <b>{price} руб.</b>
      </div>
      <img
        onClick={() => toggleCartBtn(item, id)}
        className="remove-btn"
        src={imgRemove}
        alt="Remove item"
        width={32}
        height={32}
      />
    </>
  );
};
