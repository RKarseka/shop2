import { NoneCards } from '../comps/noneCards';

export const RenderPage =
  (WrappedComponent) =>
  ({ isLoading, items, data, styles, ...props }) => {
    const obj = isLoading ? [...Array(1)] : items;
    return (
      <div className={styles}>
        {obj.length ? (
          obj.map((i = {}, index) => (
            <WrappedComponent
              key={i.id || index}
              item={i}
              isLoading={isLoading}
              ordersList={items}
              {...props}
            />
          ))
        ) : (
          // '....'
          <NoneCards {...data} />
        )}
      </div>
    );
  };
