import { useEffect, useState } from 'react';
import { Page } from '../../comps/page';
import { Card } from '../../comps/card';
import { CardLoading } from '../../comps/card/card-loading';
import { Search } from '../../comps/search';
import { getId } from '../../fn';

const CardRender = ({
  cartLocal,
  favLocal,
  toggleCartBtn,
  toggleFavBtn,
  ...props
}) => {
  const { item } = props;

  const { itemId } = item;

  const [isCartBtnLock, setIsCartBtnLock] = useState(false);
  const [apiIdCart, setApiIdCart] = useState(getId(itemId, cartLocal));

  const [isFavBtnLock, setIsFavBtnLock] = useState(false);
  const [apiIdFav, setApiIdFav] = useState(getId(itemId, favLocal));

  const onClickCart = async () => {
    if (isCartBtnLock) return;
    setIsCartBtnLock(true);

    setApiIdCart(await toggleCartBtn(item, apiIdCart));

    setIsCartBtnLock(false);
  };

  const onClickFavorite = async () => {
    if (isFavBtnLock) return;

    setIsFavBtnLock(true);

    setApiIdFav(await toggleFavBtn(item, apiIdFav));

    setIsFavBtnLock(false);
  };

  useEffect(() => {
    setApiIdCart(getId(itemId, cartLocal));
  }, [itemId, cartLocal]);

  useEffect(() => {
    setApiIdFav(getId(itemId, favLocal));
  }, [itemId, favLocal]);

  return (
    <>
      <Card
        isFavBtnLock={isFavBtnLock}
        onClickFavorite={onClickFavorite}
        isLiked={apiIdFav}
        isCartBtnLock={isCartBtnLock}
        onClickCart={onClickCart}
        isAddedToCart={apiIdCart}
        {...props}
      />
    </>
  );
};

export const Main = ({ items, ...props }) => {
  const [searchValue, setSearchValue] = useState('');
  const filtredItems =
    items &&
    items.filter((item) =>
      item.title.toLowerCase().includes(searchValue?.toLowerCase())
    );
  return (
    <>
      <Page
        items={filtredItems}
        Card={CardRender}
        search={
          <Search searchValue={searchValue} setSearchValue={setSearchValue} />
        }
        LoadingPatternCard={CardLoading}
        title={searchValue ? 'Поиск по запросу:' : 'Все кроссовки'}
        {...props}
      />
    </>
  );
};
