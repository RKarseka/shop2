import classNames from 'classnames';
import { useEffect, useState } from 'react';
import { RenderCards } from '../main';
import { ITEM_PATH } from '../../const';
import { getId } from '../../fn';

import Liked from '../../assets/img/liked.svg';
import svgPlus from '../../assets/img/btn-plus.svg';
import svgInCheked from '../../assets/img/btn-checked.svg';

import styles from '../../comps/card/card.module.scss';
import { CardLoading } from '../../comps/card/card-loading';

const CardBody = ({ item, cartLocal, toggleCartBtn, toggleFavBtn }) => {
  const { itemId, title, price, id } = item;

  const [apiIdCart, setApiIdCart] = useState(getId(itemId, cartLocal));
  const [isCartBtnLock, setIsCartBtnLock] = useState(false);

  const onClickCart = async () => {
    if (isCartBtnLock) return;
    setIsCartBtnLock(true);

    setApiIdCart(await toggleCartBtn(item, apiIdCart));

    setIsCartBtnLock(false);
  };

  const onClickFavorite = async () => {
    await toggleFavBtn(item, id);
  };

  useEffect(() => {
    setApiIdCart(getId(itemId, cartLocal));
  }, [itemId, cartLocal]);

  return (
    <>
      <div style={{ cursor: 'pointer' }} className={styles.favorite}>
        {onClickFavorite && (
          <img
            src={Liked}
            alt="unliked item"
            width={32}
            height={32}
            onClick={onClickFavorite}
          />
        )}
      </div>
      <img
        src={`${ITEM_PATH}${itemId}.jpg`}
        alt="sneakers #1 img"
        width={133}
        height={112}
      />
      <h5 className={styles.title}>{title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column ">
          <span className={styles.price}>Цена:</span>
          <b>{price} руб.</b>
        </div>
        {onClickCart && (
          <img
            style={{ cursor: isCartBtnLock ? 'progress' : 'pointer' }}
            src={apiIdCart ? svgInCheked : svgPlus}
            alt="plus icon"
            width={32}
            height={32}
            onClick={onClickCart}
          />
        )}
      </div>
    </>
  );
};

const Card = ({ isLoading, ...props }) => (
  <div className={styles.card}>
    {isLoading ? <CardLoading /> : <CardBody {...props} />}
  </div>
);

export function Favorite({ ...props }) {
  const { favLocal } = props;
  return (
    <div>
      <div className={'main'}>
        <div className="main__header d-flex align-center mb-40 justify-between">
          <h2 className={classNames('main__title')}>Мои закладки</h2>
        </div>
        <div className="main__sneakers d-flex flex-wrap">
          {favLocal.map((i) => (
            <Card key={i.itemId} item={i} {...props} />
          ))}
        </div>
      </div>
    </div>
  );
}
