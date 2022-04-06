import ContentLoader from 'react-content-loader';

export const CardLoading = () => (
  <ContentLoader
    speed={2}
    width={140}
    height={250}
    viewBox="0 0 140 265"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="1" y="0" rx="10" ry="10" width="140" height="155" />
    <rect x="0" y="167" rx="5" ry="5" width="140" height="15" />
    <rect x="0" y="187" rx="5" ry="5" width="100" height="15" />
    {/* <rect x="1" y="234" rx="5" ry="5" width="80" height="25" />
    <rect x="124" y="230" rx="10" ry="10" width="32" height="32" /> */}
  </ContentLoader>
);

export const OrderLoading = () => (
  <ContentLoader
    speed={2}
    width={280}
    height={36}
    viewBox="0 0 280 36"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="0" rx="3" ry="3" width="280" height="6" />
    <rect x="0" y="12" rx="3" ry="3" width="260" height="6" />
    <rect x="0" y="24" rx="3" ry="3" width="178" height="6" />
  </ContentLoader>
);
