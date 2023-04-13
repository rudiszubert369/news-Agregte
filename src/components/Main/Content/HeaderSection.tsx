import React, { useState, useEffect } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { Col, Row, Typography } from 'antd';
import styled from 'styled-components';

const { Title } = Typography;

const HeaderTitle = styled(Title)`
  text-align: center;
  color: #333;
  font-size: 2rem;
  margin: 0;
  color:#6C43BF!important;
  font-weight: bold;
  padding: 10px;
`;

const HeaderSection = ({ countryCode }: { countryCode: string | undefined | null }) => {
  const [country, setCountry] = useState(countryCode);
  const intl = useIntl();

  //workaround for countryName updating too fast
  useEffect(() => {
    setCountry(countryCode);
  }, [countryCode]);

  return (
    <Row justify="center">
      <Col xs={24} sm={20} md={16} lg={12}>
        <HeaderTitle level={2}>
          {countryCode && (
            <FormattedMessage
              id="newsFor"
              defaultMessage="News for {countryName}"
              description="Heading for news list with current country"
              values={{ countryName: intl.formatMessage({ id: country as string }) }}
            />
          )}
        </HeaderTitle>
      </Col>
    </Row>
  );
};

export default HeaderSection;
