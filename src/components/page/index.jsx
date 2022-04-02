import { Link } from 'react-router-dom';

import imgBack from '../../assets/img/back.svg';

import styles from './page.module.scss';

export const Page = ({ back, body }) => {
  return (
    <div className="page">
      <div className="page__header">
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
        <div className="page__title"></div>
      </div>
      <div className="page__body">{body}</div>
    </div>
  );
};
