import { CardLoading } from './card-loading';
import Liked from '../../assets/img/liked.svg';
import svgPlus from '../../assets/img/btn-plus.svg';
import svgInCheked from '../../assets/img/btn-checked.svg';
import UnLiked from '../../assets/img/unliked.svg';
import { ITEM_PATH } from '../../const';
import { useEffect, useState } from 'react';
import { getId } from '../../fn';

import styles from './card.module.scss';

export const Card = ({ isLoading, ...props }) => {
  return (
    <div className={styles.card}>
      {isLoading ? <CardLoading /> : <CardBody {...props} />}
    </div>
  );
};

const CardBody = ({
  item,
  cartLocal,
  favLocal,
  toggleFavBtn,
  toggleCartBtn,
}) => {
  const { itemId, title, price } = item;

  const [isCartBtnLock, setIsCartBtnLock] = useState(false);

  const [apiIdCart, setApiIdCart] = useState(getId(itemId, cartLocal));

  const [isFavBtnLock, setIsFavBtnLock] = useState(false);

  const [apiIdFav, setApiIdFav] = useState(getId(itemId, favLocal));

  const onClickFavorite = async () => {
    if (isFavBtnLock) return;
    setIsFavBtnLock(true);
    setApiIdFav(await toggleFavBtn(item, apiIdFav));
    setIsFavBtnLock(false);
  };

  const onClickCart = async () => {
    if (isCartBtnLock) return;
    setIsCartBtnLock(true);

    setApiIdCart(await toggleCartBtn(item, apiIdCart));

    setIsCartBtnLock(false);
  };

  useEffect(() => {
    setApiIdCart(getId(itemId, cartLocal));
  }, [itemId, cartLocal]);

  return (
    <>
      <div
        style={{ cursor: isFavBtnLock ? 'progress' : 'pointer' }}
        className={styles.favorite}
      >
        {onClickFavorite && (
          <img
            src={getId(itemId, favLocal) ? Liked : UnLiked}
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
