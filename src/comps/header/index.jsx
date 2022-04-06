import classNames from 'classnames';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo.png';
import heart from '../../assets/img/heart.svg';
import user from '../../assets/img/user.svg';
import cart from '../../assets/img/cart.svg';

import styles from './header.module.scss';

export const Header = ({ togleOverlay, cartSum }) => {
  const openCart = () => {
    if (window.innerWidth < 1156) togleOverlay();
  };
  return (
    <header className={classNames('header', styles.header)}>
      <Link to={'/'} className={styles.header__link}>
        <img src={logo} alt="logo" width={40} height={40} />
        <div className="">
          <h1 className={styles.header__title}>React Sneakers</h1>
          <p className={styles.header__subtitle}>Магазин лучших кроссовок</p>
        </div>
      </Link>
      <div className={styles.header__links}>
        <div className={styles.cartLink} onClick={openCart}>
          <img src={cart} alt="favorites item" width={18} height={18} />
          <p>{`${cartSum} руб.`}</p>
        </div>
        <Link to={'/favorites'}>
          <img src={heart} alt="favorites item" width={18} height={18} />
        </Link>
        <Link to={'/orders'}>
          <img src={user} alt="orders item" width={18} height={18} />
        </Link>
      </div>
    </header>
  );
};
