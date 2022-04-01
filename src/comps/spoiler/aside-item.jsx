import classNames from 'classnames';
import { SpoilerItem } from '../spoiler-item';
import styles from './spoiler.module.scss';

const RenderSpoiler = ({ itemsArr, children, ...props }) => (
  <div>
    {itemsArr.map((item) => (
      <SpoilerItem key={item.itemId} item={item} {...props} />
    ))}
    {children}
  </div>
);

const SpoilerEmpty = ({ content }) => {
  const { img, title, subtitle } = content;

  return (
    <div className={styles.SE}>
      <img
        className={styles.SE__img}
        src={img}
        alt="empty spoiler element"
        width={120}
        height={120}
      />
      <h3 className={styles.SE__title}>{title}</h3>
      <p className={styles.SE__subtitle}>{subtitle}</p>
    </div>
  );
};

export const Spoiler = ({ spoilerTitle, spoilerEmpty, itemsArr, ...props }) => {
  const { title } = spoilerTitle;
  return (
    <section className={styles.aside__item}>
      <h2 className={classNames('spoiler__title ', styles.aside__title)}>
        {title}
      </h2>
      <div className="mb-30">
        {itemsArr.length ? (
          <RenderSpoiler itemsArr={itemsArr} {...props} />
        ) : (
          <SpoilerEmpty content={spoilerEmpty} />
        )}
      </div>
    </section>
  );
};
