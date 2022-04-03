import React from 'react';
import { axiosDelId } from '../../axios';
import { ITEM_PATH, ORDERS_URL } from '../../const';

import remove from '../../assets/img/btn-remove.svg';

import styles from './order.module.scss';

export const OrdersCard = ({ item, removeOrder }) => {
  const { id, sum, rows } = item;
  return (
    <div className={styles.body}>
      <div>
        <div className={styles.body__id}>{`Заказ #${id}`}</div>

        <div className="">{`Сумма: ${sum}`}</div>
      </div>
      <div className={styles.rows}>
        {rows.map(({ title, itemId }, index) => (
          <div key={index} className={styles.row}>
            <img
              src={`${ITEM_PATH}${itemId}.jpg`}
              alt="sneakers icon"
              width="36px"
              height="30px"
            />
            <p>{title}</p>
          </div>
        ))}
      </div>

      <img
        onClick={() => removeOrder(id)}
        className="remove-btn"
        src={remove}
        alt="Remove item"
        width={32}
        height={32}
      />
    </div>
  );
};
