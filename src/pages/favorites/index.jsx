import { Page } from '../../comps/page';
import { CardLoading } from '../../comps/card/card-loading';

import { useEffect, useState } from 'react';
import { getId } from '../../fn';
import { Card } from '../../comps/card';

const data = {
  title: 'Мои закладки',
  noneCardsData: {
    title: 'Закладок нет :(',
    subtitle: 'Вы ничего не добавляли в закладки.',
    btn: true,
  },
};

const CardRender = ({ cartLocal, toggleCartBtn, toggleFavBtn, ...props }) => {
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
      <Card
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
        Card={CardRender}
        LoadingPatternCard={CardLoading}
        {...data}
        {...props}
        back
      />
    </>
  );
};
