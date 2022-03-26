import { useEffect, useState } from 'react';

import { getSneakers } from '../../axios';
import { Card } from '../../comps/card';
import { Search } from '../../comps/search';

import styles from './main.module.scss';

export const Main = () => {
  const [sneakers, setSneakers] = useState([]);
  const [isCardsLoading, setIsCardsLoading] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    (async () => {
      try {
        setIsCardsLoading(true);
        setSneakers(await getSneakers());
        setIsCardsLoading(false);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const renderCards = (items, isLoading, searchValue) => {
    const filtredItems =
      items &&
      items.filter((item) =>
        item.title.toLowerCase().includes(searchValue.toLowerCase())
      );
    return (isLoading ? [...Array(20)] : filtredItems).map((i = {}, index) => (
      <Card key={i.itemId || index} item={i} isLoading={isLoading} />
    ));
  };

  return (
    <div className={'main p-40'}>
      <div className="main__header d-flex align-center mb-40 justify-between">
        <h2 className={styles.title}>
          {searchValue ? 'Поиск по запросу:' : 'Все кроссовки'}
        </h2>
        <Search searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
      <div className="main__sneakers d-flex flex-wrap">
        {renderCards(sneakers, isCardsLoading, searchValue)}
      </div>
    </div>
  );
};
