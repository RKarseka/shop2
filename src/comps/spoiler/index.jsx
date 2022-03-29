import classNames from 'classnames';
import { Cart } from '../cart';

import styles from './spoiler.module.scss';

export const Aside = ({ cartLocal, toggleCartBtn }) => {
  return (
    <aside className={classNames('wrapper', 'aside', styles.aside)}>
      <Cart itemsArr={cartLocal} toggleCartBtn={toggleCartBtn} />
    </aside>
  );
};
