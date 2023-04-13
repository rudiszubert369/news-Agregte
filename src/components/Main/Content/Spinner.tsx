import React from 'react';
import { Row, Spin } from 'antd';
import styled from 'styled-components';

const CountryNewsSpinner = styled(Row)`
  display: flex;
  justify-content: center;
  height: 80vh;
  align-items: center;
`;

const Spinner = () => {
  return (
    <CountryNewsSpinner data-testid="spinner">
      <Spin size="large" />
    </CountryNewsSpinner>
  )
};

export default Spinner;
