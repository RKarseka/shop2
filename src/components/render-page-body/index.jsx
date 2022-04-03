import { NoneCards } from '../../comps/noneCards';

export const RenderPageBody = ({
  items = [],
  stylesBody,
  noneCardsData,
  Card,
  LoadingPatternCard,
  ...props
}) => {
  const { isLoading } = props;

  const obj = isLoading ? [...Array(2)] : items;

  console.log(stylesBody);

  return (
    <>
      {obj.length ? (
        <div className={stylesBody}>
          {obj.map((i = {}, index) =>
            isLoading ? (
              <LoadingPatternCard key={index} />
            ) : (
              <Card key={i.id || index} item={i} {...props} />
            )
          )}
        </div>
      ) : (
        <NoneCards {...noneCardsData} />
      )}
    </>
  );
};
