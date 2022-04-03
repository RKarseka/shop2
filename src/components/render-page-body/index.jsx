import { NoneCards } from '../../comps/noneCards';

export const RenderPageBody = ({
  items = [],
  stylesBody,
  stylesItem,
  noneCardsData,
  Card,
  LoadingPatternCard,
  ...props
}) => {
  const { isLoading } = props;

  const obj = isLoading ? [...Array(2)] : items;

  return (
    <>
      {obj.length ? (
        <div className={stylesBody}>
          {obj.map((i = {}, index) => (
            <div className={stylesItem} key={i.id || index}>
              {isLoading ? (
                <LoadingPatternCard key={index} />
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
