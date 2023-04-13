import React from 'react';
import LanguageSwitcher from './LanguageSwitcher';
import ViewSwitcher from './ViewSwitcher';
import { Link } from 'react-router-dom';
import { APP_NAME } from '../../constants';
import { Layout, Typography, Space, Row, Col } from 'antd';
import styled from 'styled-components';
import ProjectSummaryPopup from './ProjectSummaryPopup';

const { Header: AntHeader } = Layout;
const { Title } = Typography;

const StyledHeader = styled(AntHeader)`
  background-color: rgb(35 30 54);
  padding: 0 24px;
  height: 200px;
  padding-top: 50px;
`;

const StyledLink = styled(Link)`
  color: 'white',
  textDecoration: 'none',
`;

const StyledTitle = styled(Title)`
  color: #6C43BF !important;
  transition: transform 0.3s ease-in-out;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
  position:fixed;
  z-index: 99;

  &:hover {
    transform: scale(1.1);
  }

  @media screen and (max-width: 767px) {
    position: relative;
  }
`;


const Header = () => {
  return (
    <>
      <StyledHeader>
        <Row justify="space-between" align="middle">
          <Col>
            <StyledLink to="/">
              <StyledTitle level={1}>
                {APP_NAME}
              </StyledTitle>
            </StyledLink>
          </Col>
          <Col>
            <ProjectSummaryPopup />
          </Col>
        </Row>
        <Row justify="end">
          <Col>
            <Space align="center">
              <LanguageSwitcher />
              <ViewSwitcher />
            </Space>
          </Col>
        </Row>
      </StyledHeader>
    </>
  );
};

export default Header;
