import React from 'react';
import { render } from '@testing-library/react';
import Spinner from '../Content/Spinner';

const matchMediaMock = () => ({
  matches: false,
  addListener: jest.fn(),
  removeListener: jest.fn(),
});

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: matchMediaMock,
});

describe('<Spinner />', () => {
  it('should render a spinner', () => {
    const { getByTestId } = render(<Spinner />);
    const spinnerElement = getByTestId('spinner');
    expect(spinnerElement).toBeInTheDocument();
  });
});
