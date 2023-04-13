import React from 'react';
import { RootState } from '../../../store';
import { useSelector } from 'react-redux';
import List from '../Views/List';
import Tile from '../Views/Tile';
import { VIEW_TYPE_LIST, VIEW_TYPE_TILE } from '../../../constants';
import { NewsArticle } from '../../../types';
import { Row, Col } from 'antd';

const NewsContent = ({ news }: { news: NewsArticle[] }) => {
  const currentView = useSelector((state: RootState) => state.view.view);

  return (
    <Row justify="center">
      <Col xs={22} sm={20} md={16} lg={16}>
        {currentView === VIEW_TYPE_TILE && <Tile news={news} />}
        {currentView === VIEW_TYPE_LIST && <List news={news} />}
      </Col>
    </Row>
  );
};

export default NewsContent;
