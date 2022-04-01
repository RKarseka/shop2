import classNames from 'classnames';
import { useState } from 'react';

import { Card } from '../../comps/card';
import { Search } from '../../comps/search';

import styles from './main.module.scss';

export const RenderCards = ({
  sneakers: items,
  isCardsLoading: isLoading,
  searchValue,
  ...props
}) => {
  const filtredItems =
    items &&
    items.filter((item) =>
      item.title.toLowerCase().includes(searchValue?.toLowerCase())
    );
  return (
    <>
      {(isLoading ? [...Array(20)] : filtredItems).map((i = {}, index) => (
        <Card
          key={i.itemId || index}
          item={i}
          isLoading={isLoading}
          {...props}
        />
      ))}
    </>
  );
};

export const Main = (props) => {
  const [searchValue, setSearchValue] = useState('');

  return (
    <div className={'main'}>
      <div className="main__header d-flex align-center mb-40 justify-between">
        <h2 className={classNames('main__title', styles.main__title)}>
          {searchValue ? 'Поиск по запросу:' : 'Все кроссовки'}
        </h2>
        <Search searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
      <div className="main__sneakers d-flex flex-wrap">
        <RenderCards {...props} searchValue={searchValue} />
      </div>
    </div>
  );
};
