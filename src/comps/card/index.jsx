import { CardLoading } from './card-loading';
import styles from './card.module.scss';
import Liked from '../../assets/img/liked.svg';
import UnLiked from '../../assets/img/unliked.svg';

export const Card = ({ isLoading, ...props }) => {
  return (
    <div className={styles.card}>
      {isLoading ? <CardLoading /> : <CardBody {...props} />}
    </div>
  );
};

const CardBody = ({ item, favorite = {}, cart = {} }) => {
  const { itemId, title, price } = item;
  const { isFavorite, onClickFavorite = true } = favorite;
  const { isItemsAdded, onClickPlus = true } = cart;

  return (
    <>
      <div className={styles.favorite}>
        {onClickFavorite && (
          <img
            src={isFavorite ? Liked : UnLiked}
            alt="unliked item"
            width={32}
            height={32}
            onClick={onClickFavorite}
          />
        )}
      </div>
      <img
        src={`/img/sneakers/${itemId}.jpg`}
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
            src={isItemsAdded ? '/img/btn-checked.svg' : '/img/btn-plus.svg'}
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
