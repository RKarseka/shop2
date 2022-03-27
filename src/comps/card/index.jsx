import { CardLoading } from './card-loading';
import styles from './card.module.scss';
import Liked from '../../assets/img/liked.svg';
import UnLiked from '../../assets/img/unliked.svg';
import { ITEM_PATH } from '../../const';
import { useState } from 'react';

export const Card = ({ isLoading, ...props }) => {
  return (
    <div className={styles.card}>
      {isLoading ? <CardLoading /> : <CardBody {...props} />}
    </div>
  );
};

const CardBody = ({ item, favorite = {}, cart = {} }) => {
  const [isItemInCart, setIsItemInCart] = useState(false);
  const [isItemInFavorite, setIsItemInFavorite] = useState(false);
  const { itemId, title, price } = item;
  const { onClickFavorite = true } = favorite;
  const { onClickPlus = true } = cart;

  return (
    <>
      <div className={styles.favorite}>
        {onClickFavorite && (
          <img
            src={isItemInFavorite ? Liked : UnLiked}
            alt="unliked item"
            width={32}
            height={32}
            onClick={() => setIsItemInFavorite(!isItemInFavorite)}
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

        {onClickPlus && (
          <img
            className={styles.plus}
            src={isItemInCart ? '/img/btn-checked.svg' : '/img/btn-plus.svg'}
            alt="plus icon"
            width={32}
            height={32}
            onClick={onClickPlus}
          />
        )}
      </div>
    </>
  );
};
