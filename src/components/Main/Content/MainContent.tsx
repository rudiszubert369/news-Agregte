import React from 'react';
import { useParams } from 'react-router-dom';
import { useNews } from '../../../hooks/useNews';
import { getCountryInfo } from '../../../utils/utils';
import NotFound from '../NotFound/NotFound';
import HeaderSection from './HeaderSection';
import NewsContent from './NewsContent';
import LoadMoreButton from './LoadMoreButton';
import { Divider } from 'antd';
import Spinner from './Spinner';

const MainContent = () => {
  const { countryName } = useParams();
  const { countryCode } = getCountryInfo(countryName);
  const { news, error, hasMore, loadMore } = useNews(countryCode);

  if (error) {
    return <NotFound error={error} />;
  }

  if (news.length) {
    return (
      <>
        <Divider />
        <HeaderSection countryCode={countryCode} />
        <Divider />
        <NewsContent news={news} />
        {hasMore && (
          <>
            <Divider />
            <LoadMoreButton loadMore={loadMore} />
          </>
        )}
        <Divider />
      </>
    );
  }

  return <Spinner />;
};

export default MainContent;
