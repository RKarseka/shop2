import { NoneCards } from '../../comps/noneCards';

export const RenderPageBody = ({
  items,
  stylesBody,
  stylesItem,
  noneCardsData = {},
  Card,
  LoadingPatternCard,
  emptyArrLength = 2,
  ...props
}) => {
  const { isLoading } = props;

  const obj = isLoading ? [...Array(emptyArrLength)] : items;

  return (
    <>
      {obj.length ? (
        <div className={stylesBody}>
          {obj.map((i = {}, index) => (
            <div className={stylesItem} key={i.id || index}>
              {isLoading ? (
                <LoadingPatternCard />
              ) : (
                <Card item={i} {...props} />
              )}
            </div>
          ))}
        </div>
      ) : (
        <NoneCards {...noneCardsData} />
      )}
    </>
  );
};
