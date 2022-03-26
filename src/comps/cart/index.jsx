import classNames from 'classnames';
import { useEffect, useState } from 'react';
import { getCart } from '../../axios';
import styles from './cart.module.scss';

export const Cart = () => {
  const [cartLocal, setCartLocal] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        setCartLocal(await getCart());
        console.log(cartLocal);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <aside className={classNames('wrapper', styles.aside)}>
      {cartLocal.map(({ title, itemId }) => title)}
    </aside>
  );
};
