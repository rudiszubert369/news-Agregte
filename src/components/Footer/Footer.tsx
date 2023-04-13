import React from 'react';
import { useSelector } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import { Layout, Typography } from 'antd';
import useCurrentTime from '../../hooks/useCurrentTime';
import { RootState } from '../../store';

const StyledFooter = styled(Layout.Footer)`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  text-align: center;
  padding: 1rem;
`;

const FooterText = styled(Typography.Text)`
  font-weight: bold;
  color: #6C43BF;
  margin-left: 1rem;
`;

const Footer = () => {
  const currentTime = useCurrentTime();
  const currentArticleCount = useSelector((state: RootState) => state.articleCount);

  return (
    <StyledFooter data-testid="footer">
      <FooterText strong type="secondary">{currentTime}</FooterText>
      {currentArticleCount.count > 0 && (
        <FooterText>
          <FormattedMessage
            id="articlesCount"
            defaultMessage="Articles number: "
            description="Article count label"
          />
          <span>{currentArticleCount.count}</span>
        </FooterText>
      )}
    </StyledFooter>
  );
};

export default Footer;
