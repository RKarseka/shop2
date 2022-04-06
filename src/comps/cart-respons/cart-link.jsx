import { scrollOff } from '../../fn';
import styles from './cartResponce.module.scss';

export const CartLink = ({ isOverlayOpen, setIsOverlayOpen, cartSum }) => {
  const togleOverlay = () => {
    scrollOff(!isOverlayOpen);
    setIsOverlayOpen(!isOverlayOpen);
  };
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
