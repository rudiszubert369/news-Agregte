import React from 'react';
import { NewsArticle, NewsProps } from '../../../types';
import withModal from '../Modal/withModal';
import { formatPublishedDate } from '../../../utils/utils';
import { Row, Col, Card, Typography } from 'antd';
import styled from 'styled-components';

const { Title, Paragraph } = Typography;

const StyledTitle = styled(Title)`
  white-space: normal;
  overflow: hidden;
`;

const SourceParagraph = styled(Paragraph)`
  color: #6C43BF;
  font-weight: bold;
`;

const Tile = ({ news }: NewsProps) => {
  return (
    <Row gutter={[16, 16]}>
      {news.map((article: NewsArticle, index: number) => (
        <Col key={index} xs={24} sm={12} md={12} lg={12}>
          <Card
            hoverable
            cover={article.urlToImage && <img src={article.urlToImage} alt={article.title} />}
            onClick={article.onClick}
          >
            <Card.Meta
                title={
                  <StyledTitle level={4}>
                  {article.title}
                  </StyledTitle>
                }
                description={(
                <>
                  <Paragraph>{article.description}</Paragraph>
                  <Paragraph>{formatPublishedDate(article.publishedAt)}</Paragraph>
                  <SourceParagraph>{article.source.name}</SourceParagraph>
                </>
              )}
            />
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default withModal(Tile);
