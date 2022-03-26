import classNames from 'classnames';
import styles from './search.module.scss';

export const Search = ({ searchValue, setSearchValue }) => {
  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };
  return (
    <div className={classNames(styles.search, 'd-flex')}>
      {searchValue && (
        <img
          onClick={() => setSearchValue('')}
          className={classNames(styles.clear, 'cu-p')}
          src="/img/btn-remove.svg"
          alt="Close"
          width={32}
          height={32}
        />
      )}

      <img src="/img/search.svg" alt="search svg  " />
      <input
        className={styles.input}
        onChange={onChangeSearchInput}
        value={searchValue}
        type="text"
        placeholder="Поиск..."
      />
    </div>
  );
};
