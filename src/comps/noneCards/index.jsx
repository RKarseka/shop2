import classNames from 'classnames';
import { Link } from 'react-router-dom';

import styles from './noneCard.module.scss';

export const NoneCards = ({ img, title, subtitle, btn }) => (
  <div className={styles.container}>
    {img && <img src={img} alt="none cards img" width={120} height={120} />}
    <h3 className={styles.title}>{title}</h3>
    <p className={styles.subtitle}>{subtitle}</p>
    {btn && (
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
    )}
  </div>
);
