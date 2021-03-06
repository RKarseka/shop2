import styles from './cartResponce.module.scss';

export const CartLink = ({ isOverlayOpen, togleOverlay, cartSum }) => {
  return (
    <>
      {isOverlayOpen && (
        <div className={styles.overlay} onClick={togleOverlay} />
      )}

      {!isOverlayOpen && (
        <div className={styles.CartLink} onClick={togleOverlay}>
          {`${cartSum} р.`}
        </div>
      )}
    </>
  );
};
