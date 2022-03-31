import classNames from 'classnames';
import { Cart } from '../cart';

import styles from './spoiler.module.scss';

export const Aside = ({ cartSum, cartLocal, setCartLocal, toggleCartBtn }) => {
  return (
    <aside className={classNames('wrapper', 'aside', styles.aside)}>
      <Cart
        cartSum={cartSum}
        itemsArr={cartLocal}
        toggleCartBtn={toggleCartBtn}
        setCartLocal={setCartLocal}
      />
    </aside>
  );
};
