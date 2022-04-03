import { Page } from '../../components/page';
import { CardLoading } from '../../comps/card/card-loading';
import { Card2 } from '../../comps/card/card2';

import cardStyles from '../../comps/card/card.module.scss';
import { useEffect, useState } from 'react';
import { getId } from '../../fn';

const data = {
  title: 'Мои закладки',
  noneCardsData: {
    title: 'Закладок нет :(',
    subtitle: 'Вы ничего не добавляли в закладки.',
  },
};

const Card2Render = ({ cartLocal, toggleCartBtn, toggleFavBtn, ...props }) => {
  const { item } = props;

  const { itemId, id } = item;

  const [isCartBtnLock, setIsCartBtnLock] = useState(false);
  const [apiIdCart, setApiIdCart] = useState(getId(itemId, cartLocal));

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
      <Card2
        onClickCart={onClickCart}
        isCartBtnLock={isCartBtnLock}
        isAddedToCart={apiIdCart}
        onClickFavorite={onClickFavorite}
        isLiked
        {...props}
      />
    </>
  );
};

export const Favorites = ({ ...props }) => {
  return (
    <>
      <Page
        Card={Card2Render}
        stylesItem={cardStyles.card}
        LoadingPatternCard={CardLoading}
        {...data}
        {...props}
        back
      />
    </>
  );
};
