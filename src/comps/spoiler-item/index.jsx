import classNames from 'classnames';
import { ITEM_PATH } from '../../const';

import styles from './spoilerItem.module.scss';

export const SpoilerItem = ({ item, toggleBtn, spoilerItemIcon }) => {
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
        onClick={() => toggleBtn(item, id)}
        className="removeBtn"
        src={spoilerItemIcon}
        alt="Remove item"
        width={32}
        height={32}
      />
    </div>
  );
};
