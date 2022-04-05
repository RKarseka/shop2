import { ITEM_PATH } from '../../const';

import svgLiked from '../../assets/img/liked.svg';
import svgUnliked from '../../assets/img/unliked.svg';
import svgPlus from '../../assets/img/btn-plus.svg';
import svgInCheked from '../../assets/img/btn-checked.svg';

import styles from './card.module.scss';
import classNames from 'classnames';

export const Card = ({
  item,
  isFavBtnLock,
  onClickFavorite,
  isLiked,

  isCartBtnLock,
  onClickCart,
  isAddedToCart,
}) => {
  const { itemId, title, price } = item;
  return (
    <>
      <div
        style={{ cursor: isFavBtnLock ? 'progress' : 'pointer' }}
        className={styles.favorite}
      >
        {onClickFavorite && (
          <img
            src={isLiked ? svgLiked : svgUnliked}
            alt="unliked item"
            width={32}
            height={32}
            onClick={onClickFavorite}
          />
        )}
      </div>
      <img
        className={styles.img}
        src={`${ITEM_PATH}${itemId}.jpg`}
        alt="sneakers #1 img"
        width={170}
        height={140}
      />
      <h5 className={styles.title}>{title}</h5>
      <div
        className={classNames(
          'd-flex justify-between align-center',
          styles.footer
        )}
      >
        <div className="d-flex flex-column ">
          <span className={styles.price}>Цена:</span>
          <b>{price} руб.</b>
        </div>

        {onClickCart && (
          <img
            style={{ cursor: isCartBtnLock ? 'progress' : 'pointer' }}
            src={isAddedToCart ? svgInCheked : svgPlus}
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
