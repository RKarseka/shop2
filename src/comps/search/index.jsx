import classNames from 'classnames';

import remove from '../../assets/img/btn-remove.svg';

import styles from './search.module.scss';

export const Search = ({ searchValue, setSearchValue }) => {
  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };
  return (
    <div class={styles.search}>
      <input
        class={styles.input}
        onChange={onChangeSearchInput}
        type="text"
        placeholder="Поиск..."
        value={searchValue}
      />
      {searchValue && (
        <img
          onClick={() => setSearchValue('')}
          className={classNames(styles.clear, 'cu-p')}
          src={remove}
          alt="Close"
        />
      )}
    </div>
  );
};
