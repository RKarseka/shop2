import { Page } from '../../components/page';
import { CardLoading } from '../../comps/card/card-loading';

const data = {
  title: 'Мои закладки',
  noneCardsData: {
    title: 'Закладок нет :(',
    subtitle: 'Вы ничего не добавляли в закладки.',
  },
};

const Card = () => (
  <>
    <span>card</span>
  </>
);

export const Favorites2 = ({ ...props }) => (
  <>
    <Page
      Card={Card}
      LoadingPatternCard={CardLoading}
      {...data}
      {...props}
      back
    />
  </>
);
