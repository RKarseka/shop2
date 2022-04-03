import { Link } from 'react-router-dom';

import imgBack from '../../assets/img/back.svg';
import { RenderPageBody } from '../render-page-body';

import styles from './page.module.scss';

export const Page = ({ back, title, search, ...props }) => {
  return (
    <main className={styles.container}>
      <div className={styles.header}>
        {back && (
          <Link to={'/'} className="page__back">
            <img
              src={imgBack}
              alt="back btn"
              width={35}
              height={35}
              className="mr-20"
            />
          </Link>
        )}
        <div className={styles.title}>
          <h2 className="page__title-text">{title}</h2>
          {search && <div className="search">search</div>}
        </div>
      </div>
      <RenderPageBody {...props} />
    </main>
  );
};
