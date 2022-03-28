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

const CardBody = ({
  item,
  cartLocal,
  favLocal,
  toggleFavBtn,
  toggleCartBtn,
}) => {
  const { itemId, title, price } = item;

  const [isCartBtnLock, setIsCartBtnLock] = useState(false);

  const [isItemInCart, setIsItemInCart] = useState(
    cartLocal.find((i) => i.itemId === itemId)?.id
  );

  const [isFavBtnLock, setIsFavBtnLock] = useState(false);

  const [isItemInFavorite, setIsItemInFavorite] = useState(
    favLocal.find((i) => i.itemId === itemId)?.id
  );

  const onClickFavorite = async () => {
    if (isFavBtnLock) return;
    setIsFavBtnLock(true);
    setIsItemInFavorite(await toggleFavBtn(item, isItemInFavorite));
    setIsFavBtnLock(false);
  };

  const onClickCart = async () => {
    if (isCartBtnLock) return;
    setIsCartBtnLock(true);
    setIsItemInCart(await toggleCartBtn(item, isItemInCart));
    setIsCartBtnLock(false);
  };

  return (
    <>
      <div
        style={{ cursor: isFavBtnLock ? 'progress' : 'pointer' }}
        className={styles.favorite}
      >
        {onClickFavorite && (
          <img
            src={isItemInFavorite ? Liked : UnLiked}
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
            src={isItemInCart ? '/img/btn-checked.svg' : '/img/btn-plus.svg'}
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
