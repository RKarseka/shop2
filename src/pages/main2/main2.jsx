import { Page } from '../../components/page';
import { RenderPageBody } from '../../components/render-page-body';
import styles from './main2.module.scss';

const Card = () => <span>WrappedComponent</span>;

// const RenderMain2Body = RenderPageBody(Card);

export const Main2 = ({ ...props }) => {
  return (
    <>
      <Page
        title={'Все кроссовки'}
        Card={Card}
        stylesBody={styles.body}
        back
        {...props}
      />
    </>
  );
};
