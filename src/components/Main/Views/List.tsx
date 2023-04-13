import React from 'react';
import { NewsArticle, NewsProps } from '../../../types';
import withModal from '../Modal/withModal';
import { formatPublishedDate } from '../../../utils/utils';
import { List as AntList, Typography } from 'antd';

const { Title, Text } = Typography;

const NewsList = ({ news }: NewsProps) => {
  return (
    <AntList
      itemLayout="vertical"
      dataSource={news}
      renderItem={(article: NewsArticle, index: number) => (
        <AntList.Item
          key={index}
          onClick={article.onClick}
          style={{ cursor: 'pointer' }}
        >
          <Title level={3}>{article.title}</Title>
          <Text>{formatPublishedDate(article.publishedAt)}</Text>
          <br />
          <Text style={{ color: '#6C43BF', fontWeight: 'bold' }}>{article.source.name}</Text>
        </AntList.Item>
      )}
    />
  );
};

export default withModal(NewsList);
