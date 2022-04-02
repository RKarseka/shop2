import classNames from 'classnames';
import React from 'react';
import { Link } from 'react-router-dom';

import styles from './noneCard.module.scss';

export const NoneCards = ({ title, subtitle }) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.subtitle}>{subtitle}</p>
      <Link to={'/'}>
        <button className={classNames(styles.btn, 'greenBtn')}>
          <img
            className={'arrow-left'}
            src="/img/arrow.svg"
            alt="arrow in purchases button"
          />
          Вернуться назад
        </button>
      </Link>
    </div>
  );
};
