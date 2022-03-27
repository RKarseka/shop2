import classNames from 'classnames';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo.png';
import styles from './header.module.scss';

export const Header = () => {
  return (
    <header className={classNames('header', styles.header)}>
      <Link to={'/'} className={styles.header__link}>
        <img src={logo} alt="logo" width={40} height={40} />
        <div className="">
          <h1 className={styles.header__title}>React Sneakers</h1>
          <p className={styles.header__subtitle}>Магазин лучших кроссовок</p>
        </div>
      </Link>
      icons
    </header>
  );
};
