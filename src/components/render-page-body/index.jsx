import { NoneCards } from '../../comps/noneCards';

export const RenderPageBody = ({
  items = [],
  stylesBody,
  data,
  Card,
  ...props
}) => {
  const { isLoading } = props;

  const obj = isLoading ? [...Array(2)] : items;

  return (
    <div className={stylesBody}>
      {obj.length ? (
        obj.map((i = {}, index) => (
          <Card key={i.id || index} item={i} {...props} />
        ))
      ) : (
        <NoneCards {...data} />
      )}
    </div>
  );
};
