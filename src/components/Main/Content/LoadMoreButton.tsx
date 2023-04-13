import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Button, Col, Row, Space } from 'antd';

const LoadMoreButton = ({ loadMore }: { loadMore: () => void }) => (
  <Row justify="center">
    <Col>
      <Space>
        <Button type="primary" onClick={loadMore}>
          <FormattedMessage
            id="showMore"
            defaultMessage="Show more"
            description="Load more button"
          />
        </Button>
      </Space>
    </Col>
  </Row>
);

export default LoadMoreButton;
